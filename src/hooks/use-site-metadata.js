import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
    return { ...useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    siteUrl
                    title
                }
            }
        }
    `
) };
}
