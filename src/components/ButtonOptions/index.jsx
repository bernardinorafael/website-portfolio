import * as Menu from "@radix-ui/react-dropdown-menu"
import "animate.css"
import { useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { DropdownContent } from "../DropdownContent"
import { ContainerButton } from "./styles"

export function ButtonOptions() {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <ContainerButton>
                    <BiDotsVerticalRounded
                        className={"animate__animated animate__bounceIn animate__faster"}
                    />
                </ContainerButton>
            </Menu.Trigger>

            <DropdownContent />
        </Menu.Root>
    )
}
