import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{textAlign: 'center'}}>AJ Cariaga</h1>
    <h2 style={{textAlign: 'center'}}>Full-Stack Software Engineer</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
