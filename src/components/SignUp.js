import React from 'react'

 const SignUp = () => {
    return (
        <div className="loginCntnr">
          <div className="baseCntnr">
            <div className="formCntrn">
              <h1>Sign up</h1>
              <form>
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
                    class="fa fa-envelope"
                    aria-hidden="true"
                    style={{ fontSize: "15px" }}
                  ></i>
                  <input type="email" placeholder="Your Email" className="input2" />
                </div>
                <div>
                  <i
                    class="fa fa-lock"
                    aria-hidden="true"
                    style={{ fontSize: "15px" }}
                  ></i>
                  <input type="text" placeholder="Password" className="input3" />
                </div>
                <div>
                  <i
                    class="fa fa-lock"
                    aria-hidden="true"
                    style={{ fontSize: "15px" }}
                  ></i>
                  <input
                    placeholder="Repeat your password"
                    type="text"
                    className="input4"
                  />
                </div>
              
                  <input type="checkbox" className="tc"/>
                  <label>I agree all statements in Terms of service</label>
                  
                  <input type="submit" value={"Register"} className="button"/>
              </form>
            </div>
            <div className="imgCntnr">
              <img
                src={process.env.PUBLIC_URL + "images/signup-image.jpg"}
                alt=""
              />
              <p>I am already member</p>
            </div>
          </div>
        </div>
      );
}

export default SignUp;