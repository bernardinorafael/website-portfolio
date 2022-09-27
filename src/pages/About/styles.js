import styled from "styled-components"

export const Container = styled.main`
   --animate-duration: 0.1s;
   margin: 8rem auto;
   max-width: 780px;
   min-height: calc(100vh - 5rem);
   padding: 0 2rem;
   width: 100%;

   section {
      margin-bottom: 3rem;

      h2 {
         border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
         font-size: 2.2rem;
         font-weight: 500;
         margin-bottom: 1rem;
         padding-bottom: 0.5rem;
      }

      p {
         font-size: 1.3rem;
         line-height: 1.8rem;
         text-align: justify;
         font-weight: 300;

         span {
            text-decoration: line-through;
         }
      }
   }
`

export const CardSection = styled.section`
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
   width: 100%;
`
