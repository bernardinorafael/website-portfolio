import styled from "styled-components"

export const Container = styled.header`
   background: ${(props) => props.theme.colors.backgroundSecondary};
   border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
   box-shadow: ${(props) => props.theme.colors.shadowColor} 0px 0.2rem 1.25rem;
   height: 4.5rem;
   inset: 0;
   position: fixed;
   z-index: 100;
`
export const Content = styled.div`
   align-items: center;
   display: flex;
   height: 4.5rem;
   justify-content: space-between;
   margin: 0 auto;
   max-width: 780px;
   padding: 0 2rem;
   user-select: none;

   a {
      border-radius: 100%;
   }

   nav {
      align-items: center;
      display: flex;

      a {
         border-radius: 10px;
         margin-right: 0.5rem;
      }
   }
`
export const Button = styled.button`
   border: 0;
   display: flex;
   align-items: center;
   border-radius: 100%;

   &:active {
      transform: scale(1.1);
      transition: transform 0.3s;
   }

   img {
      border: 0;
      border-radius: 1.5rem;
      height: 35px;
      background: transparent;
      border-style: none;
   }
`
