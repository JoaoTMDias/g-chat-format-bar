import { createContext } from "preact/compat";

export const THEME = {
	light: "light",
	dark: "dark",
} as const;

export type TTHEME = "light" | "dark";

export interface IThemeContext {
	theme: TTHEME;
	onChangeTheme(): void;
}

export const defaultThemeContext: IThemeContext = {
	theme: THEME.light,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onChangeTheme: () => {},
};

/**
 * @description Context for Themes
 * @author João Dias
 * @param {IThemeContext}
 * @returns
 */
const ThemeContext = createContext<IThemeContext>(defaultThemeContext);

export default ThemeContext;
