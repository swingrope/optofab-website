import React from "react";
import styled from "styled-components";
import ButtonComponent from "../buttons/ButtonComponent";
import SubmitButton from "../buttons/SubmitButton";
import { useForm, SubmitHandler } from "react-hook-form";

const SimpleSubmitInput = (props) => {
  const { icon, placeholder, type, reg } = props;
  return (
    <InputForms>
      <SearchInput>
        <Icon src={icon} />
        <OrderForm type={type} placeholder={placeholder}></OrderForm>
      </SearchInput>
      {/* <ButtonComponent title={buttonTitle || "Search"} /> */}
      {/* <SubmitButton title={buttonTitle || "Submit"} /> */}
    </InputForms>
  );
};

export default SimpleSubmitInput;

const InputForms = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 600px;
  height: 44px;
`;

const SearchInput = styled.div`
  /* Auto Layout */
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

const OrderForm = styled.input`
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

const Icon = styled.img``;
