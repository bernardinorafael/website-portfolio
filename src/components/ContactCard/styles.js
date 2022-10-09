import styled, { keyframes } from "styled-components"

import * as Hover from "@radix-ui/react-hover-card"

const slideUpAndFade = keyframes({
    "0%": { opacity: 0, transform: "translateY(5px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
})

const slideDownAndFade = keyframes({
    "0%": { opacity: 0, transform: "translateY(-5px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
})

export const Content = styled(Hover.Content)`
    z-index: 1000;
    background: ${(props) => props.theme.colors.background750};
    /* padding: 1rem; */
    border-radius: 6px;
    box-shadow: 10px 10px 36px -7px rgba(0, 0, 0, 0.3);

    @media (prefers-reduced-motion: no-preference) {
        animation-duration: 0.5s;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform, opacity;

        &[data-state="open"] {
            &[data-side="top"] {
                animation-name: ${slideDownAndFade};
            }
            &[data-side="bottom"] {
                animation-name: ${slideUpAndFade};
            }
        }
    }
`

export const Arrow = styled(Hover.Arrow)`
    fill: ${(props) => props.theme.colors.background750};
`

export const ContentCard = styled.section`
    /* background: ${(props) => props.theme.colors.backgroundMain}; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    user-select: none;
    padding: 1rem 0;

	hr {
		border: 1px solid #333333;
	}

    a {
        display: flex;
        align-items: center;
        border-radius: 4px;
        gap: 0.5rem;
        height: 3rem;
        padding: 0 1rem;

        &:hover {
            transition: 0.2s;
            background: ${(props) => props.theme.colors.borderColor};
        }

        svg {
            color: ${(props) => props.theme.colors.colorIconMenu};
        }
    }

    strong {
        align-self: center;
        font-size: 1.2rem;
    }
`

export const EmailItemContent = styled.button`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap: 0.5rem;
    height: 3rem;
    padding: 0 1rem;
    background: transparent;
    border: none;

    &:hover {
        transition: 0.2s;
        background: ${(props) => props.theme.colors.borderColor};
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        svg {
            color: ${(props) => props.theme.colors.textPrimary};
        }
    }

    svg {
        color: ${(props) => props.theme.colors.colorIconMenu};
    }
`
