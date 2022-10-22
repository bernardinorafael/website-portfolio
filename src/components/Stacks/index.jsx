import { CardTools } from "../CardTools"

import { Container } from "./styles"

import imageCSS from "../../assets/css-3.svg"
import imageTypescript from "../../assets/typescript.svg"
import imageJavascript from "../../assets/javascript.svg"
import imageNext from "../../assets/nextjs-icon.svg"
import imageNode from "../../assets/nodejs-icon.svg"
import imageReact from "../../assets/react.svg"
import imageSass from "../../assets/sass.svg"
import imageStyledComponents from "../../assets/styled-components.png"

export function Stacks() {
  return (
    <Container className={"animate__animated animate__fadeIn"}>
      <CardTools
        backgroundColor={{ background: "#898bb1" }}
        alt={"css"}
        src={imageCSS}
        text={"CSS"}
      />
      <CardTools
        backgroundColor={{ background: "#463e46" }}
        alt={"sass"}
        src={imageSass}
        text={"Sass"}
      />
      <CardTools
        backgroundColor={{ background: "#51524d" }}
        alt={"styled components"}
        src={imageStyledComponents}
        text={"Styled Components"}
      />
      <CardTools
        backgroundColor={{ background: "#33507a" }}
        text={"TypeScript"}
        alt={"typescript"}
        src={imageTypescript}
      />
      <CardTools
        backgroundColor={{ background: "#7c8133" }}
        alt={"javascript"}
        src={imageJavascript}
        text={"JavaScript"}
      />
      <CardTools
        backgroundColor={{ background: "#2c3550" }}
        alt={"react"}
        src={imageReact}
        text={"React"}
      />
      <CardTools
        backgroundColor={{ background: "#7e7272" }}
        alt={"next"}
        src={imageNext}
        text={"Next.js"}
      />
      <CardTools
        backgroundColor={{ background: "#23533360" }}
        alt={"node"}
        src={imageNode}
        text={"Node.js"}
      />
    </Container>
  )
}
