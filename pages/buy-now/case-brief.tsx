import ConsultationForm from "components/forms/ConsultationForm";
import Hero from "components/home/Hero";
import PageHeading from "components/PageHeading";
import type { NextPage } from "next";

const CaseBrief: NextPage = () => {
  return (
    <>
      <Hero />
      <PageHeading title="case brief" />
      <ConsultationForm />
    </>
  );
};

export default CaseBrief;
