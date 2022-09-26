import { CardTools } from "../CardTools"

import { Container } from "./styles"

import imageCSS from "../../assets/css-3.svg"
import imageHTML from "../../assets/html-5.svg"
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
                backgroundColor={{ background: "#a57e52" }}
                text={"HTML"}
                description={"100%"}
                alt={"html"}
                src={imageHTML}
            />
            <CardTools
                backgroundColor={{ background: "#898bb1" }}
                alt={"css"}
                description={"Avançado"}
                src={imageCSS}
                text={"CSS"}
            />
            <CardTools
                backgroundColor={{ background: "#463e46" }}
                alt={"sass"}
                description={"Eu me dou bem"}
                src={imageSass}
                text={"Sass"}
            />
            <CardTools
                backgroundColor={{ background: "#51524d" }}
                alt={"styled components"}
                description={"Eu me dou bem também"}
                src={imageStyledComponents}
                text={"Styled Components"}
            />
            <CardTools
                backgroundColor={{ background: "#7c8133" }}
                alt={"javascript"}
                description={"Sempre há algo para aprender"}
                src={imageJavascript}
                text={"Javascript"}
            />
            <CardTools
                backgroundColor={{ background: "#2c3550" }}
                alt={"react"}
                description={"Isso foi feito com React, ok?"}
                src={imageReact}
                text={"ReactJS"}
            />
            <CardTools
                backgroundColor={{ background: "#7e7272" }}
                alt={"next"}
                description={"Ainda me acostumando com ele"}
                src={imageNext}
                text={"Next.js"}
            />
            <CardTools
                backgroundColor={{ background: "#23533360" }}
                alt={"node"}
                description={"Tenho muito a aprender"}
                src={imageNode}
                text={"Node.js"}
            />
        </Container>
    )
}
