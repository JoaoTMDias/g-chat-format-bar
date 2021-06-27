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
	--palette-emerald-50: hsl(166, 76%, 98%);
	--header-height: 3rem;

	:root[data-theme="light"] {
		--color-primary: var(--palette-emerald-500);
		--color-primary-light: var(--palette-emerald-200);
		--color-primary-dark: var(--palette-emerald-700);
		--color-black: var(--palette-blue-gray-900);
		--color-text: var(--color-black);
		--color-gray: var(--palette-blue-gray-500);
		--color-gray-light: var(--palette-blue-gray-300);
		--color-gray-dark: var(--palette-blue-gray-600);
		--color-background: var(--palette-emerald-50);
		--color-button-text: var(--color-gray);
		--focus-ring-color: var(--color-gray-light);
		--focus-ring-width: 2px;
		--focus-ring: 0 0 0 var(--focus-ring-width) var(--color-gray-light);
		--focus-ring-active: 0 0 0 var(--focus-ring-width) var(--color-primary-dark);
	}

	:root[data-theme="dark"] {
		--color-primary: var(--palette-emerald-500);
		--color-primary-light: var(--palette-emerald-200);
		--color-primary-dark: var(--palette-emerald-700);
		--color-black: var(--palette-blue-gray-900);
		--color-text: var(--palette-blue-gray-50);
		--color-gray: var(--palette-blue-gray-500);
		--color-gray-light: var(--palette-blue-gray-300);
		--color-gray-dark: var(--palette-blue-gray-600);
		--color-background: var(--palette-blue-gray-900);
		--color-button-text: var(--color-gray-light);
		--focus-ring-color: var(--color-gray-light);
		--focus-ring-width: 2px;
		--focus-ring: 0 0 0 var(--focus-ring-width) var(--color-gray-light);
		--focus-ring-active: 0 0 0 var(--focus-ring-width) var(--color-primary-light);
	}
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
	min-width: 30rem;
	height: 100%;
	min-height: 20rem;
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
