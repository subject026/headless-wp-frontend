import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Content from "../components/Content"
import PageWrap from "../components/styled/PageWrap"
import Hero from "../components/styled/Hero"

const IndexPage = ({ data }) => {
  const {
    title,
    content,
    yoast_meta: { yoast_wpseo_title, yoast_wpseo_metadesc },
    acf: {
      featured_image: {
        localFile: {
          childImageSharp: { fluid, fixed },
        },
      },
    },
  } = data.wordpressPage
  return (
    <Layout>
      <SEO
        title={title}
        yoast_wpseo_title={yoast_wpseo_title}
        yoast_wpseo_metadesc={yoast_wpseo_metadesc}
      />
      <Hero>
        <PageWrap>
          <h1>{title}</h1>
        </PageWrap>
        <Img fluid={fluid} />
      </Hero>
      <Content content={content} />
      <Link to="/additional-page/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    wordpressPage(slug: { eq: "this-is-the-homepage" }) {
      title
      content
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
      }
      acf {
        featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000, maxHeight: 800) {
                ...GatsbyImageSharpFluid
              }
              fixed(height: 500) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
