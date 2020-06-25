import React from 'react';
import logo from '../../assets/images/logo.svg';

function Login({onVerify, onChangeOtp}) {

    return (
        <form>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="alert alert-success text-center" style={{fontSize: "12px"}}>We Have Sent OTP to Your Email. Please enter the OTP in 3 minutes</div>
            {/* <div className="alert alert-success text-center" style={{fontSize: "12px"}}>We Have Sent OTP to Your Phone. Please enter the OTP in 3 minutes</div> */}
            <div className="form-group">
                <label htmlFor="otp">One Time Password</label>
                <input type="text" placeholder="Please Type OTP here..." className="form-control" name="otp" id="otp" onChange={e => onChangeOtp(e.target.value)} required />
            </div>
            <div className="w-100 text-center">
                <button type="submit" className="btn btn-info" onClick={onVerify}>Sign in</button>
            </div>
        </form>
    )
}

export default Login;