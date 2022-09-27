import { Container } from "./styles"

import "animate.css"

export function DropDownMenu() {
   return (
      <Container className={"animate__animated animate__zoomIn"}>
         <div>
            <strong>📚 Livros</strong>
            <strong>🎬 Filmes</strong>
         </div>
      </Container>
   )
}
