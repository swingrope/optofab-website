import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";
import TrackMainBox from "../components/sections/TrackMainBox";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "../components/buttons/SubmitButton";
import SimpleSubmitInput from "../components/forms/SimpleSubmitForm";
import { MediumText, SmallText } from "../components/styles/TextStyles";

type Inputs = {
  orderNo: string;
};

const TrackPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log("Errors: ", errors);
  };

  console.log(watch("orderNo"));

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <Icon src="/images/smallicons/chat.svg" />
              <Input
                {...register("orderNo", { required: true })}
                placeholder="Order Number here"
              />
            </InputWrapper>
            {errors.orderNo && <ErrorMsg>Field Required</ErrorMsg>}
            <SubmitButton title="Submit" />
            {/* <input type="submit" value="submit" /> */}
          </Form>
          {/* <TrackMainBox /> */}
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default TrackPage;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
  display: grid;
  place-items: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  height: 1080px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 380px 60px auto;
  align-items: center;
`;

const ErrorMsg = styled(SmallText)`
  position: absolute;
  left: -80px;
  top: 215px;
  color: red;
  opacity: 0.7;
`;

const Icon = styled.img``;

const InputWrapper = styled.div`
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

const Input = styled.input`
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
