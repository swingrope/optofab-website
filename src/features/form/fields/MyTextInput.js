import React from "react";
import styled from "styled-components";
import { useField } from "formik";

export const MyTextInput = ({ label, labelClass, br = true, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={labelClass}>
        {label}
        {/* <input {...field} {...props} /> */}
        <Input {...field} {...props} placeholder="Type in order number here" />

        {br && <br />}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

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
