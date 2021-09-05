import * as React from 'react'
import Layout from '../components/layout/layout'
import useSiteMetadata from '../hooks/use-site-metadata'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
    const { site } = useSiteMetadata()
    return (
        <Layout pageTitle={data.mdx.frontmatter.title} title={`${data.mdx.frontmatter.title} | ${site.siteMetadata.title}`}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost
