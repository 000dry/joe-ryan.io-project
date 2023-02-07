module.exports = {
  siteMetadata: {
    siteUrl: "http://joe-ryan.io/",
    title: "joe-ryan.io",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Joe Ryan",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
