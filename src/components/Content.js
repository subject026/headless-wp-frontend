import React from "react"
import ReactHTMLParser from "react-html-parser"

import leaves from "../images/leaves.mp4"
import styled from "styled-components"

const Container = styled.div`
  video {
    width: 100%;
    height: auto;
  }
`

export default ({ content }) => {
  // props.children.forEach(child => {
  //   console.log(child)
  // })
  return (
    <>
      {ReactHTMLParser(content)}
      <Container>
        <video controls autoplay loop>
          <source data-src={leaves} type="video/mp4" />
        </video>
      </Container>
    </>
  )
}
