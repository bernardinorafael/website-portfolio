import { CardTools } from "../CardTools"

import { Container } from "./styles"

import imageAdblock from "../../assets/adblock.png"
import imageColorPicker from "../../assets/color-picker.jpg"
import imageJsonBeautify from "../../assets/json.png"
import imageSvgExport from "../../assets/svg-export.jpg"
import imageFireshot from "../../assets/screenshot.jpg"
import imageReact from "../../assets/react.svg"
import imageTwitter from "../../assets/twitter.svg"
import imageMinimalClock from "../../assets/minimal-tab-clock.jpg"

export function ChromeExtensions() {
   return (
      <Container className={" animate__animated animate__fadeIn"}>
         <CardTools
            backgroundColor={{ background: "#9c4e4ec3" }}
            text={"JSON Beautifier"}
            description={"Visualizador e editor JSON"}
            alt={"json beautify"}
            src={imageJsonBeautify}
         />
         <CardTools
            backgroundColor={{ background: "#ffffff" }}
            text={"Adblock for Youtube"}
            description={"Bloqueador de anúncios"}
            alt={"adblock youtube"}
            src={imageAdblock}
         />
         <CardTools
            backgroundColor={{ background: "#89ac52ab" }}
            text={"ColorZilla"}
            description={"Descobrir cores de uma página"}
            alt={"colorzilla"}
            src={imageColorPicker}
         />
         <CardTools
            backgroundColor={{ background: "#43435ece" }}
            text={"SVG Export"}
            description={"Exportar SVG de websites"}
            alt={"svg export"}
            src={imageSvgExport}
         />
         <CardTools
            backgroundColor={{ background: "#5e5343ce" }}
            text={"Fireshot"}
            description={"Printscreen de website"}
            alt={"fireshot"}
            src={imageFireshot}
         />
         <CardTools
            backgroundColor={{ background: "#43595ece" }}
            text={"React Developer Tool"}
            description={"Debug de app React"}
            alt={"react developer tool"}
            src={imageReact}
         />
         <CardTools
            backgroundColor={{ background: "#475153ce" }}
            text={"Simplified Twitter"}
            description={"Layout para Twitter"}
            alt={"simplified twitter"}
            src={imageTwitter}
         />
         <CardTools
            backgroundColor={{ background: "#884e8dce" }}
            text={"Minimal New Tab Clock"}
            description={"Relógio para nova aba"}
            alt={"minimal new tab clock"}
            src={imageMinimalClock}
         />
      </Container>
   )
}
