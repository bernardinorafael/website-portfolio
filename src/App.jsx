import Modal from "react-modal"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./Context/GlobalContext"

import { ChromeExtensions } from "./components/ChromeExtensions"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Stacks } from "./components/Stacks"
import { WebApps } from "./components/WebApps"
import { WindowsApps } from "./components/WindowsApps"
import { About } from "./pages/About"
import { Bookmarks } from "./pages/Bookmarks"
import { Home } from "./pages/Home"
import { Tools } from "./pages/Tools"
import { GlobalStyles } from "./styles/global-styles"

Modal.setAppElement("#root")

export function App() {
   return (
      <GlobalProvider>
         <BrowserRouter>
            <GlobalStyles />
            <Header />
            <Routes>
               <Route path={"/"} element={<Home />} />

               <Route path={"/tools"} element={<Tools />}>
                  <Route path={"winapps"} element={<WindowsApps />} />
                  <Route path={"webapps"} element={<WebApps />} />
                  <Route path={"chromeplugins"} element={<ChromeExtensions />} />
                  <Route path={"stacks"} element={<Stacks />} />
               </Route>

               <Route path={"/about"} element={<About />} />
               <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </GlobalProvider>
   )
}
