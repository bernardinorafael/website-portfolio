import styled from "styled-components"

export const Container = styled.footer`
    align-items: center;
    color: ${(props) => props.theme.colors.background600};
    display: flex;
    height: 5rem;
    justify-content: space-between;
    margin: 8rem auto 0;
    max-width: 780px;
    padding: 0 2rem;
    width: 100%;

    strong {
        user-select: none;
    }

    section {
        align-items: baseline;
        display: flex;
        gap: 0.5rem;
    }

    a,
    button {
        align-items: center;
        background: ${(props) => props.theme.colors.bgButtons};
        border-radius: 0.5rem;
        border: 0;
        color: ${(props) => props.theme.colors.background600};
        display: flex;
        padding: 0.4rem;
        transition: 0.2s;

        &:hover {
            transform: translateY(-2px);
        }

        &:active {
            filter: brightness(0.8);
        }

        svg {
            font-size: 1rem;
        }
    }
`
