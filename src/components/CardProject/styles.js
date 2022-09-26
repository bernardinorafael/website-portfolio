import styled from "styled-components"

export const Container = styled.section`
   a {
      align-items: center;
      background: ${(props) => props.theme.colors.cardBackground};
      border-radius: 0.8rem;
      border: 1px solid ${(props) => props.theme.colors.background750};
      display: flex;
      gap: 1.5rem;
      padding: 0.8rem;
      transition: 0.3s;
      user-select: none;
      margin-bottom: 1rem;

      div:first-child {
         background: transparent;
         border-radius: 0.5rem;
         height: 3rem;
         width: 3rem;
         align-items: center;
         display: flex;
         justify-content: center;
      }

      &:hover {
         transform: translateY(-3px);
         box-shadow: 4px 6px 12px -8px rgb(0 0 0 / 75%);
      }

      span {
         color: ${(props) => props.theme.colors.textPrimary};
         font-size: 0.7rem;
         line-height: 0.5rem;
      }
   }
`
export const Paragraph = styled.p`
   color: ${(props) => props.theme.colors.textSecondary};
   font-weight: 400;
   font-size: 1rem;
`
