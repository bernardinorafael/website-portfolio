import styled from "styled-components"

export const Container = styled.section`
    align-items: center;
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 0.8rem;
    border: 1px solid ${(props) => props.theme.colors.background750};
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    transition: 0.3s;

    svg {
        border-radius: 50%;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            filter: brightness(0.8);
        }
    }

    &:hover {
        box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
        transform: translateY(-3px);
    }

    a {
        align-items: center;
        border-radius: 8px;
        display: flex;
        flex: 1;
        gap: 1rem;
        padding: 0.8rem;
        user-select: none;

        span {
            color: ${(props) => props.theme.colors.textPrimary};
        }
    }
`

export const Paragraph = styled.p`
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 1rem;
    font-weight: 400;
`

export const Header = styled.div`
    display: flex;
    gap: 0.5rem;

    span {
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 0.8rem;
        padding: 5px;
    }
`

export const ImageContainer = styled.div`
    align-items: center;
    background: transparent;
    border-radius: 0.5rem;
    display: flex;
    height: 3rem;
    justify-content: center;
    width: 3rem;
`
