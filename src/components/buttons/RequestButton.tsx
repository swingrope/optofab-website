import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function RequestButton(props) {
  const { title, subtitle } = props
  return (
    <Link to="/request">
      <Wrapper>
        <IconWrapper>
          <Icon
            src="/images/smallicons/credit.svg"
            alt="button icon"
            className="icon"
          />
          <Ring src="/images/smallicons/icon-ring.svg" alt="ring icon" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Request an order"}</Title>
          <Subtitle>{subtitle || "make an inquiry"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  /* set icon and text side by side: display -> grid;
  and set grid-template-columns */
  display: grid;
  /* first column (icon) 53px = 77 - 2 * 12; */
  grid-template-columns: 53px auto;
  /* 1. align-content only aligns when child content is smaller than parent content*/
  /* align-content: center; */
  /* 2. align-items will align multiple (same applies to justify-content and justify-items*/
  align-items: center;
  /* 20px gap between columns */
  gap: 20px;

  /* apply transition to self (&) and child elements (*) */
  *,
  & {
    /* transition, ease in and out/ cubic-bezier.com for more */
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-delay: 0.1s;
  }
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      /* half pixel border: in figma use inner shadow effect to spread 0.5px; in Chrome, if stroke = 0.5px, it won't show */
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    /* animation */
    transform: translateY(-3px) scale(1.05);

    /* corresponds to class name icon */
    .icon {
      transform: scale(1.3);
    }
  }
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  /* opacity applies to all the layers, vs color rgba only applies to text color */
  opacity: 0.7;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`

const Ring = styled.img`
  position: absolute;
  /* why negative? if top: 0; left: 0; it will stick to the right-bottom corner? */
  top: -15px;
  left: -15.6px;

  ${Wrapper}:hover & {
    transform: rotate(10deg) scale(1.1);
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(180deg, #f43b86 0%, rgba(61, 8, 123, 0.7) 100%);
  /* make a circle */
  border-radius: 50%;
  /* css grid to center svg img */
  display: grid;
  justify-content: center;
  align-content: center;
  /* 45px vs 53px of parent assigned width, to center it (self is vs parent wrapper to justify) */
  justify-self: center;
  /* set relative for Ring (absolute) to float */
  position: relative;

  /* in styled component, ${Wrapper} to select parent wrapper (must be declared beforehand) */
  ${Wrapper}:hover & {
    /* filter effects, see:  https://developer.mozilla.org/en-US/docs/Web/CSS/filter */
    filter: hue-rotate(10deg) brightness(120%) saturate(80%);
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`
