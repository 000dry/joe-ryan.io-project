import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footer
} from './layout.module.css'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ pageTitle, title, children }) => {
  return (
    <div className={container}>
       <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className={siteTitle}>joe-ryan.io</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
          <p>some stuff</p>
      </footer>
    </div>
  )
}

export default Layout
