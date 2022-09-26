import { Container, Paragraph } from "./styles"

export function CardProject({ src, href, backgroundColor, alt, text, description }) {
   return (
      <Container>
         <a rel="noreferrer" target="_blank" href={href}>
            <div style={backgroundColor}>
               <img height={35} src={src} alt={alt} />
            </div>
            <div>
               <strong>{text}</strong>
               <Paragraph>{description}</Paragraph>
            </div>
         </a>
      </Container>
   )
}
