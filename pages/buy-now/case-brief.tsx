import ConsultationForm from "components/forms/ConsultationForm";
import PageHeading from "components/PageHeading";
import type { NextPage } from "next";

const CaseBrief: NextPage = () => {
  return (
    <>
      <PageHeading title="case brief" />
      <ConsultationForm />
    </>
  );
};

export default CaseBrief;
