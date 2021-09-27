import React from "react";
import styled from "styled-components";
import { useField } from "formik";

export const MyTextInputForm = ({
  label,
  labelClass,
  br = true,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>
      <TextPlusInputWrapper>
        <Label className={labelClass}>{label}</Label>
        <InputWrapper>
          <Input
            {...field}
            {...props}
            placeholder={placeholder}
            maxlength="256"
            size="40"
          />
        </InputWrapper>
      </TextPlusInputWrapper>

      {br && <br />}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline;
  margin: 10px 0;
`;

const Input = styled.input`
  font-size: 16px;
  line-height: 130%;
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
  background: transparent;
  /* get rid of input border */
  border: 0;
  /* no border highlight when typing */
  outline: none;
`;

const InputWrapper = styled.div`
  display: inline;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 5px;
`;

const TextPlusInputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) minmax(150px, 50%);
  gap: 5px;
  align-items: center;
`;

const Label = styled.label`
  margin: 0px 30px 0px 0px;
  font-weight: 500;
  font-size: 17px;
  line-height: 130%;
  /* text-transform: uppercase; */
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0px 10px 25px rgba(0, 0, 0, 0.8);
`;
