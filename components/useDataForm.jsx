import { useState } from "react";

function useDataForm() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return { values, handleChange, setValues };
}

export default useDataForm;
