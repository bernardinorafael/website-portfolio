import { Container } from "./styles"
import { Link } from "react-router-dom"

import "animate.css"
import { BsCodeSlash, BsFillBookmarkFill } from "react-icons/bs"
import { HiNewspaper } from "react-icons/hi"

export function DropDownMenu({ ShowDropDownMenu }) {
   function handleCloseDropDownMenu() {
      setTimeout(() => {
         ShowDropDownMenu()
      }, 500)
   }

   return (
      <Container
         onMouseLeave={handleCloseDropDownMenu}
         className={"animate__animated animate__zoomIn"}
      >
         <div>
            <Link onClick={() => ShowDropDownMenu()} to="/bookmarks">
               <BsFillBookmarkFill size={20} />
               <strong>Bookmarks</strong>
            </Link>
            <a className="disabled">
               <HiNewspaper size={20} />
               <strong>Blog</strong>
            </a>
            <a className="disabled">
               <BsCodeSlash size={20} />
               <strong>Desenvolvimento</strong>
            </a>
         </div>
      </Container>
   )
}
