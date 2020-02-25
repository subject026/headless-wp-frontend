import React from "react"
import ReactHTMLParser from "react-html-parser"

import leaves from "../images/leaves.mp4"
import styled from "styled-components"
import Carousel from "./Carousel"

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
          <source src={leaves} type="video/mp4" />
        </video>
      </Container>
      <Carousel />
    </>
  )
}
