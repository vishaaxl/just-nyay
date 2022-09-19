import type { NextPage } from "next";

import LoginForm from "components/consultation-form/LoginForm";
import PageHeading from "components/page-heading/PageHeading";

const index: NextPage = () => {
  return (
    <>
      <PageHeading title="Welcome back!" />
      <section className="container">
        <div className="main_login_form">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default index;
