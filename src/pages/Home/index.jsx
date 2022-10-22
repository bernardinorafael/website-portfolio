import { Helmet } from "react-helmet"
import { CardProject } from "../../components/CardProject"
import { Title } from "../../components/Title"
import { Container, Content, Projects } from "./styles"

import imageIgnite from "../../assets/logo-nform.svg"
import imagePomodoro from "../../assets/logotipo-pomodoro.svg"
import imageShopping from "../../assets/shopping-cart.png"

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
          <br />e atualmente morando em Sobral, Ceará. Meu contato com a tecnologia veio desde
          cedo, minha família sempre foi envolvida com a informática. Já estive na área têxtil,
          um segmento onde a indústria é bem estabelecida em Santa Catarina, porém no decorrer
          do tempo, me reencontrei na área da tecnologia.
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
          backgroundColor={{ background: "#84299640" }}
          description="Pomodoro para gerenciamento de tempo"
          firstText="TypeScript"
          secondText="Styled Components"
          src={imagePomodoro}
          href="https://github.com/bernardinorafael/pomodoro"
          styles={{ background: "#c7488340", color: "#c74883" }}
          text="Pomodoro"
        />

        <CardProject
          alt="shopping"
          firstText="Stripe"
          secondText="TypeScript"
          styles={{ background: "#4a48c740", color: "#48c768" }}
          href="https://github.com/bernardinorafael/shopping"
          backgroundColor={{ background: "#7c212140" }}
          description="Aplicação simulando e-commerce, integrado com método de pagamento Stripe"
          src={imageShopping}
          text="Shopping"
        />
      </Projects>
    </Container>
  )
}
