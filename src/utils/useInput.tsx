import React, { useState } from "react";

const useInput = (v: string) => {
  const [value, setValue] = useState(v);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value: value,
    onChange: handleOnChange,
  };
};

export default useInput;
