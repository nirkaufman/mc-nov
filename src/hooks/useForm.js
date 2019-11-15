import {useState} from 'react';

export function useForm(submitHandler) {
  const [formData, setFormData] = useState(null);

  const updateField = ({target}) => {
    setFormData(currentFormData => ({
      ...currentFormData,
      [target.name]: target.value
    }))
  };

  const submitForm = (event) => {
    event.preventDefault();
    submitHandler(formData)
  };

  return {formData, updateField, submitForm};
}
