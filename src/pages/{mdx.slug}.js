import * as React from 'react'
import Layout from '../components/layout/layout'
import useSite from '../hooks/use-site'

const BlogPost = () => {
    const { site } = useSite()
    return (
        <Layout pageTitle="Super Cool Blog Posts" title={`Super Cool Blog Posts | ${site.siteMetadata.title}`}>
            <p>My blog post contents will go here (eventually).</p>
        </Layout>
    )
}

export default BlogPost