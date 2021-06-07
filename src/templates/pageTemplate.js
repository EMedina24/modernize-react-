import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from  "../sections/section"



export const query = graphql`
    query($slug: String!) {
        contentfulLayout(slug: { eq: $slug }) {
            id
            slug
            title
            description
            contentful_id
           
            contentModule {
                ... on Node {
                    id
                    __typename
                }
            }
        }
    }
`;





const PageTemplate= ({data,location}) => {
 
  const contentModule = data.contentfulLayout.contentModule;
  console.log(data)
  return (
    <Layout>
         {
                contentModule && contentModule.length > 0 &&
                contentModule.map(content => (
                   
                    <Section contentModuleId={ content.id } type={ content.__typename } key={content.id}  />
                    
                ))
            }
    </Layout>
  )
}

export default PageTemplate


