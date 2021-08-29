import React from "react"
import styled from "styled-components"
import RequestButton from "../buttons/RequestButton"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackgound from "../backgrounds/WaveBackgound"

const HeroSection = () => {
  return (
    <Wrapper>
      <WaveBackgound />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Welcome to <br />
            OptoFab Portal Services
          </Title>
          <Description>
            We deliver precision full custom optics, coatings, chips, and
            systems to customer specifications with short lead times and at a
            palatable price to empower researchers, start-ups, and industrial
            users in rapid iterations of experimental setups and/or product
            development cycles. We also aspire to be a focal point for coatings
            expertise, knowledge and information dissemination for the national
            interest.
          </Description>
          <RequestButton title="Make a request" subtitle="free inquiry" />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  /* prevent future mockups of overflowing outside*/
  overflow: hidden;
`

const ContentWrapper = styled.div`
  /* don't use width */
  max-width: 1300px;
  /* normal center trick */
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 540px auto;

  /* for mobile devices of < 450px wide */
  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 540px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(94.87deg, #be1e69 0%, #eb7776 53.11%);
  background-clip: text;
  --webkit-background-clip: text;
  color: transparent;
`

const Description = styled(MediumText)``
