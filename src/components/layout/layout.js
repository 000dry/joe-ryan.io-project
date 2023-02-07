import * as React from 'react'
import { Helmet } from 'react-helmet';
import {
  container,
  siteTitle,
  footer
} from './layout.module.css'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ headSection, title, children }) => {
  return (
    <div className={container}>
       <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className={siteTitle}>000dry</header>
      <main>
        {headSection}
        {children}
      </main>
      <footer className={footer}>
          <p>some stuff</p>
      </footer>
    </div>
  )
}

export default Layout
