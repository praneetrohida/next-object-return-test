import { NextPage } from 'next';
import { useState } from 'react';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log('Submitting form');
  }

  return <>
    <form onSubmit={submit}>
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" value={email}/>
      <input type="email" onChange={e => setPassword(e.target.value)} placeholder="Password" value={password}/>
      <input type="submit" value="Login"/>
    </form>
  </>
}

export default Login
