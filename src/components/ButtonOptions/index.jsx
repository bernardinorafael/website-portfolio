import { useEffect, useState } from "react"
import { Container } from "./styles"

import "animate.css"

import { BiDotsVerticalRounded } from "react-icons/bi"

export function ButtonOptions({ onShowDropDownMenu }) {
    const [buttonDropDownClicked, setButtonDropDownClicked] = useState(false)

    function toggleButtonMenuDropDown() {
        setButtonDropDownClicked(!buttonDropDownClicked)
        onShowDropDownMenu()
    }

    return (
        <Container onMouseEnter={toggleButtonMenuDropDown} onClick={toggleButtonMenuDropDown}>
            <BiDotsVerticalRounded
                className={"animate__animated animate__bounceIn animate__faster"}
            />
        </Container>
    )
}
