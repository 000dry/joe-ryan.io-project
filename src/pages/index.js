import React from 'react'
import Layout from '../components/layout/layout'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout pageTitle="New site work in progress" title={data.site.siteMetadata.title}>
        <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
               <h2>
                <Link to={`/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
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
        slug
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
