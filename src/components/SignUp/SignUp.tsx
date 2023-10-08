import { Button } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import FormInput from "../FormInput/FormInput";
import Notification, {
  defaultNotification,
} from "../Notification/Notification";

interface Form {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultForm: Form = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [form, setForm] = useState(defaultForm);
  const [notification, setNotification] = useState(defaultNotification);

  const { displayName, email, password, confirmPassword } = form;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(defaultForm);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      //validation
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (response) {
        await createUserDocumentFromAuth({ ...response.user, displayName });
        resetForm();
        setNotification({
          open: true,
          severity: "success",
          message: "User created",
          onClose: () => {
            setNotification(defaultNotification);
          },
        });
      }
    } catch (e: any) {
      if (e.code === "auth/email-already-in-use") {
        setNotification({
          open: true,
          severity: "error",
          message: "Can not create user: email already in use",
          onClose: () => {
            setNotification(defaultNotification);
          },
        });
      }

      setNotification({
        open: true,
        severity: "error",
        message: `Sign up failed: ${e.code}`,
        onClose: () => {
          setNotification(defaultNotification);
        },
      });

      console.log(e);
    }
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          required
          type="text"
          name="displayName"
          value={displayName}
          changeHandler={handleChange}
        ></FormInput>

        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          changeHandler={handleChange}
        ></FormInput>

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          changeHandler={handleChange}
        ></FormInput>

        <FormInput
          label="Confirm password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          changeHandler={handleChange}
        ></FormInput>

        <Button type="submit">Sign Up</Button>
      </form>
      <Notification {...notification} />
    </div>
  );
};

export default SignUp;
