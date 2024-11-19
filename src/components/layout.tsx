import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  headingBar,
  hbButton,
  addressBar,
  abButton,
  abBox,
  abName,
  abSearchBar,
  footerBar,
  fbText,
  fbLoad,
  fbBlock
} from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className={container}>
      <ul className={headingBar}> 
        {pageTitle}
        <li className={hbButton}>&#128473;</li>
        <li className={hbButton}>&#128470;</li>
        <li className={hbButton}>&#128469;</li>
      </ul>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
            Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about-me" className={navLinkText}>
              About Me
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>
              My Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={addressBar}> 
        <li className={abName}>Address:</li>
        <ul className={abSearchBar}>
          <li className={abBox}>https//www.jamesgraieg.com/{pageTitle}</li>
          <li className={abButton}>&#11206;</li>
        </ul>
      </ul>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <ul className={footerBar}> 
          <li className={fbText}></li>
          <div className={fbLoad}>
            <div className={fbBlock}></div>
          </div>
        </ul>
      </footer>
    </div>
  )
}

export default Layout