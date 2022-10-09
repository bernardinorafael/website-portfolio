import * as Hover from "@radix-ui/react-hover-card"
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FiCheckSquare, FiCopy } from "react-icons/fi"
import { Arrow, Content, ContentCard, EmailItemContent } from "./styles"

import { useState } from "react"
import { Link } from "react-router-dom"

export function ContactCard() {
    const [showCopyButton, setShowCopyButton] = useState(true)
    const valueEmailCopied = "rafaelferreirab2@gmail.com"

    function handleCopyToClipboard() {
        navigator.clipboard.writeText(valueEmailCopied)
        setShowCopyButton(false)

        setTimeout(() => {
            setShowCopyButton(true)
        }, 1000)
    }

    return (
        <Hover.Portal>
            <Content align="center" arrowPadding={10} sideOffset={5}>
                <Arrow width={12} height={8} />

                <ContentCard>
                    <strong>Contato 🔗</strong>

                    <hr />

                    <section>
                        <a target="_blank" href="https://www.linkedin.com/in/rafabernardino/">
                            <FaLinkedin size={25} />
                            <span>LinkedIn</span>
                        </a>

                        <a target="_blank" href="https://github.com/bernardinorafael">
                            <FaGithub size={25} />
                            <span>Github</span>
                        </a>

                        <a
                            target="_blank"
                            href="https://api.whatsapp.com/send?phone=5548988566239"
                        >
                            <FaWhatsapp size={25} />
                            <span>Whatsapp</span>
                        </a>

                        <a target="_blank" href="https://twitter.com/orafabernardino">
                            <FaTwitter size={25} />
                            <span>Twitter</span>
                        </a>

                        <EmailItemContent onClick={handleCopyToClipboard}>
                            <FaMailBulk size={25} />
                            <span>
                                rafaelferreirab2@gmail.com
                                {showCopyButton ? (
                                    <FiCopy size={13} />
                                ) : (
                                    <FiCheckSquare size={13} color={"#1BDE9D"} />
                                )}
                            </span>
                        </EmailItemContent>
                    </section>
                </ContentCard>
            </Content>
        </Hover.Portal>
    )
}
