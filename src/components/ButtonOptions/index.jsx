import { useState } from "react"
import { Container } from "./styles"

import "animate.css"

import { BiDotsHorizontalRounded, BiDotsVerticalRounded } from "react-icons/bi"

export function ButtonOptions({ onShowDropDownMenu }) {
   const [clicked, setClicked] = useState(false)

   function toggleButtonMenuDropDown() {
      setClicked(!clicked)
      onShowDropDownMenu()
   }

   return (
      <Container onClick={toggleButtonMenuDropDown}>
         {clicked ? (
            <BiDotsVerticalRounded
               className={"animate__animated animate__bounceIn animate__faster"}
            />
         ) : (
            <BiDotsHorizontalRounded
               className={"animate__animated animate__bounceIn animate__faster"}
            />
         )}
      </Container>
   )
}
