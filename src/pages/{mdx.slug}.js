import * as React from 'react'
import Layout from '../components/layout/layout'
import useSiteMetadata from '../hooks/use-site-metadata'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
    const { site } = useSiteMetadata()
    React.useEffect(() => {
        const script = document.createElement('script')
        const anchor = document.getElementById('comments')
        script.setAttribute('src', 'https://utteranc.es/client.js')
        script.setAttribute('crossorigin', 'anonymous')
        script.setAttribute('async', true)
        script.setAttribute('repo', '000dry/joe-ryan.io-project')
        script.setAttribute('issue-term', data.mdx.frontmatter.title)
        script.setAttribute('theme', 'preferred-color-scheme')
        anchor.appendChild(script)
        return () => {
          anchor.innerHTML = ''
        }
      })

    return (
        <>
            <Layout pageTitle={data.mdx.frontmatter.title} title={`${data.mdx.frontmatter.title} | ${site.siteMetadata.title}`}>
                <p>{data.mdx.frontmatter.date}</p>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
                <h3>Sign in with GitHub to leave a comment.</h3>
                <div
                    id="comments"
                >
                </div>
            </Layout>
        </>
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
