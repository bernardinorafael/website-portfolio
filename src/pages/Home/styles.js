import styled from "styled-components"

export const Container = styled.main`
   --animate-duration: 0.4s;
   margin: 8rem auto 0;
   width: 100%;
   padding: 0 2rem;
   max-width: 780px;
`
export const Content = styled.section`
   margin-bottom: 3rem;

   p {
      font-size: 1.3rem;
      line-height: 1.8rem;
      text-align: justify;
      font-weight: 300;

      span {
         text-decoration: line-through;
         opacity: 0.6;
      }
   }
`
export const Projects = styled.section`
   h2 {
      font-weight: 500;
      font-size: 2.5rem;
      position: relative;
      display: inline-block;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
   }
`
