import styled from "styled-components"

export const Container = styled.section`
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.background750};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s;
    width: 220px;
    opacity: 0.7;

    &:hover {
        box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
        transform: translateY(-3px);
        opacity: 1;
    }

    div:last-child {
        box-shadow: -1px -10px 36px -11px rgba(0, 0, 0, 0.75);
        border-top: 1px solid ${(props) => props.theme.colors.background750};
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding: 0.4rem 1rem;
        z-index: 10;

        strong {
            font-size: 1.2rem;
        }

        span {
            color: ${(props) => props.theme.colors.textSecondary};
        }
    }

    a {
        border-radius: 8px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: baseline;
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    transition: 0.8s;

    img {
        object-fit: cover;
        width: 100%;
        transition: 0.8s;
    }
`
