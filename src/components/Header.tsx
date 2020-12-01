import { Link } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"

const Container = styled.header`
  height: 60px;
  background-color: green;
  display: flex;
  align-items: center;
  padding: 0 12px;
`
interface props {}
const Header: FC<props> = () => (
  <Container>
    <div>
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          jurtle
        </Link>
      </div>
    </div>
  </Container>
)

export default Header;
