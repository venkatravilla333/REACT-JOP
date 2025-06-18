import React from 'react';

function Login({setLogin, login}) {
  return (
    <div>
      <h3>Login</h3>
      <form>
        <div>
          <label htmlFor=''>Email</label>
          <input type='email' />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input type='password' />
        </div>
        <button onClick={()=>setLogin(!login)}>Login</button>
      </form>
    </div>
  );
}

export default Login;

