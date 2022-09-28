import styled from "styled-components"

export const Container = styled.main`
    --animate-duration: 0.4s;
    margin: 8rem auto;
    max-width: 780px;
    min-height: 100vh;
    padding: 0 2rem;
    width: 100%;
`

export const TitleContent = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;

    p {
        font-size: 1.5rem;
        max-width: 80%;
        text-align: center;
        font-weight: 300;
    }
`

export const Navbar = styled.nav`
    align-items: center;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    padding: 3rem 0;

    a {
        border-radius: 2rem;
    }

    .button-menu-tools {
        align-items: center;
        background: ${(props) => props.theme.colors.background750};
        border-radius: 2rem;
        border: 0;
        display: flex;
        font-size: 1rem;
        font-weight: 500;
        gap: 0.5rem;
        line-height: 1rem;
        padding: 0.7em 1.2rem;
        transition: 0.2s;

        svg {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 485px) {
        button {
            span {
                display: none;
            }
        }
    }
`
