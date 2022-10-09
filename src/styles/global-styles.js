import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 720px) {
		html {
			font-size: 83.7%;
		}
	}
	
	:focus {
		outline: transparent;
		box-shadow: 0 0 0 2px ${(props) => props.theme.colors.outlineColor};
	}

	[disabled] {
		cursor: not-allowed;
		opacity: 0.5;
		background: transparent;
	}
	
	body,
	input,
	textarea,
	button {
		background: ${(props) => props.theme.colors.backgroundMain};
		color: ${(props) => props.theme.colors.textPrimary};
		font: 400 1rem "IBM Plex Sans", sans-serif;;
	}
	
	body {
		-webkit-font-smoothing: antialiased;
		overflow: hidden;
	}
	
	button {
		cursor: pointer;
	}
	
	
	a {
		text-decoration: none;
		color: inherit;
	}

	[disabled] {
		cursor: not-allowed;
	}

	/* ::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar {
		width: 0.4rem;
		background: transparent;

	}

	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.colors.background750};
		border-radius: 0.5rem;

	} */

	.active {
		div {
			background: ${(props) => props.theme.colors.background750};
			border: ${(props) => props.theme.colors.borderColor};
		}

		.windows-apps {
			background: #eee;
			color: #121216;
		}

		.stacks-apps {
			background: #7B3E19;
			color: #F5E5FC;
		}

		.chrome-apps {
			background: #BDD4E7;
			color: #212227;
		}

		.web-apps {
			background: #E9806E;
			color: #3C1518;
		}
	}
`
