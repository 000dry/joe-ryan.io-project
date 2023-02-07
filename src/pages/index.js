import React from 'react'
import Layout from '../components/layout/layout'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) =>  (
    <>
      <Layout pageTitle="New site work in progress" title={data.site.siteMetadata.title}>
        <ul>
        {
          data.allMdx.nodes.map((node) => {
            const { id, fields, frontmatter } = node;
            return (
              <article key={id}>
                <h2>
                  <Link to={`/${frontmatter.slug}`}>
                    {frontmatter.title}
                  </Link>
                </h2>
                <p>{fields.timeToRead.minutes} min read</p>
                <p>Posted: {frontmatter.date}</p>
              </article>
            )
          })
        }
        </ul>
      </Layout>
    </>
  )

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        fields {
          timeToRead {
            minutes
          }
        }
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
