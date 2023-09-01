import React from 'react'

export default function Login1() {
  return (
    <div className='bg-light' style={{height: '500px'}}>
     <div style={{paddingTop: '200px', paddingLeft: '400px'}}>
     <form style={{width: '400px'}}>
      <div className="form-group">
        <label htmlFor="email" style={{
            fontFamily: 'serif',
            fontSize: 20,
            fontWeight: 500,
            cursor: 'pointer'
        }}>Email :</label>
        <input type="text" required className='form-control' id="email" name="email" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" style={{
            fontFamily: 'serif',
            fontSize: 20,
            fontWeight: 500,
            cursor: 'pointer'
        }}>Password :</label>
        <input type="password" required className='form-control' id="password" name="password" 
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
