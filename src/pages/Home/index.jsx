import { Helmet } from "react-helmet"
import { CardProject } from "../../components/CardProject"
import { Title } from "../../components/Title"

import imageIgnite from "../../assets/ignite-logo.svg"
import imagePattern from "../../assets/initial.svg"
import imageMDR from "../../assets/white-bg-mdr-logotipo-navbar.svg"

import { Container, Content, Projects } from "./styles"

export function Home() {
   return (
      <Container className={"animate__animated animate__fadeIn"}>
         <Helmet>
            <title>Início | Rafael Bernardino</title>
         </Helmet>

         <Content>
            <Title titleText={"Hello, I'm Rafael 👋"} />
            <p>
               Desenvolvedor web, nascido em Criciúma, Santa Catarina, região sul do país
               e atualmente morando em Sobral, Ceará, região nordeste.{" "}
               <span>
                  É uma longa história sobre como eu vim parar aqui, vamos marcar um café
                  para contar toda a história
               </span>{" "}
               Meu contato com a tecnologia veio desde cedo, minha família sempre foi
               conectada com informática e computadores. Já estive na área têxtil, um
               segmento muito forte na minha região, mas me reencontrei no mundo tech.{" "}
            </p>
         </Content>

         <Projects>
            <Title titleText={"Projetos"} />
            <CardProject
               href="https://social-ignite.vercel.app/"
               backgroundColor={{ background: "#1c4437df" }}
               alt={"ignite social"}
               src={imageIgnite}
               text={"Social Ignite"}
               description={"Simulador de rede social, comentários e likes dinâmicos."}
            />
            <CardProject
               backgroundColor={{ background: "#942e2edf" }}
               alt={"mdr"}
               src={imageMDR}
               text={"Maudere"}
               description={"Muito em breve"}
            />
            <CardProject
               backgroundColor={{ background: "#942e2edf" }}
               alt={"em breve"}
               src={imagePattern}
               text={"Em breve"}
               description={"Aguarde novidades!"}
            />
            <CardProject
               backgroundColor={{ background: "#942e2edf" }}
               alt={"soon"}
               src={imagePattern}
               text={"Em breve"}
               description={"Aguarde novidades!"}
            />
         </Projects>
      </Container>
   )
}
