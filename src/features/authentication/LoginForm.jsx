import { useState } from "react";
import { useLogin } from "./useLogin";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";

// import FormRowVertical from "../../ui/FormRowVertical";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow title="test@test.com" label="Email address">
        <Input
          title="test@test.com"
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow title="12345678" label="Password">
        <Input
          title="12345678"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Button size="large">{!isLoading ? "Login" : <SpinnerMini />}</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
