import styled from "styled-components";

export const Textarea = styled.textarea`
	--focus-ring-color: var(--color-gray);
	--focus-ring-width: 1px;

	width: 100%;
	height: 100%;
	padding: 0.5rem;
	display: flex;
	border: none;
	caret-color: var(--color-primary-dark);
	background-color: var(--color-background);
	box-shadow: var(--focus-ring);

	&::placeholder {
		color: var(--palette-blue-gray-100);
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
