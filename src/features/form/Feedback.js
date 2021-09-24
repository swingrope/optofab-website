import { Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout/layout";
import SidebarCard from "../../components/cards/SidebarCard";
import { MyTextArea } from "./fields/MyTextArea";
import SubmitButton from "../../components/buttons/SubmitButton";
import {createBrowserHistory} from "history";

export async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}

export default function Feedback() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <LeftSidebarWrapper>
            <SidebarCard
              title="Feel free to drop us a line and give us your feedback"
              subtitle="We are looking forward to hearing back from you"
              illustration="/images/illustrations/computer-feedback.svg"
            />
          </LeftSidebarWrapper>
          <FeedbackWrapper>
            <Formik
              initialValues={{
                feedback: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                //postData("http://localhost:8080/comp8715/optofab-website/src/api/Feedback.php", values)
                postData("http://localhost:8080/comp8715/optofab-website/backend/api/Feedback", values)
                  // .then((res) => {
                  //   console.log(res.status);
                  //   if(res.status==200) {
                  //     const history = createBrowserHistory();
                  //     history.push('success-feedback');
                  //     window.location.reload();
                  //   }
                  // })
                  // .catch(() => {
                  //   const history = createBrowserHistory();
                  //   history.push('error-submit');
                  //   window.location.reload();
                  // });
              }}
            >
              <Form>
                <TextareaWrapper>
                  <img src="/images/smallicons/chat.svg" />
                  <MyTextArea
                    //   label="Please send us any feedback:"
                    label=""
                    id="feedback-editor"
                    name="feedback"
                    placeholder="Please type in here"
                    rows={26}
                    cols={60}
                  />
                </TextareaWrapper>
                {/* <button type="submit" value="Submit">Submit</button> */}
                <SubmitInfoWrapper>
                  <SubmitButton value="Submit" title="Submit" />
                </SubmitInfoWrapper>
              </Form>
            </Formik>
          </FeedbackWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(120deg, #150050 0%, #eb7776 100%);
`;

const ContentWrapper = styled.div`
  /* position: relative; */
  display: grid;
  grid-template-columns: 480px auto;
  max-width: 1234px;
  height: 1080px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const LeftSidebarWrapper = styled.div`
  /* position: absolute; */
  /* left: 70px;
  top: 166px; */
`;

const FeedbackWrapper = styled.div`
  display: grid;
  /* place-items: center; */
  gap: 30px;
  max-width: 800px;
  height: 768px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 0px 20px 20px 0px;
`;

const TextareaWrapper = styled.div`
  display: grid;
  max-height: 600px;
  /* max-width: 800px; */
  grid-template-columns: 28px auto;
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  padding: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;

const SubmitInfoWrapper = styled.div`
  display: grid;
  justify-items: right;
  margin: 20px 0;
`;
