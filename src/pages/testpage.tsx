import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

import Layout from "../components/layout/layout";
import SideFormTest from "../components/forms/SideFormTest";
import DropdownTest from "../components/forms/DropdownTest";
import BasicInputTest from "../components/forms/BasicInputTest";
import ClickButtonTest from "../components/buttons/ClickButtonTest";

const testpage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <h1>Hi from the test page</h1>
          <p>Welcome to test</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Input 1:</label>
            <input {...register("input1", { required: true })} type="text" />
            <br />
            <label>Input 2:</label>
            <BasicInputTest
              {...register("input2", { required: true })}
              type="text"
            />

            <SideFormTest
              descriptionLabel="D"
              description="descript"
              reg={register}
              req="true"
            />
            <DropdownTest name="dropdown" option1="hi" option2="hello" />
            <ClickButtonTest title="Click" type="submit" />
          </form>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default testpage;

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
