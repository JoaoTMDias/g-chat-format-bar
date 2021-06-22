import styled from "styled-components";

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
			border-top-left-radius: var(--button-border-radius);
			border-bottom-left-radius: var(--button-border-radius);
		}
	}

	&:last-child {
		button {
			border-top-right-radius: var(--button-border-radius);
			border-bottom-right-radius: var(--button-border-radius);
		}
	}
`;
