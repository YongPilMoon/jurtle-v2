import { Link } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"

const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 12px;
`

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
`
interface props {}
const Header: FC<props> = () => (
  <Container>
    <Logo
      to="/"
    >
      JURTLE
    </Logo>
  </Container>
)

export default Header
