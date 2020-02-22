import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import PageWrap from "./styled/PageWrap"

const Header = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  a {
    color: #202020;
    font-size: 20px;
    text-decoration: none;
    font-weight: 600;
  }
`

const Component = ({ siteTitle }) => (
  <Header>
    <PageWrap>
      <Link to="/">{siteTitle}</Link>
    </PageWrap>
  </Header>
)

Component.propTypes = {
  siteTitle: PropTypes.string,
}

Component.defaultProps = {
  siteTitle: ``,
}

export default Component
