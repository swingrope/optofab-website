import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"

const RequestPage = () => (
  <>
    <Layout>
      <Wrapper>
        <ContentWrapper></ContentWrapper>
      </Wrapper>
    </Layout>
  </>
)

export default RequestPage

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
