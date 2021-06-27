import styled from "styled-components";

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
	box-shadow: var(--focus-ring-active);
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
color: var(--color-text);

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
