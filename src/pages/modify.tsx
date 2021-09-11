import React, { useRef, useState } from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { SmallText } from "../components/styles/TextStyles";
import SubmitButton from "../components/buttons/SubmitButton";
import getFirebase from "../utils/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UploadButton from "../components/buttons/UploadButton";
import sendEmail from "../utils/sendEmail";

type Inputs = {
  orderNo: string;
  description: string;
};

const ModifyPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const refCustom = useRef(null);
  const firebase = getFirebase();
  const [fileUrl, setFileUrl] = useState(null);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const orderMsg = "Order No.: " + data["orderNo"] + "<br/>";
    const descriptMsg = "Details: " + data["description"] + "<br/>";
    let fileMsg = "";
    if (fileUrl) {
      fileMsg += "File uploaded: " + fileUrl;
    }
    const message = orderMsg + descriptMsg + fileMsg;
    console.log(message);

    sendEmail("OptoFab ACT", "Dear Customer", "tianwu.too@gmail.com", message);
  };

  console.log(watch("orderNo"), watch("description"));

  const handleClick = () => {
    if (refCustom) {
      return refCustom.current?.click();
    }
  };

  const handleUpload = async (event) => {
    // console.log(event);

    if (!firebase) return;
    const uploadedFile = event?.target.files[0];
    // console.log(uploadedFile);
    if (!uploadedFile) return;
    const storage = getStorage(firebase);
    // const storageRef = storage.ref("modifiedFiles");
    const storageRef = ref(storage, uploadedFile.name);
    try {
      // await storageRef.child(uploadedFile.name).put(uploadedFile);
      await uploadBytes(storageRef, uploadedFile).then((snapshot) => {
        console.log("Uploaded from file");
      });
      setFileUrl(await getDownloadURL(storageRef));
      console.log(fileUrl);

      alert("Uploaded!");
    } catch (error) {
      console.log("errors: ", error);
    }
  };

  return (
    <>
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FieldRequiredWrapper>
                <OrderNoWrapper>
                  <img src="/images/smallicons/billing.svg" />
                  <InputOrder
                    {...register("orderNo", { required: true })}
                    placeholder="Order No."
                  />
                </OrderNoWrapper>
                {(errors.orderNo || errors.description) && (
                  <ErrorMsg>Field Required</ErrorMsg>
                )}
              </FieldRequiredWrapper>
              <FieldRequiredWrapper>
                <DescriptionWrapper>
                  <img src="/images/smallicons/courses.svg" />
                  <InputDescription
                    {...register("description", { required: true })}
                    placeholder="Description"
                  />
                </DescriptionWrapper>
                {(errors.orderNo || errors.description) && (
                  <ErrorMsg>Field Required</ErrorMsg>
                )}
              </FieldRequiredWrapper>
              {/* <UploadWrapper>
                <img src="/images/smallicons/link.svg" />
                <UploadFile ref={ref} type="file" accept=".jpg, .png" hidden />
              </UploadWrapper> */}
              <UploadFile
                ref={refCustom}
                onChange={handleUpload}
                type="file"
                accept=".jpg, .png"
                hidden
              />
              <UploadButtonWrapper>
                <UploadButton
                  onClick={() => handleClick()}
                  title="UPLOAD FILE HERE"
                />
                <SubmitButton title="Submit" />
              </UploadButtonWrapper>
            </Form>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    </>
  );
};

export default ModifyPage;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
  display: grid;
  place-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const Form = styled.form`
  display: grid;
  gap: 30px;
  justify-items: center;
`;

const OrderNoWrapper = styled.div`
  display: grid;
  grid-template-columns: 28px auto;
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

  width: 720px;
  height: 300px;

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

const ErrorMsg = styled(SmallText)`
  color: red;
  opacity: 0.5;
`;

const UploadWrapper = styled.div`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 28px auto;
  padding: 10px;

  width: 720px;

  border-radius: 30px;
`;

const InputOrder = styled.input`
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  /* get rid of input border */
  border: 0;
  /* no border highlight when typing */
  outline: none;
`;

const InputDescription = styled.textarea`
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  /* get rid of input border */
  border: 0;
  /* no border highlight when typing */
  outline: none;
`;

const UploadFile = styled.input`
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  /* get rid of input border */
  border: 0;
  /* no border highlight when typing */
  outline: none;
`;

const FieldRequiredWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 30px;
  gap: 10px;
`;

const UploadButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 30px;
`;
