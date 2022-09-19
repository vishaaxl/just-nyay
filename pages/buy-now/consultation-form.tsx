import type { NextPage } from "next";

interface Props {}

import PageHeading from "components/page-heading/PageHeading";
import ConsultationForm from "components/consultation-form/ConsultationForm";

const ConsultaionForm: NextPage = () => {
  return (
    <>
      <PageHeading title="Brief your query" />
      <div className="container">
        <ConsultationForm />
      </div>
    </>
  );
};

export default ConsultaionForm;
