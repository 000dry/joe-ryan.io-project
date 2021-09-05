import { graphql, useStaticQuery } from 'gatsby'

export default function useSite() {
    return { ...useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `
) };
}
