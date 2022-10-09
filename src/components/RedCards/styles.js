import styled from "styled-components"

export const Span = styled.span`
    color: ${(props) => props.theme.colors.redColor};
    background: ${(props) => props.theme.colors.redBackground};
    padding: 0.2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.5rem;
`
