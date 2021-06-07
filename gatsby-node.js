const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const layoutTemplate = path.resolve(`src/templates/pageTemplate.js`);
 
  const contentfulPages = graphql(`
  query {
      allContentfulLayout {
          edges {
              node {
                  slug
                  node_locale
              }
          }
      }
      
  }
`).then(result => {
      if (result.errors) {
          throw result.errors;
      }
      result.data.allContentfulLayout.edges.forEach(edge => {
          if (edge.node.slug === "404") {
              // for 404 page we use custom page at src/pages/404.js
              return;
          }
          createPage({
              path: edge.node.slug,
              component: layoutTemplate,
              context: {
                  slug: edge.node.slug
              }
          });
      });
  })

  return Promise.all([contentfulPages]);
}