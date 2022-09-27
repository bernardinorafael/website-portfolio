import { NavLink } from "react-router-dom"
import { ButtonNavbar } from "../ButtonNavbar"

import { useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import { ButtonToggleTheme } from "../ButtonToggleTheme"

import imageHeader from "../../assets/header-image.png"
import { ButtonOptions } from "../ButtonOptions"
import { Button, Container, Content } from "./styles"
import { DropDownMenu } from "../DropDownMenu"

export function Header() {
   const [showDropDownMenu, setShowDropDownMenu] = useState(false)
   const { handleBack } = useContext(GlobalContext)

   function handleShowDropDownMenu() {
      setShowDropDownMenu(!showDropDownMenu)
   }

   return (
      <Container>
         <Content>
            <NavLink to={"/"}>
               <Button onClick={handleBack}>
                  <img src={imageHeader} alt={"rafael bernardino"} />
               </Button>
            </NavLink>

            <nav>
               <NavLink to={"about"}>
                  <ButtonNavbar onClick={handleBack} buttonText={"Sobre"} />
               </NavLink>
               <NavLink to={"tools"}>
                  <ButtonNavbar onClick={handleBack} buttonText={"Apps"} />
               </NavLink>
               <ButtonOptions onShowDropDownMenu={handleShowDropDownMenu} />
            </nav>

            <ButtonToggleTheme />
         </Content>
         {!showDropDownMenu && <DropDownMenu />}
      </Container>
   )
}
