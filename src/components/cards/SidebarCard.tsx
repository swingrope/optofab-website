import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H3, MediumText } from "../styles/TextStyles";

const SidebarCard = (props) => {
  const { title, subtitle, illustration } = props;
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
      <Illustration src={illustration}></Illustration>
    </Wrapper>
  );
};

export default SidebarCard;

const Wrapper = styled.div`
  display: grid;
  width: 480px;
  height: 768px;
  background: #d8ddef;
  border-radius: 20px 0px 0px 20px;
  gap: 30px;
`;

const TextWrapper = styled.div`
  display: grid;
  padding: 30px;
  gap: 30px;
  max-width: 480px;
  height: 200px;
`;

const Title = styled(H3)`
  color: ${themes.dark.text1};
  background: linear-gradient(94.87deg, #be1e69 0%, #eb7776 53.11%);
  background-clip: text;
  --webkit-background-clip: text;
  color: transparent;
  height: 80px;
`;

const Subtitle = styled(MediumText)``;

const Illustration = styled.img`
  width: 360px;
  height: 269.86px;
  margin: 0 auto;
`;
