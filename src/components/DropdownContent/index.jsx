import * as Menu from "@radix-ui/react-dropdown-menu"
import { BsCodeSlash, BsFillBookmarkFill } from "react-icons/bs"
import { HiNewspaper } from "react-icons/hi"
import { Link } from "react-router-dom"
import { Content, Arrow, ItemMenu } from "./styles"

export function DropdownContent() {
    return (
        <Menu.Portal>
            <Content arrowPadding={10} sideOffset={8} align="start">
                <Arrow width={15} height={12} />

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
