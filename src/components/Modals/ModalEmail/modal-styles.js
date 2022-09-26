import { createGlobalStyle } from "styled-components"

export const ModalStyle = createGlobalStyle`
	.content-modal {
		--animate-duration: 0.3s;
		align-items: center;
		justify-content: center;
		background: ${(props) => props.theme.colors.background750};
		border-radius: 0.5rem;
		border: 0;
		box-shadow: rgba(18, 18, 20, 0.371) 0px 0 1.25rem;
		bottom: 5rem;
		display: flex;
		width: 300px;
		padding: 1rem 1.5rem;
		position: absolute;
		right: calc(50% - 150px);

		strong {
			margin-right: 0.5rem;
			user-select: none;
		}

		button {
		align-items: center;
		background: transparent;
		border: transparent;
		display: flex;
		font-weight: 500;
		border-radius: 10px;

			svg {
				font-size: 1.2rem;
				line-height: 1.2rem;
				margin-left: 0.5rem;
			}
		}
	}

	.overlay-modal {
		inset: 0;
		position: fixed;
		z-index: 101;
		background: rgba(18, 18, 20, 0.705);
	}

	.ReactModal__Body--open {
		overflow: hidden;
	}
`
