import styled from "styled-components"

export const Container = styled.main`
    --animate-duration: 0.4s;
    margin: 8rem auto 0;
    width: 100%;
    padding: 0 2rem;
    max-width: 780px;
    overflow-y: hidden;
`

export const Content = styled.section`
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        font-size: 1.3rem;
        line-height: 1.8rem;
        text-align: center;
        font-weight: 300;
    }
`

export const ContentCards = styled.div`
    --animate-duration: 0.5s;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
`
