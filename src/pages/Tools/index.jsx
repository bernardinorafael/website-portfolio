/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"

import { Title } from "../../components/Title"

import { AiFillTool } from "react-icons/ai"
import { FaChrome, FaWindows } from "react-icons/fa"
import { TbWorldUpload } from "react-icons/tb"
import "animate.css"

import { Container, Navbar, TitleContent } from "./styles"
import { Helmet } from "react-helmet"

export function Tools() {
   const navigate = useNavigate()

   useEffect(() => {
      navigate("/tools/winapps")
   }, [])

   return (
      <Container className={"animate__animated animate__fadeIn"}>
         <Helmet>
            <title>Apps | Rafael Bernardino</title>
         </Helmet>

         <TitleContent>
            <Title titleText={"Ferramentas"} />
            <p>
               Aqui está uma lista de ferramentas, extensões e apps que eu uso no meu dia a dia,
               deixo também como recomendação experimentá-las.
            </p>
         </TitleContent>

         <Navbar>
            <NavLink to={"winapps"}>
               <a className="button-menu-tools windows-apps">
                  <FaWindows />
                  <span>Windows</span>
               </a>
            </NavLink>

            <NavLink to={"webapps"}>
               <a className="button-menu-tools web-apps">
                  <TbWorldUpload />
                  <span>Web</span>
               </a>
            </NavLink>

            <NavLink to={"chromeplugins"}>
               <a className="button-menu-tools chrome-apps">
                  <FaChrome />
                  <span>Chrome</span>
               </a>
            </NavLink>

            <NavLink to={"stacks"}>
               <a className="button-menu-tools stacks-apps">
                  <AiFillTool />
                  <span>Stacks</span>
               </a>
            </NavLink>
         </Navbar>

         <Outlet />
      </Container>
   )
}
