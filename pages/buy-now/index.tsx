import PageHeading from "components/PageHeading";
import PriceChart from "components/Pricing";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      <PageHeading title="Buy Now" />

      <PriceChart />
    </>
  );
};

export default Index;
