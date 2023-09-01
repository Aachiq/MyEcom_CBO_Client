import React, { useState } from 'react'

export default function Login() {
  const [userLogin,setUserLogin] = useState({
    email: '',
    password: ''
  })

  const handleChangeEmail = (event) => {
    // add validation: phone should be 11 numbers
    setUserLogin({...userLogin,email: event.target.value})
  }
  const handleChangePassword = (event) => {
    // add validation: phone should be 11 numbers
    setUserLogin({...userLogin,password: event.target.value})
  }
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // userLoginService(userLogin).then((res) => {
    //   if(!res.error){
    //    setLocalStorage(res);
    //    navigate('/');
    //   }
    // });
  }

  return (
    <div>
      <div className='container mt-4'>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="text" required className='form-control' id="email" name="email" 
                 onChange={handleChangeEmail} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input type="password" required className='form-control' id="password" name="password" 
                 onChange={handleChangePassword} 
          />
        </div>
        <button className='btn btn-secondary' type="submit">Login</button>
      </form>
      </div>
    </div>
  )
}
