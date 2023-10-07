import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };


  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  }

  // As explained in the Login page.
  const onSubmit = async () => {
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      fetch(`http://localhost:5000/api/signup?name=${form.Username}&email=${form.email}&phone=${form.phone}&address=${form.address}&twitter=${form.twitter}&linkedin=${form.linkedin}&github=${form.github}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      })
      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };

  return <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
    <h1>Signup</h1>
    <TextField
      label="Email (required)"
      type="email"
      variant="outlined"
      name="email"
      value={form.email}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Password (required)"
      type="password"
      variant="outlined"
      name="password"
      value={form.password}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Username (required)"
      type="text"
      variant="outlined"
      name="Username"
      value={form.Username}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Phone (required)"
      type="text"
      variant="outlined"
      name="phone"
      value={form.phone}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Address (required)"
      type="text"
      variant="outlined"
      name="address"
      value={form.address}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Twitter"
      type="text"
      variant="outlined"
      name="twitter"
      value={form.twitter}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Linkedin"
      type="text"
      variant="outlined"
      name="linkedin"
      value={form.linkedin}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Github"
      type="text"
      variant="outlined"
      name="github"
      value={form.github}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <br />
    <Button variant="contained" color="primary" onClick={onSubmit}>
      Signup
    </Button>
    <p>Have an account already? <Link to="/login">Login</Link></p>
  </form>
}

export default Signup;