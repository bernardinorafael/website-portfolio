import { useContext, useState } from "react"
import Modal from "react-modal"
import { GlobalContext } from "../../../Context/GlobalContext"

import "animate.css"

import { FiCheckSquare, FiCopy } from "react-icons/fi"

import { ModalStyle } from "./modal-styles"

export function ModalEmail() {
	const { isModalEmailOpen, handleCloseModalEmail } = useContext(GlobalContext)

	const valueEmailCopied = "rafaelferreirab2@gmail.com"
	const [showCopyButton, setShowCopyButton] = useState(true)

	function handleCopyToClipboard() {
		navigator.clipboard.writeText(valueEmailCopied)
		setShowCopyButton(false)

		setTimeout(() => {
			handleCloseModalEmail()
			setShowCopyButton(true)
		}, 500)
	}

	return (
		<Modal
			contentLabel={"modal email"}
			onRequestClose={handleCloseModalEmail}
			isOpen={isModalEmailOpen}
			className={"content-modal animate__animated animate__fadeInUp"}
			overlayClassName={"overlay-modal"}
		>
			<button onClick={handleCopyToClipboard}>
				<span>rafaelferreirab2@gmail.com</span>
				{showCopyButton ? <FiCopy /> : <FiCheckSquare color={"#1BDE9D"} />}
			</button>
			<ModalStyle />
		</Modal>
	)
}
