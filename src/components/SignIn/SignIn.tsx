import { Button } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";
import FormInput from "../FormInput/FormInput";
import Notification, {
  defaultNotification,
} from "../Notification/Notification";

interface Form {
  email: string;
  password: string;
}

const defaultForm: Form = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(defaultForm);
  const [notification, setNotification] = useState(defaultNotification);

  const { email, password } = form;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(defaultForm);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (response) {
        resetForm();
        setNotification({
          open: true,
          severity: "success",
          message: "Signed in",
          onClose: () => {
            setNotification(defaultNotification);
          },
        });
      }
    } catch (e: any) {
      setNotification({
        open: true,
        severity: "error",
        message: `Sign in failed: ${e.code}`,
        onClose: () => {
          setNotification(defaultNotification);
        },
      });
      console.log(e);
    }
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
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

        <Button type="submit">Sign In</Button>
      </form>
      <Button type="button" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <Notification {...notification} />
    </div>
  );
};

export default SignIn;
