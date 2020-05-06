import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import OTPScreen from './OTPScreen';

function LoginScreen() {
    const [showOTPScreen, setShowOTPScreen] = useState(false);
    const [OTP, setOTP] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const history = useHistory();

    const sendOTP = (e) => {
        e.preventDefault();

        //validate email or phone number here 
        //and process otp sending action

        setShowOTPScreen(true);
    }

    const verifyOTP = (e) => {
        e.preventDefault();
        //verify user typed otp here and 
        //process authentication and redirection
        console.log(OTP);
        history.replace('/prolearn');
    }

    return (
        <div className="login-area">
             <div className="access_inner_wrap">
                 <h1>Get started now!</h1>
                 {
                    showOTPScreen ? <OTPScreen onVerify={verifyOTP}  onChangeOtp={setOTP}/> :
                    <form>
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email_or_phone">Email/Phone</label>
                            <input type="text" placeholder="email or phone" className="form-control" id="email_or_phone" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)}/>
                        </div>
                        <div className="w-100 text-center">
                            <button type="submit" className="btn btn-info" onClick={sendOTP}>Get OTP</button>
                        </div>
                    </form>
                 }
             </div>
        </div>
    )
}

export default LoginScreen;