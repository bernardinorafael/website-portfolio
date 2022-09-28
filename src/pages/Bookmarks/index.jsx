import { Container, Content, ContentCards } from "./styles"

import "animate.css"
import { Helmet } from "react-helmet"
import { Title } from "../../components/Title"
import { CardsBookmarks } from "../../components/CardsBookmarks"

import imageHaikei from "../../assets/ImageBookmarks/haikei.png"
import imagePinterest from "../../assets/ImageBookmarks/pinterest.png"
import imageW3 from "../../assets/ImageBookmarks/w3c.png"
import imageMockflow from "../../assets/ImageBookmarks/mockflow.png"
import imageStackOverflow from "../../assets/ImageBookmarks/stack.png"
import imageUnsplash from "../../assets/ImageBookmarks/unsplash.png"
import imageManyPixels from "../../assets/ImageBookmarks/manypixels.png"
import imageFotor from "../../assets/ImageBookmarks/fotor.png"
import imageBehance from "../../assets/ImageBookmarks/behance.png"

export function Bookmarks() {
    return (
        <Container className={"animate__animated animate__fadeIn"}>
            <Helmet>
                <title>Bookmarks | Rafael Bernardino</title>
            </Helmet>

            <Content>
                <Title titleText="Bookmarks" />
                <p>
                    Links que estão no meus favoritos do browser, alguns úteis para
                    desenvolvimento, outros nem tanto... 😊
                </p>
            </Content>

            <ContentCards>
                <CardsBookmarks
                    text="Pinterest"
                    subText="Website"
                    src={imagePinterest}
                    alt="pinterest"
                    href="https://br.pinterest.com/"
                />

                <CardsBookmarks
                    text="Haikei"
                    subText="Website"
                    src={imageHaikei}
                    alt="haikei"
                    href="https://app.haikei.app/"
                />

                <CardsBookmarks
                    text="Behance"
                    subText="Website"
                    src={imageBehance}
                    alt="behance"
                    href="https://www.behance.net/"
                />

                <CardsBookmarks
                    text="Fotor"
                    subText="Website"
                    src={imageFotor}
                    alt="fotor"
                    href="https://www.fotor.com/"
                />

                <CardsBookmarks
                    text="Mockflow"
                    subText="Website"
                    src={imageMockflow}
                    alt="mockflow"
                    href="https://mockflow.com/"
                />

                <CardsBookmarks
                    text="Stack Overflow"
                    subText="Website"
                    src={imageStackOverflow}
                    alt="stack overflow"
                    href="https://stackoverflow.com/"
                />
                <CardsBookmarks
                    text="Unsplash"
                    subText="Website"
                    src={imageUnsplash}
                    alt="unsplash"
                    href="https://unsplash.com/"
                />
            </ContentCards>
        </Container>
    )
}
