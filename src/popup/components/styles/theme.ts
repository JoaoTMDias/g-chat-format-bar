import styled from "styled-components";

export const SelectTheme = styled.fieldset`
	margin: 0;
	padding: 0;
	border: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	height: 2rem;
	border: 1px solid var(--color-gray-light);
	border-radius: 2rem;
	background: var(--color-background);
	color: var(--color-black);
	position: relative;

	select {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		color: currentColor;
		box-shadow: none;
		border: none;
		padding: 0 2rem 0 1rem;
		height: 1.5rem;
		font-size: 1rem;
		line-height: 1;
		appearance: none;
		background: none;
		border-radius: 2rem;
	}

	.icon {
		position: absolute;
		top: 2px;
		right: 4px;
		z-index: 1;
		pointer-events: none;
	}

	&:hover,
	&:focus {
		background-color: var(--color-primary-light);
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
