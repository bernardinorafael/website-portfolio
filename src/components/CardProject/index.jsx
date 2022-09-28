import { Container, Header, ImageContainer, Paragraph } from "./styles"

export function CardProject({
    alt,
    backgroundColor,
    description,
    firstText,
    href,
    secondText,
    src,
    styles,
    text,
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
        </Container>
    )
}
