import styled from "styled-components"

export const Button = styled.div`
   background: transparent;
   border-radius: 10px;
   border: 0;
   font-size: 1rem;
   font-weight: 500;
   line-height: 1rem;
   padding: 0.8em 1.2rem;

   &:hover {
      background: ${(props) => props.theme.colors.bgButtons};
      color: ${(props) => props.theme.colors.primaryWhite};
      transition: 0.2s;
   }
`
