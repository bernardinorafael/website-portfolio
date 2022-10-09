import { Helmet } from "react-helmet"
import { BsChevronBarContract } from "react-icons/bs"
import { GreenCard } from "../../components/GreenCards"
import { RedCard } from "../../components/RedCards"

import {
    AccordionRoot,
    CardSection,
    Container,
    Content,
    ContentText,
    Header,
    Item,
    Trigger,
} from "./styles"

export function About() {
    return (
        <Container className={"animate__animated animate__fadeIn"}>
            <Helmet>
                <title>Sobre | Rafael Bernardino</title>
            </Helmet>

            <section>
                <AccordionRoot defaultValue="item-1" type="single" collapsible>
                    <Item value="item-1">
                        <Header>
                            <Trigger>
                                <span>Sobre mim</span>
                                <BsChevronBarContract aria-hidden size={20} />
                            </Trigger>
                        </Header>

                        <Content asChild>
                            <ContentText>
                                <p>
                                    Após terminar o ensino médio, iniciei meus estudos em
                                    Design de Moda, é um segmento de grande empregabilidade na
                                    minha região de nascimento, cursei cerca de um ano de
                                    faculdade, com a chegada da pandemia e com ela vários
                                    questionamentos sobre a carreira profissional, decidi
                                    analisar o cenário cautelosamente, e então entrar para a
                                    bolha. Pesquisei muito para entender em qual área de
                                    tecnologia eu me encaixaria. Nas horas vagas, gosto de
                                    tomar café e passar tempo com as pessoas especiais da minha
                                    vida, esporadicamente gosto de ler um bom livro de ficção
                                    científica e conhecer lugares novos.{" "}
                                </p>
                            </ContentText>
                        </Content>
                    </Item>

                    <Item value="item-2">
                        <Header>
                            <Trigger>
                                <span>Trabalho</span>
                                <BsChevronBarContract aria-hidden size={20} />
                            </Trigger>
                        </Header>

                        <Content asChild>
                            <ContentText>
                                <p>
                                    Dentre minhas experiências profissionais, destaco o
                                    transporte, onde trabalhei por quatro anos, e digo com
                                    propriedade, que aprendi lições valiosas sobre a operação
                                    de uma empresa de grande porte. Exerci atividades
                                    administrativas em todos os setores da empresa, meu foco
                                    era aprender todo o fluxo operacional e assim ter uma visão
                                    objetiva para exercer meu papel o mais performático
                                    possível. Após minha chegada ao Ceará, trabalhei em uma
                                    softhouse, onde também tive ótimas lições sobre como uma
                                    empresa tech opera. Atualmente focando no meu aprimoramento
                                    profissional, de onde venho criando projetos pessoais.
                                    Sinta-se livre para me contatar profissionalmente via
                                    E-mail ou LinkedIn.
                                </p>
                            </ContentText>
                        </Content>
                    </Item>

                    <Item value="item-3">
                        <Header>
                            <Trigger>
                                <span className="smile-cards">😁</span>
                                <BsChevronBarContract aria-hidden size={20} />
                            </Trigger>
                        </Header>

                        <Content asChild>
                            <CardSection>
                                <div>
                                    <GreenCard title="Marvel filmes" text="Marvel" />
                                    <GreenCard title="Biblioteca Javascript" text="React" />
                                    <GreenCard text="Bons Filmes" />
                                    <GreenCard title="Jogos" text="Counter Strike" />
                                    <GreenCard title="Animações japonesas" text="Anime" />
                                    <GreenCard text="Codar" />
                                    <GreenCard title="Idioma inglês" text="Inglês" />
                                    <GreenCard text="Pôr do Sol" />
                                    <GreenCard
                                        title="Tema Omni do Visual StudioCode"
                                        text="Omni"
                                    />
                                    <GreenCard text="Café" />
                                    <GreenCard title="Streaming de vídeos" text="Twitch" />
                                    <GreenCard text="Cor Preto" />
                                </div>
                            </CardSection>
                        </Content>
                    </Item>

                    <Item value="item-4">
                        <Header>
                            <Trigger>
                                <span className="smile-cards">😫</span>
                                <BsChevronBarContract aria-hidden size={20} />
                            </Trigger>
                        </Header>

                        <Content asChild>
                            <CardSection>
                                <div>
                                    <RedCard text="Política" />
                                    <RedCard text="Tema Light" />
                                    <RedCard text="Desorganização" />
                                    <RedCard text="Engarrafamento" />
                                    <RedCard text="Filmes/Romance" />
                                    <RedCard text="Espinafre" />
                                    <RedCard text="Carne Bem Passada" />
                                    <RedCard text="Refrigerante" />
                                    <RedCard text="Multidão" />
                                </div>
                            </CardSection>
                        </Content>
                    </Item>
                </AccordionRoot>
            </section>
        </Container>
    )
}
