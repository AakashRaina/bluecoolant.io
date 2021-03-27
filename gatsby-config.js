module.exports = {
  siteMetadata: {
    title: `Home | Aakash Raina`,
    description: `Aakash raina's blog`,
    author: `@AakashRaina`,
    twitter: `https://twitter.com/Bluecoolant`,
    github: `https://github.com/AakashRaina`,
    linkedIn: `https://www.linkedin.com/in/aakashraina/`,
    mailto: `mailto:aakashraina9@gmail.com`,
    resume: `https://www.dropbox.com/s/qe93dipic3ckksf/Aakash_Raina_Resume.pdf?dl=0`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-stylus`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aakash Raina's Blog`,
        short_name: `AakashRaina`,
        start_url: `/`,
        background_color: `#2ca2e9`,
        theme_color: `#2ca2e9`,
        display: `minimal-ui`,
        icon: `src/images/Aakash.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey:
          process.env.NODE_ENV === `production`
            ? `${process.env.SEGMENT_PRODUCTION_WRITE_KEY}`
            : ``,
        trackPage: true,
      },
    },
  ],
};
