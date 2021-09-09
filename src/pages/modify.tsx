import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { SmallText } from "../components/styles/TextStyles";
import SubmitButton from "../components/buttons/SubmitButton";

type Inputs = {
  orderNo: string;
  description: string;
};

const RequestPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  console.log(watch("orderNo"), watch("description"));

  return (
    <>
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
              <UploadWrapper>
                <img src="/images/smallicons/link.svg" />
                <UploadFile type="file" />
              </UploadWrapper>
              <SubmitButton title="Submit" />
            </Form>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    </>
  );
};

export default RequestPage;

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

const ErrorMsg = styled(SmallText)``;

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
