import * as React from 'react'
import Layout from '../components/layout/layout'
import useSiteMetadata from '../hooks/use-site-metadata'

const BlogPost = ({ data }) => {
    const { site } = useSiteMetadata()
    return (
        <Layout pageTitle="Super Cool Blog Posts" title={`Super Cool Blog Posts | ${site.siteMetadata.title}`}>
            <p>My blog post contents will go here (eventually).</p>
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
