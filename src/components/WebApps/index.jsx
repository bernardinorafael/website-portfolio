import { CardTools } from "../CardTools"

import imageCanva from "../../assets/canva.svg"
import imageNotion from "../../assets/notion.svg"
import imageGoogleFonts from "../../assets/fonts-google.svg"
import imageCoolors from "../../assets/coolors-icon.png"
import { Container } from "./styles"

export function WebApps() {
   return (
      <Container className={"animate__animated animate__fadeIn"}>
         <CardTools
            backgroundColor={{ background: "#67297a97" }}
            text={"Canva"}
            description={"Design gráfico"}
            alt={"canva"}
            src={imageCanva}
         />
         <CardTools
            backgroundColor={{ background: "#e9eef3e0" }}
            text={"Notion"}
            description={"Organização"}
            alt={"spotify"}
            src={imageNotion}
         />
         <CardTools
            backgroundColor={{ background: "#7a8ea160" }}
            text={"Google Fonts"}
            description={"Fontes"}
            alt={"google fonts"}
            src={imageGoogleFonts}
         />
         <CardTools
            backgroundColor={{ background: "#4f8b66ae" }}
            text={"Coolors"}
            description={"Paleta de cores"}
            alt={"coolors"}
            src={imageCoolors}
         />
      </Container>
   )
}
