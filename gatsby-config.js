module.exports = {
  pathPrefix: "/problog",
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `ProBlog`,
    author: `Pratik Temkar`,
    description: `Just something I like to share.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/pratikstemkar`,
      },
      {
        name: `github`,
        url: `https://github.com/pratikstemkar`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/pratikstemkar`,
      },
      {
        name: `mail`,
        url: `mailto:pratikstemkar@gmail.com`,
      },
      {
        name: `pratikstemkar.me`,
        url: `https://pratikstemkar.me`,
      },
    ],
  },
}
