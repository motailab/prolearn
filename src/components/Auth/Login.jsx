import React from 'react';
import logo from '../../assets/images/logo.svg';

function Login() {

    return (
        <div className="login-area">
             <div className="access_inner_wrap">
                 <h1>Get started now!</h1>
                 <form action="" method="get">
                     <div className="logo">
                         <img src={logo} alt=""/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="">Email:</label>
                         <input type="text" placeholder="jackchu.yw@inmarch.co" className="form-control"/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="">Password:</label>
                         <input type="password" placeholder="&#8226;  &#8226; &#8226; &#8226; &#8226; &#8226;" className="form-control"/>
                     </div>
                     <div className="w-100 text-center">
                         <button type="submit" className="btn btn-info">Sign in</button>
                     </div>
                 </form>
             </div>
        </div>
    )
}

export default Login;