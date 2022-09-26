import styled from "styled-components";

export const Button = styled.button`
    align-items: center;
    background: ${(props) => props.theme.colors.background750};
    border-radius: 8px;
    border: 0;
    display: flex;
    font-size: 1.1rem;
    line-height: 1.1rem;
    padding: 0.8rem;
`;
