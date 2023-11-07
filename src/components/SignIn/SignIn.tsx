import { Button } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";
import FormInput from "../FormInput/FormInput";
import Notification, {
  defaultNotification,
} from "../Notification/Notification";
import * as S from "./SignIn.styled";

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
  const navigate = useNavigate();

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
        navigate("/");
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
    }
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.SignIn>
      <h3>Sign In</h3>
      <S.SignInForm onSubmit={handleSubmit}>
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

        <S.SignInButton type="submit">Sign In</S.SignInButton>
      </S.SignInForm>
      <Button type="button" onClick={logGoogleUser}>
        Sign in with <S.Google />
        oogle
      </Button>
      <Notification {...notification} />
    </S.SignIn>
  );
};

export default SignIn;
