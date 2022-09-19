import type { NextPage } from "next";

interface Props {}

import PageHeading from "components/page-heading/PageHeading";
import PriceMenu from "components/price-chart/PriceMenu";

const BuyNow: NextPage = () => {
  return (
    <>
      <PageHeading title="Buy Now" />
      <div className="container">
        {/* <ConsultationForm /> */}
        <PriceMenu />
      </div>
    </>
  );
};

export default BuyNow;
