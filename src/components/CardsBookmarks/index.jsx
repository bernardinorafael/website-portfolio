import { Container, ImageContainer } from "./styles"

export function CardsBookmarks({ text, href, subText, src, alt }) {
    return (
        <Container>
            <a href={href} rel="noreferrer" target="_blank">
                <ImageContainer>
                    <img src={src} alt={alt} />
                </ImageContainer>
                <div>
                    <strong>{text}</strong>
                    <span>{subText}</span>
                </div>
            </a>
        </Container>
    )
}
