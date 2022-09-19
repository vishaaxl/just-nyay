import type { NextPage } from "next";

interface Props {}

import PageHeading from "components/page-heading/PageHeading";
import VerifyForm from "components/consultation-form/PhoneVerification";

const BuyNow: NextPage = () => {
  return (
    <>
      <PageHeading title="Verify phone number" />
      <div className="container">
        <VerifyForm />
      </div>
    </>
  );
};

export default BuyNow;
