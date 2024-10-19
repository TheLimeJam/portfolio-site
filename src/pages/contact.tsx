import * as React from 'react'
import Layout from '../components/layout'
import { emailForm, nameBox, emailBox, messageBox, submitButton} from '../components/layout.module.css'

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact">
            <p>
                If you're interested in getting in contact with me feel free to an email to me through this form. 
                It was probably the hardest part of this website ;-;
            </p>
            <div className={emailForm}>
                <form action="https://getform.io/f/alljoxva" method="POST">
                    <label className={nameBox}>
                        Name:
                        <input type="text" name="name" placeholder="Your name.."/>
                    </label>
                    <label className={emailBox}>
                        Email: 
                        <input type="email" name="email" placeholder="Your email.."/>
                    </label>
                    <label className={messageBox}>
                        Message: 
                        <input type="text" name="message" placeholder="Your message.." style={{height:"200px"}}/>
                    </label>                
                    {/*<!-- add hidden Honeypot input to prevent spams -->*/}
                    <input type="hidden" name="_gotcha" style={{display:"none !important"}}/>
                    {/*<!-- select field handle -->*/}
                    <button className={submitButton}type="submit">Send</button>
                </form>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <>
      <title>Contact</title>
      <meta name="description" content="My contact information" />
    </>
  )
export default ContactPage