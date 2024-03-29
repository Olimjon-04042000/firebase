import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate=useNavigate();

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, password, passwordConfirm } = values;
    if (!email) {
      alert("Provide email");
      return;
    }
    if (!password) {
      alert("Provide password");
      return;
    }
    if (!passwordConfirm) {
      alert("Provide passwordConfirm");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Password should match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/");

      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h2 className="text-center ">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center"
      >
        <label htmlFor="email">Enter your email</label>  <br />
        <input
          onChange={handleChange}
          name="email"
          id="email"
          placeholder="Email"
          type="text"
        />
        <br /><br />
        <label htmlFor="password">Enter your password</label> <br />
        <input
          onChange={handleChange}
          name="password"
          id="password"
          type="password"
        /> <br /> <br />
        <label htmlFor="confirm">Confirm your password</label> <br />
        <input
          onChange={handleChange}
          name="passwordConfirm"
          id="confirm"
          type="password"
        /> <br /><br />
        <button className="border-2">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
