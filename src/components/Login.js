import React from "react";

const Login = () => {
  return (
    <div className="loginCntnr">
      <div className="baseCntnr">
        <div className="imgCntnr ">
          <img
            src={process.env.PUBLIC_URL + "images/signin-image.jpg"}
            alt=""
          />
          <p className="create">Create an account</p>
        </div>
        <div className="login">
          <h1>Log In</h1>
          <form className="loginform">
            <div>
              <i
                class="fa fa-user"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <input type="text" placeholder="Your Name" className="input1" />
            </div>

            <div>
              <i
                class="fa fa-lock"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <input type="text" placeholder="Password" className="input3" />
            </div>

            <input type="checkbox" className="remember" />
            <label>Remember me</label>

            <input type="submit" value={"Log in"} className="button" />
          </form>
          <div className="orloginoptions">
            <p>Or login with</p>
            <div>
              <a href="https://www.facebook.com/">
                {" "}
                <i className="fa fa-facebook-square fb" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F">
                <i
                  className="fa fa-twitter-square twitter"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://www.google.com/">
                <i
                  className="fa fa-google-plus-square google"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
