import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import NavCard from "../components/navCard"
import HiwCard from "../components/Hiw"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
     <Header/>
     <Hero/>
     <div class="page-content deferred">
     <NavCard/>
     <HiwCard/>
     </div>
     <Footer/>
    </div>
  )
}

export default Layout
