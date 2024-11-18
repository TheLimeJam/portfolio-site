import * as React from 'react'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        Hi, I'm James, welcome to my portfolio site. 
      </p>
      <p>
        To hear more about me or my work feel free to check out the 'About Me' and 'My Projects' pages respectively.
        If you want to get in contact with me see the 'contact' page to find out how.
        The site is still in its early stages however I want it to be not just a list of my projects but a portfolio item itself.
        All the code is publicaly available on my github so feel free to check it out or come back to see the changes I make.
      </p>
      <p>
        Thanks again for checking everything out.
      </p>
    </Layout>
  )
}
export const Head = () => <title>Home Page</title>
export default IndexPage