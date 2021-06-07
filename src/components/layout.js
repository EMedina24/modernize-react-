import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"


const Layout = ({children}) => {
  
  

  return (
    <div className="global-wrapper" >
     <Header/>
    <div>
                { children }
            </div>
     <Footer/>
    </div>
  )
}

export default Layout
