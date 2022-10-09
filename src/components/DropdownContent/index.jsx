import * as Menu from "@radix-ui/react-dropdown-menu"
import { BsCodeSlash, BsFillBookmarkFill } from "react-icons/bs"
import { HiNewspaper } from "react-icons/hi"
import { Link } from "react-router-dom"
import { Arrow, Content, ItemMenu } from "./styles"

import "animate.css"

export function DropdownContent() {
    return (
        <Menu.Portal>
            <Content
                className="animate__animated animate__zoomIn "
                arrowPadding={10}
                sideOffset={5}
                align="start"
            >
                <Arrow width={12} height={8} />

                <ItemMenu asChild>
                    <Link to="/bookmarks">
                        <BsFillBookmarkFill size={20} />
                        <strong>Bookmarks</strong>
                    </Link>
                </ItemMenu>

                <ItemMenu disabled asChild>
                    <div>
                        <HiNewspaper size={20} />
                        <strong>Blog</strong>
                    </div>
                </ItemMenu>

                <ItemMenu disabled asChild>
                    <div>
                        <BsCodeSlash size={20} />
                        <strong>Desenvolvimento</strong>
                    </div>
                </ItemMenu>
            </Content>
        </Menu.Portal>
    )
}
