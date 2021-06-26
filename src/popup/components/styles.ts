import styled, { css, createGlobalStyle } from "styled-components";

const srOnly = css`
	border: 0;
	clip: rect(0 0 0 0);
	height: auto;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: absolute !important;
	width: 1px;
	white-space: nowrap;
`;

export const Global = createGlobalStyle`
  :root {
    --font-family: 'Roboto',Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;
	--palette-blue-gray-900: hsl(222, 47%, 11%);
	--palette-blue-gray-800: hsl(217, 33%, 17%);
	--palette-blue-gray-700: hsl(215, 25%, 27%);
	--palette-blue-gray-600: hsl(215, 19%, 35%);
	--palette-blue-gray-500: hsl(215, 16%, 47%);
	--palette-blue-gray-400: hsl(215, 20%, 65%);
	--palette-blue-gray-300: hsl(213, 27%, 84%);
	--palette-blue-gray-200: hsl(214, 32%, 91%);
	--palette-blue-gray-100: hsl(210, 40%, 96%);
	--palette-blue-gray-50: hsl(210, 40%, 98%);
	--palette-emerald-900: hsl(164, 86%, 16%);
	--palette-emerald-800: hsl(163, 88%, 20%);
	--palette-emerald-700: hsl(163, 94%, 24%);
	--palette-emerald-600: hsl(161, 94%, 30%);
	--palette-emerald-500: hsl(160, 84%, 39%);
	--palette-emerald-400: hsl(158, 64%, 52%);
	--palette-emerald-300: hsl(156, 72%, 67%);
	--palette-emerald-200: hsl(152, 76%, 80%);
	--palette-emerald-100: hsl(149, 80%, 90%);
	--palette-emerald-50: hsl(166, 76%, 97%);

    --color-primary: var(--palette-emerald-500);
    --color-primary-light: var(--palette-emerald-200);
    --color-primary-dark: var(--palette-emerald-700);
	--color-black: var(--palette-blue-gray-900);
	--color-gray: var(--palette-blue-gray-500);
	--color-gray-dark: var(--palette-blue-gray-600);
    --color-background: var(--palette-emerald-50);
    --focus-ring-color: var(--color-primary);
    --focus-ring: 0 0 0px 2px var(--focus-ring-color);

	--header-height: 3rem;

	/* @media (prefers-color-scheme: dark) {
		--focus-ring-color: var(--color-gray);
		--color-background: hsl(222, 47%, 11%);
		--color-background-dark: hsl(222, 47%, 8%);
	} */
  }


  * {
    box-sizing: border-box;

    &:not(textarea, input) {
      user-select: none;
    }
  }

  body {
    margin: 0;
    overflow: hidden;
    padding: 0;
    font-family: var(--font-family);
    background-color: var(--color-background);
	min-width: 480px;
	height: 100%;
	min-height: 320px;
  }

  .sr-only {
    ${srOnly};
  }

  main,
  form {
	  width: 100%;
  }

  main {
	  min-height: calc(100vh - var(--header-height));
  }

  [data-tooltip] {
    position: relative;

    &::after {
      background-color: var(--color-black);
      color: var(--palette-blue-gray-50);
      display: none;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 999;
      border-radius: 1rem;
      padding: 2px 0.5rem;
      text-align: center;
      content: attr(data-tooltip);
      transform: translate(-50%, calc(-100% - 0.25rem));
      font-size: 0.6875rem;
      opacity: 0;
      transition: opacity 128ms ease-in-out;
      white-space: nowrap;
    }

    &,
    &.is-selected {
      &:hover,
      &:focus {
        &::after {
          display: block;
          opacity: 1;
        }
      }
    }
  }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
`;

export const Header = styled.header`
	width: 100%;
	height: var(--header-height);
	border: none;
	text-align: left;
	display: flex;
	padding-inline: 1rem;
	margin: 0;
	justify-content: space-between;
	align-items: center;

	.title {
		margin: 0;

		&:focus {
			outline: none;
		}
	}

	.title,
	.logo {
		height: 1.5rem;
		width: auto;
	}
`;

export const Wrapper = styled.form`
	display: grid;
	grid-template-rows: var(--header-height) 1fr var(--header-height);
	gap: 0.5rem;
	padding: 1rem 1.25rem;
`;

export const Textarea = styled.textarea`
	--focus-ring-color: var(--color-gray);
	--focus-ring: 0 0 0px 2px var(--focus-ring-color);

	width: 100%;
	height: 100%;
	padding: 0.5rem;
	display: flex;
	border: none;
	box-shadow: var(--focus-ring);
	caret-color: var(--color-primary-dark);
	background-color: var(--color-background);


	&::placeholder {
		color: var(--palette-blue-gray-100);
		font-style: italic;
	}

	&:focus {
		--focus-ring-color: var(--color-primary);

		outline: none;
		background-color: var(--color-background-dark, var(--color-background));
	}
`;

export const ToolbarList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	list-style-type: none;
	margin: 0;
	height: var(--header-height);
	padding: 0;
	gap: 2px;
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: var(--header-height);
	padding: 0;
	margin: 0;
	border-radius: 0;

	&:first-of-type {
		button {
			border-top-left-radius: 0.5rem;
			border-bottom-left-radius: 0.5rem;
		}
	}

	&:last-child {
		button {
			border-top-right-radius: 0.5rem;
			border-bottom-right-radius: 0.5rem;
		}
	}
`;

export const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	outline: none;
	transition: box-shadow 64ms ease-in-out;
	font-family: var(--font-family);
	width: 100%;
	height: 100%;
	padding: 0 0.5rem;
	border-radius: 0;
	cursor: pointer;

	&__icon {
		fill: var(--color-gray);
	}

	&:hover,
	&:focus {
		background-color: var(--color-primary-light);
	}

	&.is-selected:focus {
		box-shadow: var(--focus-ring);
	}

	&:focus:active,
	&:active {
		background-color: var(--color-primary);
		color: var(--color-background);
	}

	&:hover,
	&:focus,
	&:active {
		color: var(--color-primary-dark);

		.g-chat-format-bar__button__icon {
			fill: currentColor;
		}
	}
`;

export const CopyClipboard = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	font-family: var(--font-family);
	border: none;
	outline: none;
	transition: box-shadow 64ms ease-in-out;
	width: 100%;
	height: 100%;
	padding: 0 0.5rem;
	border-radius: 4px;
	cursor: pointer;

	.icon {
		display: grid;
		place-items: center;
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--color-gray);
	}

	&:hover,
	&:focus {
		background-color: var(--color-primary-light);
	}

	&.is-selected:focus {
		--focus-ring-color: var(--color-primary-dark);
		box-shadow: var(--focus-ring);
	}

	&:focus:active,
	&:active {
		background-color: var(--color-primary-dark);
		color: var(--color-background);
	}

	&:hover,
	&:focus,
	&:active {
		color: var(--color-primary-dark);

		.icon {
			fill: currentColor;
		}
	}
`;

export const SelectTheme = styled.fieldset`
	margin: 0;
	padding: 0;
	border: none;

	label {
		${srOnly};
	}

	select {
		display: flex;
		flex-direction: row;
		align-items: center;
		background: var(--color-background);
		color: var(--color-black);
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--color-gray);
		font-size: 1rem;
		line-height: 1;

		&:focus-visible {
			outline: none;
			box-shadow: var(--focus-ring);
		}
	}
`;
