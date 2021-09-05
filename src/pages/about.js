import React from 'react'
import Layout from '../components/layout/layout'
import useSiteMetadata from '../hooks/use-site-metadata'

const AboutPage = () => {
    const { site } = useSiteMetadata()
    return (
        <Layout pageTitle="About Me" title={`About Me | ${site.siteMetadata.title}`}>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export default AboutPage
