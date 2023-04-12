import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigate('/dashboard');
  }

  return (
    <>
      <div className="login-wrapper">
        <section className="container-section">
          <div className="container">
            <div className="login-section">
              <div className="images-section">
                <div className="logo-icon ">
                  <img
                    src={require("../assets/icons/logoicon.png")}
                    style={{ height: "25px", width: "24px" }}
                    className="mx-2 "
                  />
                  <img
                    src={require("../assets/icons/logoimg.png")}
                    style={{ height: "36px", width: "136px" }}
                  />
                </div>
                <img src={require("../assets/icons/loginimg1.png")} style={{ width: '600px', height: '337.57px' }} />
              </div>
              <div className="login-form">
                <form className="form-section">
                  <div className="login-fields">
                    <h1 className="lead mb-0 me-3 welcome-heading">Welcome!</h1>
                  </div>
                  <div>
                    <p>Enter details to login.</p>
                  </div>
                  <div className="input-fields-wrapper">
                    <div className="
                    form-controll">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-controll "
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-controll">
                      <input
                        id="password-field"
                        type={showPassword ? "text" : "password"}
                        className="form-controll"
                        name="password"
                        placeholder="Password"
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="field-icon toggle-password"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </span>
                    </div>
                    <div>
                      <div >
                        <a href="" className="Forgot-password">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <div className="login ">
                      <button
                        type="button"
                        className="login-btn btn"
                        onClick={handleLogin}
                      >
                        LOG IN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
