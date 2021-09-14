import React from "react";
import styled from "styled-components";
import { useField } from "formik";

export const MyTextArea = ({ label, labelClass, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={labelClass}>
        {label}
        <InputArea {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const InputArea = styled.textarea`
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  /* get rid of input border */
  border: 0;
  /* no border highlight when typing */
  outline: none;
  max-width: 650px;
`;
