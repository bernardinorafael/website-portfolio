import { Helmet } from "react-helmet"
import * as Accordion from "@radix-ui/react-accordion"
import { GreenCard } from "../../components/GreenCards"
import { RedCard } from "../../components/RedCards"
import { BsChevronBarContract } from "react-icons/bs"

import {
    CardSection,
    Container,
    Content,
    Trigger,
    Header,
    Item,
    AccordionRoot,
    ContentText,
} from "./styles"
import { useState } from "react"

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

                    <Item value="item-3">
                        <Header>
                            <Trigger>
                                <span className="smile-cards">😁</span>
                                <BsChevronBarContract aria-hidden size={20} />
                            </Trigger>
                        </Header>

                        <Content asChild>
                            <CardSection>
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
                                <RedCard text="Política" />
                                <RedCard text="Tema Light" />
                                <RedCard text="Desorganização" />
                                <RedCard text="Engarrafamento" />
                                <RedCard text="Filmes/Romance" />
                                <RedCard text="Espinafre" />
                                <RedCard text="Carne Bem Passada" />
                                <RedCard text="Refrigerante" />
                                <RedCard text="Multidão" />
                            </CardSection>
                        </Content>
                    </Item>
                </AccordionRoot>
            </section>
        </Container>
    )
}
