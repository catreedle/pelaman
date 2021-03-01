import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import '../styles/index.css'

export default function Home({ data }) {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <div>
          <h1 className="index-header">
            What I have so far...
          </h1>
          <h4 className="post-counter">{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="post" key={node.id}>
              <h3 className="post-title">
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p className="post-summary">{node.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`