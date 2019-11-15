import React from 'react';
import {useForm} from "../../hooks/useForm";

const Form = ({onSubmit, children}) => {
  const {updateField, submitForm} = useForm(onSubmit);

  return (
      <form onSubmit={submitForm}>
        {children.map( (child, key) => React.cloneElement(child, {updateField, key}) )}
      </form>
  );
};

export default Form;
