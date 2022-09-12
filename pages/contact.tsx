import type { NextPage } from "next";

interface Props {}

import PageHeading from "components/page-heading/PageHeading";
import ConsultationForm from "components/consultation-form/ConsultationForm";

const Contact: NextPage = () => {
  return (
    <>
      <PageHeading title="Consultaion Form" />
      <div className="container">
        <ConsultationForm />
      </div>
    </>
  );
};

export default Contact;
