import React, { useEffect, useState } from 'react'
import { signInBo } from '../common/apiServices/authService'
import { setLocalStorage } from './../common/helpers/authHelper';
import { useNavigate } from 'react-router-dom';

export default function Login1() {
    const [userLogin,setUserLogin] = useState({
        login: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleChangeLogin = (event) => {
     setUserLogin({...userLogin,login: event.target.value})
    }
    const handleChangePassword = (event) => {
     setUserLogin({...userLogin,password: event.target.value})
    }
     useEffect(() => {
        fetch('http://localhost:5000/test').then((res) => console.log(res))
     },[])

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        signInBo(userLogin)
         .then((res) => res.json())
         .then((json) => {
            setLocalStorage(json);
            navigate('/dashboard')
         })
         .catch((err) => console.log(err))
    }
  return (
    <div className='bg-light' style={{height: '500px'}}>
     <div style={{paddingTop: '200px', paddingLeft: '400px'}}>
     <form onSubmit={handleLoginSubmit} style={{width: '400px'}}>
      <div className="form-group">
        <label htmlFor="email" style={{
            fontFamily: 'serif',
            fontSize: 20,
            fontWeight: 500,
            cursor: 'pointer'
        }}>Login :</label>
        <input type="text" required className='form-control' 
               id="login" name="login" 
               onChange={handleChangeLogin}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" style={{
            fontFamily: 'serif',
            fontSize: 20,
            fontWeight: 500,
            cursor: 'pointer'
        }}>Password :</label>
        <input type="password" required className='form-control' 
               id="password" name="password" 
               onChange={handleChangePassword}
        />
      </div>
      <div style={{ display:'flex', justifyContent:'center'}}>
       <button className='btn btn-warning' type="submit">Login</button>
      </div>
    </form>
     </div>
    </div>
  )
}
