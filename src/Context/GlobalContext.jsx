import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { dark, light } from "../styles/themes/themes"

export const GlobalContext = createContext({})

export function GlobalProvider({ children }) {
	const [theme, setTheme] = useState(dark)

	function toggleTheme() {
		setTheme(theme.name === "dark" ? light : dark)
		console.log("Tema alterado")
	} //! Função e estado do toggle switcher theme

	const [isModalEmailOpen, setIsModalEmailOpen] = useState(false)
	function handleOpenModalEmail() {
		setIsModalEmailOpen(true)
	}

	function handleCloseModalEmail() {
		setIsModalEmailOpen(false)
	} //! Estado do modal de e-mail e funções de abrir e fechar

	function handleBack() {
		window.scrollTo({ top: 0, behavior: "smooth" })
	} //! Função para scrollar ao topo

	return (
		<ThemeProvider theme={theme}>
			<GlobalContext.Provider
				value={{
					handleBack,
					handleCloseModalEmail,
					handleOpenModalEmail,
					isModalEmailOpen,
					toggleTheme,
				}}
			>
				{children}
			</GlobalContext.Provider>
		</ThemeProvider>
	)
}
