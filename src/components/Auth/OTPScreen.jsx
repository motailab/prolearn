import React from 'react';
import logo from '../../assets/images/logo.svg';

function Login({onVerify, onChangeOtp}) {

    return (
        <form>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="alert alert-success">We Have Sent OTP to Your Phone/Email</div>
            <div className="form-group">
                <label htmlFor="otp">OTP</label>
                <input type="text" placeholder="Please Type OTP here..." className="form-control" name="otp" id="otp" onChange={e => onChangeOtp(e.target.value)} />
            </div>
            <div className="w-100 text-center">
                <button type="submit" className="btn btn-info" onClick={onVerify}>Sign in</button>
            </div>
        </form>
    )
}

export default Login;