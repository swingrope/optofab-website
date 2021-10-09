import { Formik, Form } from "formik";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MyTextArea } from "./fields/MyTextArea";
import { MyTextInput } from "./fields/MyTextInput";
import { postData } from "./Feedback";
import Layout from "../../components/layout/layout";
import SubmitButton from "../../components/buttons/SubmitButton";
import WaveBackgound2 from "../../components/backgrounds/WaveBackground2";
import { createBrowserHistory } from "history";

// #BUG1: Submit function

export default function Modify() {
  function modifyFileUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let fileType = file.name.substring(
      file.name.indexOf(".") + 1,
      file.name.length
    );
    if (
      fileType !== "png" &&
      fileType !== "pdf" &&
      fileType !== "PNG" &&
      fileType !== "PDF"
    ) {
      alert("Please upload PDF or PNG file");
      e.target.value = "";
    } else {
      const formdata = new FormData();
      formdata.append("file", file);
      const url =
        "http://localhost:8080/comp8715/optofab-website/backend/api/Attachment";
      fetch(url, {
        method: "POST",
        body: formdata,
      })
        .then((res) => {
          console.log(res.status);
          alert("uploaded successfully");
        })
        .catch(() => {
          alert("upload failed");
        });
    }
  }

  const refUpload = useRef(null);

  const handleClick = () => {
    if (refUpload) {
      return refUpload.current?.click();
    }
  };

  return (
    <Layout>
      <Wrapper>
        <WaveBackgound2 />
        <ContentWrapper>
          <Formik
            initialValues={{
              ordernum: "",
              Modification: "",
            }}
            onSubmit={async (values) => {
              postData("http://localhost:8080/comp8715/optofab-website/backend/api/Modification", values)
                .then((res) => {
                  if (res.status === 200) {
                    //console.log(res.status);
                    const history = createBrowserHistory();
                    history.push("success-modify");
                    window.location.reload();
                  }
                })
                .catch(() => {
                  const history = createBrowserHistory();
                  history.push("error-submit");
                  window.location.reload();
                });
            }}
          >
            <Form>
              <FormItemWrapper>
                <OrderNoWrapper>
                  <img src="/images/smallicons/billing.svg" />
                  <MyTextInput
                    //   label="Order number:"
                    label=""
                    name="ordernum"
                    id="ordernum"
                    placeholder="Order number"
                  />
                </OrderNoWrapper>
                <DescriptionWrapper>
                  <img src="/images/smallicons/courses.svg" />
                  <MyTextArea
                    //   label="Please describe what kind of modification you want to make:"
                    label=""
                    id="Modification"
                    name="Modification"
                    placeholder="Please type in modifications here"
                    rows={12}
                    cols={100}
                  />
                </DescriptionWrapper>
                <input
                  type="file"
                  name="description"
                  accept="image/png,application/pdf"
                  onChange={modifyFileUpload}
                  ref={refUpload}
                  hidden
                />
                <UploadButtonWrapper>
                  <UploadButton
                    type="button"
                    onClick={handleClick}
                    value="Upload files (png, pdf)"
                  />
                  {/* <button type="submit">Submit</button> */}
                  <SubmitButton title="Submit" />
                </UploadButtonWrapper>
              </FormItemWrapper>
            </Form>
          </Formik>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  /* background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%); */
  /* display: grid;
  place-items: center; */
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const OrderNoWrapper = styled.div`
  display: grid;
  grid-template-columns: 28px auto;
  align-items: center;
  padding: 10px;
  width: 360px;
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  /* drop shadow combo 1 */
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;
`;

const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 28px auto;
  padding: 10px;
  width: 680px;
  height: 320px;
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;

const FormItemWrapper = styled.div`
  display: grid;
  gap: 30px;
  justify-items: center;
`;

const UploadButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 30px;
`;

const UploadButton = styled.input`
  /* background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%); */
  background: transparent;
  margin: 10px;
  padding: 12px 24px;
  max-width: 400px;
  /* border: none; */
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  border: 1px solid #000000;
  text-align: center;
  /* box-sizing: border-box; */

  & {
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  :focus {
    outline: none;
  }
  :hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transform: scale(1.05);
  }
`;
