import * as React from 'react'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        Hi I'm James, welcome to my portfolio site. 
      </p>
      <p>
        This is the first iteration of my site which I'm developing to show off my portfolio as well as be a portfolio item itself. 
        I've got more planned for this site when the relentless flow of university assignments finally yields so feel free to check back later to see those changes. 
        For now feel free to find out more on my 'about me' and 'project pages'.
        If you want to get in contact with me see the 'contact' page to find out how 
      </p>
      <p>
        Thanks again for checking everything out.
      </p>
    </Layout>
  )
}
export const Head = () => <title>Home Page</title>
export default IndexPage