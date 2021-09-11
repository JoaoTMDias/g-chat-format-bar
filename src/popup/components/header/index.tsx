import { useCallback, useEffect, useRef, memo } from "preact/compat";
import useTheme from "../../context/theme/useTheme";
import styles from "./index.module.scss";

const Header = () => {
	const ref = useRef<HTMLHeadingElement>(null);
	const { theme, onChangeTheme } = useTheme();

	useEffect(() => {
		if (ref && ref.current) {
			ref.current.focus();
		}
	}, []);

	const handleOnChangeTheme = useCallback(() => {
		onChangeTheme();
	}, [onChangeTheme]);

	return (
		<header className={styles.header}>
			<h1 ref={ref} className={styles["header__title"]} tabIndex={-1}>
				<span id="title" className="sr-only">
					Google Chat Formatter
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="464"
					height="96"
					fill="none"
					viewBox="0 0 464 96"
					aria-labelledby="title"
					className={styles["header__logo"]}
				>
					<path
						fill="#69F0AE"
						d="M78.981 41.977C78.981 22.66 63.292 7 43.977 7 24.66 7 9 22.66 9 41.977c0 18.298 16.678 33.136 34.977 33.136V88C65.23 77.221 78.98 59.876 78.98 41.977z"
					/>
					<path
						fill="#00E676"
						d="M81.512 41.977C81.512 22.66 65.823 7 46.508 7 27.192 7 11.53 22.66 11.53 41.977c0 18.298 14.147 33.136 32.446 33.136V88C65.23 77.221 81.511 59.876 81.511 41.977z"
					/>
					<path
						fill="var(--color-black)"
						d="M40.763 47.364h-10.27l-2.15 6.104h-4.788L33.57 27.25h4.133l10.034 26.218h-4.808l-2.166-6.104zm-8.978-3.674h7.685l-3.843-10.876-3.842 10.876zM63.968 53.468c-.194-.372-.364-.978-.51-1.819-1.408 1.453-3.131 2.18-5.17 2.18-1.98 0-3.594-.56-4.844-1.675-1.25-1.117-1.876-2.498-1.876-4.142 0-2.077.777-3.668 2.33-4.772 1.567-1.116 3.8-1.675 6.702-1.675h2.713v-1.278c0-1.008-.285-1.813-.856-2.413-.57-.612-1.438-.918-2.604-.918-1.007 0-1.833.252-2.476.756-.644.492-.965 1.122-.965 1.89h-4.425c0-1.068.358-2.064 1.074-2.988.716-.937 1.688-1.67 2.914-2.197 1.238-.529 2.616-.793 4.133-.793 2.307 0 4.146.577 5.518 1.73 1.371 1.14 2.075 2.748 2.112 4.825v8.787c0 1.753.249 3.151.746 4.196v.306H63.97zm-4.861-3.151c.874 0 1.693-.21 2.458-.63.777-.42 1.36-.985 1.748-1.693V44.32h-2.386c-1.638 0-2.87.282-3.696.846-.825.564-1.238 1.362-1.238 2.395 0 .84.279 1.512.837 2.017.571.492 1.33.738 2.277.738z"
					/>
					<path
						fill="var(--color-text)"
						d="M145.358 69.992c-6.572 0-12.069-2.211-16.492-6.634-4.381-4.423-6.572-9.94-6.572-16.554 0-6.613 2.191-12.11 6.572-16.492 4.381-4.464 9.879-6.696 16.492-6.696 6.696 0 12.131 2.418 16.306 7.254l-4.092 3.968c-3.183-3.844-7.254-5.766-12.214-5.766-4.919 0-9.031 1.653-12.338 4.96-3.265 3.265-4.898 7.523-4.898 12.772 0 5.25 1.633 9.507 4.898 12.772 3.307 3.307 7.419 4.96 12.338 4.96 5.167 0 9.651-2.17 13.454-6.51l4.154 4.03c-2.108 2.521-4.691 4.485-7.75 5.89-3.059 1.364-6.345 2.046-9.858 2.046zM168.035 24.608h5.704V38.62l-.248 4.216h.248c.868-1.488 2.19-2.728 3.968-3.72 1.818-.992 3.699-1.488 5.642-1.488 3.72 0 6.572 1.075 8.556 3.224 2.025 2.108 3.038 5.125 3.038 9.052V69h-5.704V51.02c0-5.456-2.418-8.184-7.254-8.184-2.315 0-4.278.971-5.89 2.914-1.571 1.901-2.356 4.133-2.356 6.696V69h-5.704V24.608zM205.489 59.7c0 1.488.62 2.728 1.86 3.72 1.282.992 2.77 1.488 4.464 1.488 2.398 0 4.526-.889 6.386-2.666 1.902-1.777 2.852-3.865 2.852-6.262-1.777-1.405-4.257-2.108-7.44-2.108-2.314 0-4.257.558-5.828 1.674-1.529 1.116-2.294 2.5-2.294 4.154zm7.378-22.072c4.216 0 7.544 1.137 9.982 3.41 2.439 2.232 3.658 5.311 3.658 9.238V69h-5.456v-4.216h-.248c-2.356 3.472-5.497 5.208-9.424 5.208-3.348 0-6.158-.992-8.432-2.976-2.232-1.984-3.348-4.464-3.348-7.44 0-3.141 1.178-5.642 3.534-7.502 2.398-1.86 5.58-2.79 9.548-2.79 3.39 0 6.18.62 8.37 1.86v-1.302c0-1.984-.785-3.658-2.356-5.022-1.57-1.405-3.41-2.108-5.518-2.108-3.182 0-5.704 1.343-7.564 4.03l-5.022-3.162c2.77-3.968 6.862-5.952 12.276-5.952zM244.363 69.496c-2.48 0-4.546-.765-6.2-2.294-1.612-1.53-2.438-3.658-2.48-6.386V43.828h-5.332V38.62h5.332v-9.3h5.704v9.3h7.44v5.208h-7.44v15.128c0 2.025.393 3.41 1.178 4.154.786.703 1.674 1.054 2.666 1.054a6.62 6.62 0 001.302-.124 8.665 8.665 0 001.24-.434l1.798 5.084c-1.488.537-3.224.806-5.208.806zM274.572 49.966V69h-5.704V24.608h25.916v5.456h-20.212v14.57H292.8v5.332h-18.228zM296.656 53.81c0-4.67 1.467-8.535 4.402-11.594 2.976-3.059 6.717-4.588 11.222-4.588s8.225 1.53 11.16 4.588c2.976 3.059 4.464 6.923 4.464 11.594 0 4.712-1.488 8.577-4.464 11.594-2.935 3.059-6.655 4.588-11.16 4.588s-8.246-1.53-11.222-4.588c-2.935-3.059-4.402-6.923-4.402-11.594zm5.704 0c0 3.265.951 5.91 2.852 7.936 1.901 2.025 4.257 3.038 7.068 3.038s5.167-1.013 7.068-3.038c1.901-2.025 2.852-4.67 2.852-7.936 0-3.224-.951-5.849-2.852-7.874-1.943-2.067-4.299-3.1-7.068-3.1-2.769 0-5.125 1.033-7.068 3.1-1.901 2.025-2.852 4.65-2.852 7.874zM338.184 69h-5.704V38.62h5.456v4.96h.248c.578-1.612 1.756-2.976 3.534-4.092 1.818-1.157 3.596-1.736 5.332-1.736 1.653 0 3.058.248 4.216.744l-1.736 5.518c-.703-.29-1.819-.434-3.348-.434-2.15 0-4.03.868-5.642 2.604-1.571 1.736-2.356 3.761-2.356 6.076V69zM360.707 69h-5.704V38.62h5.456v4.216h.248c.868-1.488 2.191-2.728 3.968-3.72 1.819-.992 3.617-1.488 5.394-1.488 2.232 0 4.196.517 5.89 1.55a9.138 9.138 0 013.72 4.278c2.522-3.885 6.014-5.828 10.478-5.828 3.514 0 6.221 1.075 8.122 3.224 1.902 2.15 2.852 5.208 2.852 9.176V69h-5.704V50.896c0-2.852-.516-4.898-1.55-6.138-1.033-1.281-2.769-1.922-5.208-1.922-2.19 0-4.03.93-5.518 2.79-1.488 1.86-2.232 4.05-2.232 6.572V69h-5.704V50.896c0-2.852-.516-4.898-1.55-6.138-1.033-1.281-2.769-1.922-5.208-1.922-2.19 0-4.03.93-5.518 2.79-1.488 1.86-2.232 4.05-2.232 6.572V69zM411.651 59.7c0 1.488.62 2.728 1.86 3.72 1.282.992 2.77 1.488 4.464 1.488 2.398 0 4.526-.889 6.386-2.666 1.902-1.777 2.852-3.865 2.852-6.262-1.777-1.405-4.257-2.108-7.44-2.108-2.314 0-4.257.558-5.828 1.674-1.529 1.116-2.294 2.5-2.294 4.154zm7.378-22.072c4.216 0 7.544 1.137 9.982 3.41 2.439 2.232 3.658 5.311 3.658 9.238V69h-5.456v-4.216h-.248c-2.356 3.472-5.497 5.208-9.424 5.208-3.348 0-6.158-.992-8.432-2.976-2.232-1.984-3.348-4.464-3.348-7.44 0-3.141 1.178-5.642 3.534-7.502 2.398-1.86 5.58-2.79 9.548-2.79 3.39 0 6.18.62 8.37 1.86v-1.302c0-1.984-.785-3.658-2.356-5.022-1.57-1.405-3.41-2.108-5.518-2.108-3.182 0-5.704 1.343-7.564 4.03l-5.022-3.162c2.77-3.968 6.862-5.952 12.276-5.952zM450.525 69.496c-2.48 0-4.546-.765-6.2-2.294-1.612-1.53-2.438-3.658-2.48-6.386V43.828h-5.332V38.62h5.332v-9.3h5.704v9.3h7.44v5.208h-7.44v15.128c0 2.025.393 3.41 1.178 4.154.786.703 1.674 1.054 2.666 1.054a6.62 6.62 0 001.302-.124 8.665 8.665 0 001.24-.434l1.798 5.084c-1.488.537-3.224.806-5.208.806z"
					/>
				</svg>
			</h1>
			<fieldset className={styles["theme-selector"]}>
				<label htmlFor="theme">Theme</label>
				<select id="theme" value={theme} data-testid="select-theme" onChange={handleOnChangeTheme}>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
				<svg width="24px" height="24px" viewBox="0 0 24 24" focusable="false" className="icon">
					<path fill="currentColor" d="M7 10l5 5 5-5z"></path>
				</svg>
			</fieldset>
		</header>
	);
};

export default memo(Header);