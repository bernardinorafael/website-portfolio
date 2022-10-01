import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 0.8rem;
    transition: 0.3s;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid ${(props) => props.theme.colors.background750};

    svg {
        border-radius: 50%;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            filter: brightness(0.8);
        }

        .NoIcon {
            display: none;
        }
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
    }

    a {
        border-radius: 8px;
        align-items: center;
        display: flex;
        gap: 1rem;
        user-select: none;
        width: 90%;

        span {
            color: ${(props) => props.theme.colors.textPrimary};
        }
    }
`

export const Paragraph = styled.p`
    color: ${(props) => props.theme.colors.textSecondary};
    font-weight: 400;
    font-size: 1rem;
`

export const Header = styled.div`
    display: flex;
    gap: 0.5rem;

    span {
        border-radius: 6px;
        padding: 5px;
        line-height: 0.8rem;
        font-size: 0.75rem;
        font-weight: 500;
    }
`

export const ImageContainer = styled.div`
    background: transparent;
    border-radius: 0.5rem;
    height: 3rem;
    width: 3rem;
    align-items: center;
    display: flex;
    justify-content: center;
`
