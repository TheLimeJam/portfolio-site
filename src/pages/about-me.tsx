import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi thanks for checking out my Portfolio</p>
            <p>
            I’m a student at the Queensland University of Technology studying a bachelor of Information Technology with and interest in Front end web development and game programming. 
            QUT has provided me with fundamentals and basics in many areas of programming from languages to environments to group development. 
            I’m looking for a position that will teach me and help me take this skills from student to industry level as well as give me the experiences that can’t be learned. 
            </p>
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