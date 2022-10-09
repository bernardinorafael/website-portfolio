import styled from "styled-components"

export const ContainerButton = styled.button`
    align-items: center;
    background: ${(props) => props.theme.colors.background750};
    border-radius: 30px;
    border: 0;
    display: flex;
    font-size: 1.1rem;
    line-height: 1.1rem;
    padding: 0.8rem;

    &:hover {
        color: ${(props) => props.theme.colors.primaryWhite};
        transition: 0.2s;
        filter: brightness(0.95);
    }
`
