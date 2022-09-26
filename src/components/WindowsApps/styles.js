import styled from "styled-components"

export const Container = styled.section`
   --animate-duration: 0.5s;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   gap: 1rem;

   @media (max-width: 570px) {
      grid-template-columns: 1fr;
   }
`
