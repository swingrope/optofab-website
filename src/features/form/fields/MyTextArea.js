import React from "react";
import styled from "styled-components";
import { useField } from "formik";

export const MyTextArea = ({ label, labelClass, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={labelClass}>
        {label}
        <br />
        <InputArea {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const InputArea = styled.textarea`
  display: block;
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  /* background: transparent; */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  /* get rid of input border */
  border: 0;
  /* no border highlight when typing */
  outline: none;
  max-width: 750px;
  width: 95%;
  padding: 6px;
  resize: none;
  margin: 10px 0;
  padding: 10px;
`;
