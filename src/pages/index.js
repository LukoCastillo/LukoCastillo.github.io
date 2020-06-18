import React from "react"

// Components
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
  return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Welcome" />
            <Bio />
        </Layout>
    );
};

export default Home;


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`