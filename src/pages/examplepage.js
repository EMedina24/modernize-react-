import * as React from "react"
import { Link, graphql } from "gatsby"
import Hero from "../sections/hero"

import NavCard from "../sections/navCard"
import HiwCard from "../sections/Hiw"

import Layout from "../components/layout"


const BlogIndex = ({ data, location }) => {
  

  

  return (
    <Layout >
      
      <div className="global-wrapper" >
   
     <Hero/>
     <div class="page-content deferred">
     <NavCard/>
     <HiwCard/>
     </div>
   
    </div>
    </Layout>
  )
}

export default BlogIndex


