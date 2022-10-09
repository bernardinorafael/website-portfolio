import { NavLink } from "react-router-dom"
import { ButtonNavbar } from "../ButtonNavbar"

import { useContext } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import { GlobalContext } from "../../Context/GlobalContext"
import { ButtonToggleTheme } from "../ButtonToggleTheme"

import * as Hover from "@radix-ui/react-hover-card"

import imageHeader from "../../assets/header-image.png"
import { ButtonOptions } from "../ButtonOptions"
import { ContactCard } from "../ContactCard"
import { Button, ContactButton, Container, Content } from "./styles"

export function Header() {
    const { handleBack } = useContext(GlobalContext)

    return (
        <Container>
            <Content>
                <NavLink to="/">
                    <Button onClick={handleBack}>
                        <img src={imageHeader} />
                    </Button>
                </NavLink>

                <nav>
                    <NavLink to="about">
                        <ButtonNavbar onClick={handleBack} buttonText="Sobre mim" />
                    </NavLink>
                    <NavLink to="tools">
                        <ButtonNavbar onClick={handleBack} buttonText="Apps" />
                    </NavLink>

                    <hr />

                    <Hover.Root openDelay={200} closeDelay={300}>
                        <Hover.Trigger asChild>
                            <ContactButton>
                                <BsFillPersonFill />
                            </ContactButton>
                        </Hover.Trigger>

                        <ContactCard />
                    </Hover.Root>

                    <ButtonOptions />
                </nav>
                <ButtonToggleTheme />
            </Content>
        </Container>
    )
}
