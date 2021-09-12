import React from 'react';
import { useField } from 'formik';

export const MyTextArea = ({ label, labelClass, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={labelClass}>
        {label}
        <br />
        <br />
        <textarea {...field} {...props} />
        <br />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};