
import styled, { keyframes } from "styled-components";

export const Button = styled.button`
	height: 100%;
	padding: 0 0.5rem;
	border-radius: 0;

	&__icon {
		fill: var(--color-gray);
	}

	&.is-selected:focus {
		box-shadow: var(--focus-ring-active);
	}

	&:focus:active,
	&:active {
		background-color: var(--color-primary);
		color: var(--color-background);
	}
`;



const CopyAnimation = keyframes`
	0%, 100% {
		transform: translate3d(0, 100%, 0);
	}

	12.5%, 50%, 87.5% {
		transform: translate3d(0, 0, 0);
	}
`;


export const CopyClipboard = styled.button`
	border-radius: var(--button-border-radius);
	color: var(--color-text);
	position: relative;

	.content {
		position: relative;
		display: grid;
		place-items: center;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	.content,
	.message {
		border-radius: inherit;
	}

	.message,
	.feedback {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.feedback {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-white);
		color: var(--color-black);
		border-radius: inherit;
		animation-name: ${CopyAnimation};
		animation-duration: 4500ms;
		animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
		animation-play-state: paused;
		animation-fill-mode: both;
		animation-iteration-count: initial;
	}

	.icon {
		display: grid;
		place-items: center;
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--color-gray);
	}

	&:focus:active,
	&:active {
		background-color: var(--color-primary-dark);
		color: var(--color-background);
	}

	&:before {
		--focus-ring-color: var(--color-gray-light);
		--focus-ring-width: 4px;
		--focus-ring-active: 0 0 0 2px var(--color-background), 0 0 0 var(--focus-ring-width) var(--focus-ring-color);

		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: var(--focus-ring-active);
		border-radius: inherit;
		transition: opacity 120ms ease-in-out;
		opacity: 0;
	}

	&:focus {
		&:before {
			opacity: 1;
		}
	}

	&.has-copied-to-clipboard {
		.feedback {
			animation-play-state: running;
		}
	}
`;
