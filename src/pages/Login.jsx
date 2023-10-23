import styled from "styled-components";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  gap: 3.2rem;
  display: grid;
  min-height: 100vh;
  align-content: center;
  justify-content: center;
  grid-template-columns: 48rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
