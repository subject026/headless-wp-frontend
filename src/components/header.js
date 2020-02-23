import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import PageWrap from "./styled/PageWrap"

import Header from "./styled/Header"

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
