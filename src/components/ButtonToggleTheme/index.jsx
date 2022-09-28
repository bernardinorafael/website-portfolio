import { useContext, useEffect } from "react"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

import { Button } from "./styles"

import "animate.css"
import { GlobalContext } from "../../Context/GlobalContext"

export function ButtonToggleTheme() {
    const { toggleTheme, isDarkMode, setIsDarkMode } = useContext(GlobalContext)

    function handleToggleDarkMode() {
        setIsDarkMode(!isDarkMode)
        toggleTheme()
    }

    return (
        <Button onClick={handleToggleDarkMode}>
            {isDarkMode ? (
                <BsSunFill className={"animate__animated animate__bounceIn animate__faster"} />
            ) : (
                <BsMoonFill
                    className={"animate__animated animate__bounceIn animate__faster"}
                />
            )}
        </Button>
    )
}
