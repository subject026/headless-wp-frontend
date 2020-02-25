import React from "react"
import styled, { css } from "styled-components"
import { Transition, TransitionGroup } from "react-transition-group"

export default () => {
  const slides = [
    {
      name: "Daniel Morgan",
      text:
        "I had an amazing full day of coaching with these guys and they really know their stuff! Completely blown away by their depth of knowldge and ability to put it across clearly and into actionable steps to move forward. Unlike any other coaching I've had and I've been obsessed with this stuff for a decade. Highly recommended. 5*.",
    },
    {
      name: "Andy Foster",
      text:
        "We were going through a rough time and were blessed and most appreciative of the wonderful assistance from Matt and Rebeca - so much respect and understanding, helping us to understand the true way of life and showing us the best way to deal with things. We could not be thinking the way we do without these insights. Many thanks and we love you guys so much!",
    },
    {
      name: "Stephen Karbaron",
      text:
        "Thank you Matt & Rebeca for your time, energy and expertise! They get to the point and bring new awareness that allows action to be taken. I really enjoyed our day together and look forward to seeing positive results!",
    },
  ]
  const [currentSlide, setcurrentSlide] = React.useState(0)

  const nextSlide = () => {
    // console.log(currentSlide);
    const nextSlide =
      currentSlide + 1 > slides.length - 1 ? 0 : currentSlide + 1
    // console.log(nextSlide);
    setcurrentSlide(nextSlide)
  }

  useInterval(nextSlide, 4000)
  return (
    <CarouselContainer>
      <TransitionGroup>
        <Transition key={currentSlide} timeout={800}>
          {state => {
            const { text, name } = slides[currentSlide]
            return (
              <CarouselItem state={state}>
                <TestimonialTextContainer>
                  <TestimonialText>{text}</TestimonialText>
                </TestimonialTextContainer>
                <ClientNameContainer>
                  <ClientName>{name}</ClientName>
                </ClientNameContainer>
              </CarouselItem>
            )
          }}
        </Transition>
      </TransitionGroup>
    </CarouselContainer>
  )
}

function useInterval(callback, delay) {
  const savedCallback = React.useRef()

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export const CarouselContainer = styled.section`
  height: 300px;
  padding: 15px;
`

export const CarouselItem = styled.article`
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  opacity: 0;
  transition: opacity 300ms ease-in;
  ${({ state }) => {
    switch (state) {
      case "entering":
        return css`
          opacity: 0;
        `
      case "entered":
        return css`
          opacity: 1;
        `
      case "exiting":
        return css`
          transition-delay: 300ms;
          transition-property: opacity;
          opacity: 0;
        `
      case "exited":
        return css`
          opacity: 0;
        `
      default:
        return null
    }
  }}
`

const TestimonialTextContainer = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ClientNameContainer = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TestimonialText = styled.figure``

const ClientName = styled.figure``
