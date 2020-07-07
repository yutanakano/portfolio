import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { MdFolderOpen, MdLabelOutline, MdUpdate } from 'react-icons/md';

const PostPage =  props => (
  <Layout>
    <SEO title={ props.data.contentfulPost.title } description={ props.data.contentfulPost.description } />
    <div className="section">
      <div className="container">
        <img className="image" src={props.data.contentfulPost.image.file.url} alt={props.data.contentfulPost.image.description} />
        <div className="card-content">
          <time><MdUpdate />{props.data.contentfulPost.createdAt}</time>
          <div className="media">
            <div className="media-content">
              <p className="title is-size-5" to="#">{props.data.contentfulPost.title}</p>
            </div>
          </div>
          <article dangerouslySetInnerHTML={{__html: props.data.contentfulPost.content.childMarkdownRemark.html}}>
          </article>
          <div className="column">
            <div>
              <p className="tag is-link" to='#'><MdFolderOpen />{props.data.contentfulPost.category.name}</p>
            </div>
            <div>
              {props.data.contentfulPost.tags.map(tags => 
                <p className="tag is-multiline" to='#'><MdLabelOutline />{tags.name}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default PostPage

export const query = graphql`
  query ($slug: String) {
    contentfulPost(slug: {eq: $slug}) {
      id
      description
      title
      createdAt(formatString: "YYYY年MM月DD日")
      image {
        id
        description
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      category {
        id
        name
        slug
      }
      tags {
        id
        name
        slug
      }
    }
  }
`