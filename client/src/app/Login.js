import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";
import logo from "../assets/icons/mypost1.png";
import { useHistory } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [{ user }, dispatch] = useStateValue();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    const { email, password } = state;
    if (email === "" || password === "") setError(true);
    else {
      await fetch("http://localhost:4000/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_USER",
            user: data.result,
          });
          history.push("/");
        })
        .catch((err) => {
          console.log("check", err);
        });
    }
  };

  return (
    <div className="container-box">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="login-box">
        <div className="head-title">Login</div>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          style={{
            justifyContent: "center",
          }}
        >
          <Grid item>
            <EmailIcon
              className={state.email === "" && error ? "error" : null}
            />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="EMAIL"
              value={state.email}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: "0.7em" }} />
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          style={{
            justifyContent: "center",
          }}
        >
          <Grid item>
            <LockIcon
              className={state.password === "" && error ? "error" : null}
            />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="PASSWORD"
              value={state.password}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </Grid>
        </Grid>
        <Button className="mui-btn-login" onClick={handleLogin}>
          Login
        </Button>
        <div className="footer-tagline">
          New here! Go for{" "}
          <a href="/signup" alt="go for signup">
            <span className="signup-btn">SignUp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
