import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import USPlogo from '../assets/USPlogo.jpg';

const LandingPage = () => {
  // State to handle popup visibility and form input values
  const [isPopupVisible, setIsPopupVisible] = useState(false); // OTP popup visibility
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false); // Login popup visibility
  const [otpCode, setOtpCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSignUpClick = () => {
    setIsPopupVisible(true);
  };

  const handleLoginClick = () => {
    setIsLoginPopupVisible(true); 
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setIsLoginPopupVisible(false); 
  };

  const handleOtpChange = (event) => {
    setOtpCode(event.target.value); 
  };

  const handleLoginEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setPassword(event.target.value); // Update password in state
  };

  const handleSubmitOtp = () => {
    // Logic to verify OTP or handle submission
    alert(`OTP Entered: ${otpCode}`);
    setIsPopupVisible(false); // Close the OTP popup
  };

  const handleSubmitLogin = () => {
    // Logic to handle login submission
    alert(`Email: ${email}, Password: ${password}`);
    setIsLoginPopupVisible(false); // Close the login popup
  };

  const handleForgotPasswordClick = () => {
    setForgotPassword(true); // Display forgot password functionality
  };

  const handleResetPassword = () => {
    alert('Password reset link sent!');
    setForgotPassword(false); // Close forgot password view
  };

  return (
    <div className="landing-page">
      <header className="header">
        <img src={USPlogo} alt="Logo" className="USPlogo" />
      </header>
      <div className="content">
        <h1>University Student Parliament</h1>
        <p>One-Stop Student Organization</p>
        <div className="buttons">
          <button className="btn signup-btn" onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className="btn login-btn" onClick={handleLoginClick}>
            Log In
          </button>
        </div>
      </div>

      {/* Popup for OTP */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Email Verification</h2>
            <input
              type="text"
              className="otp-input"
              placeholder="Enter the OTP Code"
              value={otpCode}
              onChange={handleOtpChange}
            />
            <div className="popup-buttons">
              <Link to ='/UserDashboard'>
              <button className="btn" onClick={handleSubmitOtp}>
                Sign In
              </button>
              </Link>
              <button className="btn close-btn" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup for Login */}
      {isLoginPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Log In to your Account</h2>
            {!forgotPassword ? (
              <>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleLoginEmailChange}
                /><br />
                <input
                  type="password"
                  className="password-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleLoginPasswordChange}
                />
                <div className="popup-buttons">
                <Link to="/dashboard"> 
                  <button className="btn" onClick={handleSubmitLogin}>
                    Log In
                  </button>
                </Link>  
                  <button className="btn close-btn" onClick={handleClosePopup}>
                    Close
                  </button>
                </div>
                <br />
                <div className="forgot-password">
                  <span onClick={handleForgotPasswordClick} className="forgot-password-link">
                    <h5>Forgot Password?</h5>
                  </span>
                </div>
              </>
            ) : (
              <>
                <h2>Enter your email to reset your password:</h2>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleLoginEmailChange}
                />
                <div className="popup-buttons">
                  <button className="btn" onClick={handleResetPassword}>
                    Send Reset Link
                  </button>
                  <button className="btn close-btn" onClick={() => setForgotPassword(false)}>
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
