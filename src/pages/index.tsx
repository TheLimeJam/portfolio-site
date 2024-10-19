import * as React from 'react'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        Hi Welcome to my portfolio site. 
        It's a bit bare bones at the moment but what can you oexpect 
      </p>
    </Layout>
  )
}
export const Head = () => <title>Home Page</title>
export default IndexPage