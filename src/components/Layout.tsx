import React, { FC } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import theme from "../theme/theme"

const Container = styled.div`
  border-left: 1px solid ${({ theme }) => theme.gray0};
  border-right: 1px solid ${({ theme }) => theme.gray0};
  max-width: 620px;
  min-height: 100vh;
  margin: 0 auto;
`
const Layout: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
