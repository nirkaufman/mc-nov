import React from 'react';
import {Link} from 'react-router-dom';
import Form from "../shared/Form";
import Input from "../shared/Input";
import {useAuth} from "../../hooks/useAuth";


const Login = () => {
  const {signIn} = useAuth();

  return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={signIn}>

          <Input label='Email' name='email' />
          <Input label='Confirm Email' name='confirmEmail' />
          <Input label='Password' name='password' />

          <button type="submit" >sign in</button>

        </Form>

        <Link to={'/register'}>Register</Link>
      </div>
  );
};

export default Login;
