import LoginForm from "components/forms/LoginForm";
import PageHeading from "components/PageHeading";
import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <>
      <PageHeading title="Login" />
      <LoginForm />
    </>
  );
};

export default Login;
