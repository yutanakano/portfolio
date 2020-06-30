/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/postDetail.js')
  const result = await graphql(`
  query {
    allContentfulPost {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)

  result.data.allContentfulPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/posts/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}