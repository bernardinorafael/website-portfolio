import { Container, Header, ImageContainer, Paragraph } from "./styles"

import { FaGithub } from "react-icons/fa"
import { useState } from "react"

export function CardProject({
    alt,
    src,
    href,
    text,
    styles,
    firstText,
    hrefGithub,
    secondText,
    description,
    children,
    backgroundColor,
}) {
    return (
        <Container>
            <a rel="noreferrer" target="_blank" href={href}>
                <ImageContainer style={backgroundColor}>
                    <img height={35} src={src} alt={alt} />
                </ImageContainer>
                <div>
                    <Header>
                        <strong>{text}</strong>
                        <span style={styles}>{firstText}</span>
                        <span style={styles}>{secondText}</span>
                    </Header>
                    <Paragraph>{description}</Paragraph>
                </div>
            </a>
            <div>
                <a rel="noreferrer" target="_blank" href={hrefGithub}>
                    {children}
                </a>
            </div>
        </Container>
    )
}
