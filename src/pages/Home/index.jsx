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
                    <br />e atualmente morando em Sobral, Ceará. Meu contato com a tecnologia
                    veio desde cedo, minha fa mília sempre foi envolvida com a informática. Já
                    estive na área têxtil, um segmento onde a indústria é bem estabelecida em
                    Santa Catarina, porém no decorrer do tempo, me reencontrei na área da
                    tecnologia.
                </p>
            </Content>

            <Projects>
                <Title titleText="Projetos" />
                <CardProject
                    styles={{ background: "#c4ad3c40", color: "#c4ad3c" }}
                    firstText="ReactJS"
                    secondText="CSS"
                    href="https://social-ignite.vercel.app/"
                    backgroundColor={{ background: "#15795b40" }}
                    alt="ignite social"
                    src={imageIgnite}
                    text="Social Ignite"
                    description="Simulador de rede social, comentários e likes dinâmicos."
                />
                <CardProject
                    firstText="ReactJS"
                    secondText="Styled Components"
                    styles={{ background: "#c7488340", color: "#c74883" }}
                    backgroundColor={{ background: "#f0000040" }}
                    alt="mdr"
                    src={imageMDR}
                    text="Maudere"
                    description="Muito em breve"
                />
                <CardProject
                    styles={{ visibility: "hidden" }}
                    backgroundColor={{ background: "#f0000040" }}
                    alt="em breve"
                    src={imagePattern}
                    text="Em breve"
                    description="Aguarde novidades!"
                />
            </Projects>
        </Container>
    )
}
