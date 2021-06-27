// Libraries
import React, { useState, useLayoutEffect } from "react";
import ThemeContext, { IThemeContext, defaultThemeContext, ETHEME } from "./context";

/**
 * @returns {React.ReactElement}
 */
const ThemeProvider: React.FunctionComponent = ({ children }) => {
	const [theme, setTheme] = useState(defaultThemeContext.theme);

	useLayoutEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)")) {
			setTheme(ETHEME.dark);
		}
	}, []);

	useLayoutEffect(() => {
		const html = document.querySelector("html");

		if (html) {
			html.setAttribute("data-theme", `${theme}`);
		}
	}, [theme]);

	const value: IThemeContext = {
		theme,
		onChangeTheme: () => setTheme(theme === ETHEME.light ? ETHEME.dark : ETHEME.light),
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
