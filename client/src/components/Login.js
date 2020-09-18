
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";


const Login = () => {

  const credentials = {username: "", password: "", error: ""}
  const [state, setState] = useState(credentials);
  const { push } = useHistory();

  const handleChanges = e => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value});
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", state)
      .then(res => {
        console.log("POST res: ",res);
        localStorage.setItem("token", res.data.payload);
        push("/protected");
      })
      .catch(err =>  { 
        console.log(err);
        this.setState({error: "Invalid Username"})
      });
  };

  return (
    <div>
      <div className="form">
          <form onSubmit={login}>
            <input
              type="text"
              name="username"
              placeholder="LambdaSchool"
              value={state.username}
              onChange={handleChanges}
            />
            <input
              type="password"
              name="password"
              placeholder="i<3Lambd4"
              value={state.password}
              onChange={handleChanges}
            />
            <button>Log in</button>
          </form>
          <p style={{ color: "red" }}>{state.error}</p>
        </div>
      </div>
  );
};	

export default Login;