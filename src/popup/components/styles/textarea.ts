import styled from "styled-components";

export const Textarea = styled.textarea`
	--focus-ring-color: var(--color-gray);
	--focus-ring-width: 1px;
	--color-textarea-caret: var(--color-primary-dark);
	--color-textarea-text: var(--color-black);
	--color-textarea-placeholder: var(--palette-blue-gray-100);
	--color-textarea-bg: var(--color-background);

	html[data-theme="dark"] & {
		--color-textarea-caret: var(--color-primary-light);
		--color-textarea-text: var(--color-white);
		--color-textarea-placeholder: var(--palette-blue-gray-500);
	}

	width: 100%;
	min-height: var(--min-textarea-height);
	height: calc(100vh - calc(var(--header-height) * 4));
	padding: 0.5rem;
	display: flex;
	border: none;
	flex: 1 1 auto;
	caret-color: var(--color-textarea-caret);
	background-color: var(--color-textarea-bg);
	color: var(--color-textarea-text);
	box-shadow: var(--focus-ring);

	&::placeholder {
		color: var(--color-textarea-placeholder);
		font-style: italic;
	}

	&:focus {
		box-shadow: var(--focus-ring-active);

		outline: none;
		background-color: var(--color-background-dark, var(--color-background));
	}

	&:focus-visible {
		--focus-ring-width: 2px;
	}
`;
