import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi thanks for checking out my Page</p>
            <p>I'm currently a student at the Queensland University of Technology studing a Bachlers of IT.</p>
            <p>thanks for reading this message.</p>
        </Layout>
    )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="about page for portfolio" />
    </>
)
export default AboutPage