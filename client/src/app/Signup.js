import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import "./Login.css";
import { Button } from "@material-ui/core";
import logo from "../assets/icons/mypost1.png";

function Signup() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const { name, email, password, cnfpassword } = state;
    if (name === "" || email === "" || password === "" || cnfpassword === "")
      setError(true);
    else if (password !== cnfpassword) setError(true);
    else {
      fetch("http://localhost:4000/signup", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Signup Successfull. Try to login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container-box">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="login-box">
        <div className="head-title">Register</div>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          style={{
            justifyContent: "center",
          }}
        >
          <Grid item>
            <PersonIcon
              className={state.name === "" && error ? "error" : null}
            />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="FULL NAME"
              value={state.name}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  name: e.target.value,
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
              className={
                (state.password === "" ||
                  state.cnfpassword !== state.password) &&
                error
                  ? "error"
                  : null
              }
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
              className={
                (state.cnfpassword === "" ||
                  state.cnfpassword !== state.password) &&
                error
                  ? "error"
                  : null
              }
            />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="CONFIRM PASSWORD"
              value={state.cnfpassword}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  cnfpassword: e.target.value,
                }))
              }
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: "0.7em" }} />
        <Button className="mui-btn-login" onClick={handleSubmit}>
          Register
        </Button>
        <div className="footer-tagline">
          Already registered! Go for{" "}
          <a href="/login" alt="go to login">
            <span className="signup-btn">Login</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
