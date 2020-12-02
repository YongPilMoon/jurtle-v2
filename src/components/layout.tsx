import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"

const Container = styled.div`
  max-width: 620px;
  margin: 0 auto;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
