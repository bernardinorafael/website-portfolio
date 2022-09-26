import { Container } from "./styles"

export function CardTools({ src, alt, text, backgroundColor, description }) {
   return (
      <Container>
         <div style={backgroundColor}>
            <img height={30} src={src} alt={alt} />
         </div>
         <div>
            <strong>{text}</strong>
            <p>{description}</p>
         </div>
      </Container>
   )
}
