import { Helmet } from "react-helmet"
import { CardProject } from "../../components/CardProject"
import { Title } from "../../components/Title"
import { Container, Content, Projects } from "./styles"

import imagePattern from "../../assets/initial.svg"
import imageIgnite from "../../assets/logo-nform.svg"
import imageMDR from "../../assets/white-bg-mdr-logotipo-navbar.svg"

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
                    veio desde cedo, minha família sempre foi envolvida com a informática. Já
                    estive na área têxtil, um segmento onde a indústria é bem estabelecida em
                    Santa Catarina, porém no decorrer do tempo, me reencontrei na área da
                    tecnologia.
                </p>
            </Content>

            <Projects>
                <Title titleText="Projetos" />

                <CardProject
                    backgroundColor={{ background: "#15795b40" }}
                    description="Validação de formulários"
                    firstText="TypeScript"
                    href="https://github.com/bernardinorafael/users-form"
                    secondText="Styled Components"
                    src={imageIgnite}
                    styles={{ background: "#c4ad3c40", color: "#c4ad3c" }}
                    text="N.Form"
                />

                <CardProject
                    backgroundColor={{ background: "#f0000040" }}
                    description="Muito em breve"
                    firstText="ReactJS"
                    secondText="Styled Components"
                    src={imageMDR}
                    styles={{ background: "#c7488340", color: "#c74883" }}
                    text="Maudere"
                />

                <CardProject
                    alt="em breve"
                    backgroundColor={{ background: "#f0000040" }}
                    description="Aguarde novidades!"
                    src={imagePattern}
                    styles={{ visibility: "hidden" }}
                    text="Em breve"
                />
            </Projects>
        </Container>
    )
}
