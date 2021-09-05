import React from 'react'
import Layout from '../components/layout/layout'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout pageTitle="My Blog Posts" title={data.site.siteMetadata.title}>
        <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          ))
        }
        </ul>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
    site {
      siteMetadata {
        title
      }
  }
  }
`

export default IndexPage
