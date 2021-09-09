import { FunctionComponent } from "preact";
import { useCallback } from "preact/compat";
import ThemeContext, { IThemeContext, THEME } from "./context";
import { useThemeStorage } from "./useTheme";

/**
 * @returns {JSX.Element}
 */
const ThemeProvider: FunctionComponent = ({ children }) => {
	const [theme, setTheme] = useThemeStorage();

	const onChangeTheme = useCallback(() => {
		const next = theme === THEME.light ? THEME.dark : THEME.light;

		setTheme(next);
	}, [theme, setTheme]);

	const value: IThemeContext = {
		theme: theme || THEME.light,
		onChangeTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
