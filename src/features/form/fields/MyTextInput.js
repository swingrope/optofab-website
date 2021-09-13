import React from 'react';
import { useField } from 'formik';

export const MyTextInput = ({ label, labelClass, br = true, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={labelClass}>
        {label}
        <input {...field} {...props} />
        {br && (
          <br />
          )}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};