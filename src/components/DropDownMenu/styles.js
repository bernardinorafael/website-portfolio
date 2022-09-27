import styled from "styled-components"

export const Container = styled.div`
   --animate-duration: 0.2s;
   background: ${(props) => props.theme.colors.bgButtons};
   border-radius: 10px;
   bottom: 1px;
   box-shadow: 5px 8px 11px ${(props) => props.theme.colors.shadowColor};
   display: table;
   left: calc(50% + 70px);
   position: relative;
   right: 1px;
   top: -5px;
   visibility: visible;
   width: 200px;
   z-index: 910;

   div {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem 0;

      strong {
         height: 2.5rem;
         line-height: 2.5rem;
         padding-left: 0.5rem;
         width: 100%;

         &:hover {
            background: #333;
         }
      }
   }
`
