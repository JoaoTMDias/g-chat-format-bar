import { useEffect, useContext } from "preact/compat";
import { useMount, useLocalStorage } from "react-use";
import ThemeContext, { TTHEME, THEME } from "./context";

export default function useTheme() {
	return useContext(ThemeContext);
}

const isNativeDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
 * Saves the theme onto the localstorage
 *
 * @export
 * @returns {([
 * 	TTHEME | undefined,
 * 	(action: TTHEME | undefined) => void,
 * ])}
 */
export function useThemeStorage(): [TTHEME | undefined, (action: TTHEME | undefined) => void] {
	const [state, setState] = useLocalStorage<TTHEME>(
		"theme",
		isNativeDarkTheme ? THEME.dark : THEME.light,
	);

	useMount(() => {
		const hasThemeInStorage = !!state;

		switch (true) {
			case hasThemeInStorage:
			default:
				break;

			case isNativeDarkTheme:
				setState(THEME.dark);
				break;
		}
	});

	useEffect(() => {
		const html = document.querySelector("html");

		if (html) {
			html.setAttribute("data-theme", `${state}`);
		}
	}, [state]);

	return [state, setState];
}
