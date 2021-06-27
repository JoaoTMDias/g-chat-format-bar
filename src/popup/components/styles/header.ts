import styled from "styled-components";

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
		height: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		&:focus {
			outline: none;
		}
	}

	.title,
	.logo {
		width: auto;
	}

	.logo {
		height: 1.5rem;
	}
`;
