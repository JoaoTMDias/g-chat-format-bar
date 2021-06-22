import styled from "styled-components";

export const SelectTheme = styled.fieldset`
	--button-size: 3rem;
	--icon-size: calc(var(--button-size) * 0.5);

	margin: 0;
	padding: 0;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0;
	height: var(--button-size);
	border: 1px solid transparent;
	border-radius: var(--button-size);
	background: var(--color-background);
	color: var(--color-text);
	position: relative;

	label {
		text-transform: uppercase;
		font-size: 0.625rem;
	}

	label,
	select {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		color: currentColor;
		box-shadow: none;
		border: none;
		padding: 0 2rem 0 1rem;
	}

	select {
		height: var(--icon-size);
		font-size: 1rem;
		line-height: 1;
		appearance: none;
		background: none;
		border-radius: var(--icon-size);
	}

	.icon {
		position: absolute;
		top: calc(calc(var(--button-size) - var(--icon-size)) * 0.5);
		right: 4px;
		width: var(--icon-size);
		height: var(--icon-size);
		z-index: 1;
		pointer-events: none;
	}

	&:hover,
	&:focus,
	&:focus-within {
		background-color: var(--color-primary-light);
		color: var(--color-primary-dark);
	}

	&:focus-within {
		outline: none;
		box-shadow: var(--focus-ring-active);

		select {
			background-color: transparent;
			outline: none;
		}
	}
`;
