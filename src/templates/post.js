import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <div className="layout">
            <Header headerText={post.frontmatter.title} />
            <div className="main" dangerouslySetInnerHTML={{ __html: post.html }} />
            <Footer />
        </div>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`