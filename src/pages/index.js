import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { MdFolderOpen, MdLabelOutline, MdUpdate } from 'react-icons/md';

const IndexPage = props => (
  <Layout>
    <SEO title="生存戦略しましょうか"/>
    <div className="columns is-multiline">
      {props.data.allContentfulPost.edges.map(cards =>
        <div key={cards.node.id} className="column is-multiline is-12-mobile is-4-tablet is-6-desktop">
          <div className="card">
            <div className="card-image">
              <img className="image" src={cards.node.image.file.url} alt={cards.node.image.description} />
            </div>
            <div className="card-content">
              <time><MdUpdate />{cards.node.createdAt}</time>
              <div className="media">
                <div className="media-content">
                  <Link className="title is-size-5" to={`/posts/${cards.node.slug}`}>{cards.node.title}</Link>
                </div>
              </div>
              <div className="column">
                <div>
                  <Link className="tag is-link" to='#'><MdFolderOpen />{cards.node.category.name}</Link>
                </div>
                <div>
                  {cards.node.tags.map(tags =>
                    <Link key={tags.id} className="tag is-multiline" to='#'><MdLabelOutline />{tags.name}</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  allContentfulPost {
    edges {
      node {
        id
        title
        slug
        createdAt(formatString: "YYYY年MM月DD日")
        category {
          id
          slug
          name
        }
        tags {
          id
          slug
          name
        }
        image {
          id
          description
          file {
            url
          }
        }
      }
    }
  }
}
`
