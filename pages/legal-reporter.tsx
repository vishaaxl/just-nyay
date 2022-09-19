import type { NextPage } from "next";

interface Props {}

import PageHeading from "components/page-heading/PageHeading";

const LegalReporter: NextPage = () => {
  return (
    <>
      <PageHeading title="Legal Reporter" />
      <div className="container director"></div>
    </>
  );
};

export default LegalReporter;
