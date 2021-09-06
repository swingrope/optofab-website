import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";
import TrackMainBox from "../components/sections/TrackMainBox";

const TrackPage = () => (
  <Layout>
    <Wrapper>
      <ContentWrapper>
        <TrackMainBox />
      </ContentWrapper>
    </Wrapper>
  </Layout>
);

export default TrackPage;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  height: 1080px;
  margin: 0 auto;
  padding: 200px 30px;
`;
