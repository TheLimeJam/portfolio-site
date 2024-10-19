import * as React from 'react'
import Layout from '../components/layout'

const ProjectPage = () => {
    return (
        <Layout pageTitle="My Projects">
            <h1>QUT IT Capstone Project</h1>
            <h1>Game Jam</h1>
            <h1></h1>
            <p>
                Check out all my projects here except I havent sent them so there are none here ahahahah
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