import React from 'react';
import {useForm} from "../../hooks/useForm";


const Register = () => {
  const {formData: newUser, updateField} = useForm();

  const register = (event) => {
    event.preventDefault();
    console.log(newUser);
  };

  return (
      <div>
        <h1>Register</h1>
        <form onSubmit={register}>

          <div>
            <label>Name</label>
            <input name="name" type="text" onChange={updateField}/>
          </div>

          <div>
            <label>Email</label>
            <input name="email" type="text" onChange={updateField}/>
          </div>

          <div>
            <label>Password</label>
            <input name="password" type="Password" onChange={updateField}/>
          </div>

          <button type="submit" >sign in</button>

        </form>

      </div>
  );
};

export default Register;
