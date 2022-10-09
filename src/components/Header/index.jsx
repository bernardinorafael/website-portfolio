import { NavLink } from "react-router-dom"
import { ButtonNavbar } from "../ButtonNavbar"

import { useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import { ButtonToggleTheme } from "../ButtonToggleTheme"

import imageHeader from "../../assets/header-image.png"
import { ButtonOptions } from "../ButtonOptions"
import { Button, Container, Content } from "./styles"

export function Header() {
    const { handleBack } = useContext(GlobalContext)

    return (
        <Container>
            <Content>
                <NavLink to="/">
                    <Button onClick={handleBack}>
                        <img src={imageHeader} alt="rafael bernardino" />
                    </Button>
                </NavLink>

                <nav>
                    <NavLink to="about">
                        <ButtonNavbar onClick={handleBack} buttonText="Sobre mim" />
                    </NavLink>
                    <NavLink to="tools">
                        <ButtonNavbar onClick={handleBack} buttonText="Apps" />
                    </NavLink>
                    <ButtonOptions />
                </nav>
                <ButtonToggleTheme />
            </Content>
        </Container>
    )
}
