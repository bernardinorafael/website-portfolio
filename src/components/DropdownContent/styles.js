import * as Menu from "@radix-ui/react-dropdown-menu"
import styled from "styled-components"

export const Content = styled(Menu.Content)`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.background750};
    z-index: 1000;
    min-width: 220px;
    height: 10rem;
    border-radius: 6px;
    padding: 1rem 0;
`

export const Arrow = styled(Menu.Arrow)`
    fill: ${(props) => props.theme.colors.background750};
`

export const ItemMenu = styled(Menu.Item)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.5rem;
	border-radius: 6px;
    height: 3rem;
    user-select: none;
    background: ${(props) => props.theme.colors.bgButtons};

    svg {
        color: ${(props) => props.theme.colors.colorIconMenu};
    }

    &:not(:disabled):hover {
        transition: 0.2s;
        background: ${(props) => props.theme.colors.borderColor};
    }

    &[data-disabled] {
        pointer-events: none;
        opacity: 0.5;
    }
`
