import * as React from 'react'
import Layout from '../components/layout'

const ProjectPage = () => {
    return (
        <Layout pageTitle="My Projects">
            <a href="https://itch.io/profile/the-lime-jam">itch.io</a><br></br>
            <a href="https://github.com/TheLimeJam">Github</a>
            <p>
                Check out my itch.io and Github to see my projects.
            </p>
        </Layout>
    )
}

export const Head = () => (
    <>
      <title>My Projects</title>
      <meta name="description" content="list of projects" />
    </>
  )
export default ProjectPage