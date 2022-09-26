import { CardTools } from "../CardTools"

import { Container } from "./styles"

import imageDiscord from "../../assets/discord-icon.svg"
import imageGoogleDrive from "../../assets/google-drive.svg"
import imageLightshot from "../../assets/lightshot-icon.jpg"
import imageOBS from "../../assets/obs-icon.svg"
import imageSpotify from "../../assets/spotify-icon.svg"
import imageCode from "../../assets/visual-studio-code.svg"

export function WindowsApps() {
   return (
      <Container className={"animate__animated animate__fadeIn"}>
         <CardTools
            backgroundColor={{ background: "#2488C840" }}
            text={"Visual Studio Code"}
            description={"Editor de código"}
            alt={"visual studio code"}
            src={imageCode}
         />
         <CardTools
            backgroundColor={{ background: "#2ebb5840" }}
            text={"Spotify"}
            description={"Streaming de música"}
            alt={"spotify"}
            src={imageSpotify}
         />
         <CardTools
            backgroundColor={{ background: "#642b5340" }}
            text={"Lightshot"}
            description={"Captura de tela"}
            alt={"lightshot"}
            src={imageLightshot}
         />
         <CardTools
            backgroundColor={{ background: "#5865F040" }}
            text={"Discord"}
            description={"Comunicação"}
            alt={"discord"}
            src={imageDiscord}
         />
         <CardTools
            backgroundColor={{ background: "#5d5f61e1" }}
            text={"OBS Studio"}
            description={"Streaming e gravações"}
            alt={"obs studio"}
            src={imageOBS}
         />
         <CardTools
            backgroundColor={{ background: "#28a7615c" }}
            text={"Google Drive"}
            description={"Armazenamento em nuvem"}
            alt={"google drive"}
            src={imageGoogleDrive}
         />
      </Container>
   )
}
