import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { register } from "../../actions/actions";
import { Container } from "./Elements";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
    name: "",
  });
  const handleRegister = async () => {
    const { email, password, passwordRepeat, name } = data;
    if (email && password && password === passwordRepeat) {
      await register({ email, password, name });
    }
  };
  return (
    <Container>
      <TextField
        type="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder="Email"
      />
      <TextField
        type="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
        placeholder="Password"
      />
      <TextField
        type="password"
        onChange={(e) => setData({ ...data, passwordRepeat: e.target.value })}
        placeholder="Repeat password"
      />
      <TextField
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Name"
      />

      <Button onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default Login;
