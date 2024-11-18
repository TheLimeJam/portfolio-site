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
  optionsBar,
  opButton,
  addressBar,
  abButton,
  abBox,
  abName,
  abSearchBar
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
        <li className={hbButton}>X</li>
        <li className={hbButton}>|_|</li>
        <li className={hbButton}>_</li>
      </ul>
      <ul className={optionsBar}> 
        <li className={opButton}>File</li>
        <li className={opButton}>Edit</li>
        <li className={opButton}>View</li>
        <li className={opButton}>Favourites</li>
        <li className={opButton}>Help</li>
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
          <li className={abButton}>V</li>
        </ul>
      </ul>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout