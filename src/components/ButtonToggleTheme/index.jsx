import { useContext, useState } from "react"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

import { Button } from "./styles"

import "animate.css"
import { GlobalContext } from "../../Context/GlobalContext"

export function ButtonToggleTheme() {
   const { toggleTheme } = useContext(GlobalContext)

   const [isDarkMode, setIsDarkMode] = useState(true)

   function handleToggleDarkMode() {
      setIsDarkMode(!isDarkMode)
      toggleTheme()
   }

   return (
      <Button onClick={handleToggleDarkMode}>
         {isDarkMode ? (
            <BsSunFill
               className={"animate__animated animate__bounceIn animate__faster"}
            />
         ) : (
            <BsMoonFill
               className={"animate__animated animate__bounceIn animate__faster"}
            />
         )}
      </Button>
   )
}
