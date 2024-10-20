import * as React from 'react'
import Layout from '../components/layout'

const ProjectPage = () => {
    return (
        <Layout pageTitle="My Projects">
            <span>
                Check out my projects here.
                You can also find them along with some smaller stuff on
            </span>
            <a href="https://github.com/TheLimeJam"> my Github</a>
            <span> and</span>
            <a href="https://itch.io/profile/the-lime-jam"> my itch.io</a><br></br>
            <h1>QUT Captsone Project for Energy Queensland</h1>
            <h2>Roles: Project manager, front end and back end web developer</h2>
            <p> or my QUT capstone project I joined a team of 4 IT students to develop and deliver a website designed to store and organise 3D assets for Energy Queensland. We worked under an adapted SCRUM framework, designing and developing a fully functioning Next.js website and API to call our proof of concept Azure database. Upon conclusion of our project our work was handed straight to developers at Energy Queensland for integration into their network and database so documentation especially for our API was key.</p>

            <h1>24hr Game Jam</h1>
            <h2>Roles: Games programmer</h2>
            <a href="https://the-lime-jam.itch.io/dont-run-out-of-time">Game page</a><br></br>
            <a href="https://github.com/TheLimeJam/Organ-Game">The game's repo</a>
            <p>
                I worked as a programmer in a group of 3 in a 24hr game jam.
                Together we made a 2d platformer in unity with the theme of 'time'
                In the end we did run our of 'time' and the game never reached completion. 
                It taught us a lot of game dev fundimentals and about working under pressure.
            </p>

            <h1>Collaboration Portfolio Site</h1>
            <h2>Roles: web programmer</h2>
            <a href="https://sf-architects.web.app/">The Webiste</a><br></br>
            <p>
                A portfolio site a friend an I made as a side project to help me learn Vue and for him to learn three.js. 
                While I was happy with how it turned out, because we were working individually and slapping everything together at the end, not everything was compatible and a chunk of my work had to be scrapped. 
                In the end i still enjoyed learning Vue and it taught my the significance of planning and collaboration through version control. 
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