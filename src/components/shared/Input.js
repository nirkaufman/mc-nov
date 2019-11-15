import React from 'react';

const Input = ({type = 'text', name, label, updateField}) => (
    <div>
      <label>{label}</label>
      <input name={name} type={type} onChange={updateField}/>
    </div>
);

export default Input;
