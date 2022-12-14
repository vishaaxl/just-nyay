import FAQs from "components/home/Faqs";
import Hero from "components/home/Hero";
import Head from "next/head";

import {
  marriageFaqs,
  insiderTrading,
  domesticViolence,
  distributionOfProperty,
  childCustody,
} from "../data";

interface Props {}

const Faqs: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Just Nyay | Legal Issue No Issue</title>

        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta
          name="keywords"
          content="legal, reporter, case, court, solutions"
        ></meta>
      </Head>
      <Hero />
      <FAQs questionsList={marriageFaqs} title="Family Law" />
      <FAQs questionsList={domesticViolence} title="Domestic Violence" />
      <FAQs questionsList={distributionOfProperty} title="Property" />
      <FAQs questionsList={childCustody} title="Child Custody" />
      <FAQs questionsList={insiderTrading} title="Insider Trading" />
    </>
  );
};

export default Faqs;
