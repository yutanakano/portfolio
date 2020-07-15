import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { MdFolderOpen, MdLabelOutline, MdUpdate } from 'react-icons/md';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

const PostPage = props => (
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
          <div className="columns is-multiline">
            <div>
              <p className="column tag is-link" to='#'><MdFolderOpen />{props.data.contentfulPost.category.name}</p>
            </div>
            <div>
              {props.data.contentfulPost.tags.map(tags => 
                <p key={tags.id} className="column tag" to='#'><MdLabelOutline />{tags.name}</p>
              )}
            </div>
          </div>
          <div>
            <FacebookShareButton url={ `${props.data.site.siteMetadata.siteUrl}${props.uri}` }>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton title={ props.data.contentfulPost.title } via={ props.data.site.siteMetadata.author } url={ `${props.data.site.siteMetadata.siteUrl}${props.uri}` } >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default PostPage

export const query = graphql`
  query ($slug: String) {
    site {
      siteMetadata {
        siteUrl
        author
      }
    }
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