import { useContext } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si"
import { GlobalContext } from "../../Context/GlobalContext"
import { ModalEmail } from "../Modals/ModalEmail"
import { Container } from "./styles"

export function Footer() {
	const { handleOpenModalEmail, handleBack } = useContext(GlobalContext)

	return (
		<Container>
			<strong>Contato</strong>
			<section>
				<a
					href={"https://twitter.com/bernardinodev"}
					rel={"noreferrer"}
					target={"_blank"}
				>
					<SiTwitter />
				</a>
				<a
					href={"https://github.com/bernardinorafael"}
					rel={"noreferrer"}
					target={"_blank"}
				>
					<SiGithub />
				</a>
				<a
					href={"https://www.linkedin.com/in/eurafaelbernardino/"}
					rel="noreferrer"
					target={"_blank"}
				>
					<SiLinkedin />
				</a>
				<button onClick={handleOpenModalEmail}>
					<MdEmail />
				</button>
			</section>
			<button onClick={handleBack}>
				<AiOutlineArrowUp />
			</button>
			<ModalEmail />
		</Container>
	)
}
