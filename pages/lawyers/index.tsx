import PageHeading from "components/PageHeading";
import { GetServerSideProps } from "next";

import styles from "../../styles/page.module.scss";
import { pages } from "../../data.js";
import PricingSection from "components/Pricing";
import Head from "next/head";
import FAQs from "components/home/Faqs";
import Services from "components/home/Services";

const faqs = [
  {
    id: 1,
    question: "Is it like an Appointment I am getting when I am paying?",
    ans: "NO, it’s instant. There is no appointment you need to take. Just call on the number you receive after buying consultation minutes",
  },
  {
    id: 2,
    question: "Whose number I will be getting when I buy consultation minutes?",
    ans: "It is our System’s standard number. You can save the number for all your future calls. Every time when you need to consult please call on this number",
  },
  {
    id: 3,
    question:
      "Who are these experts for consultation? Can I choose them to talk?",
    ans: "They are highly experienced Lawyers with hands-on knowledge and expertise on all the key fields of Law in India. They all are practicing in various High Court in Indian.<br/><br/> No You cannot choose them because they are chosen by Technology Algorithm based on their practice Area and experience; this is LegalKart’s “Smart Match” Technology ensuring you to connect with best available expert.",
  },
  {
    id: 5,
    question: "Whose number I will be getting when I buy consultation minutes?",
    ans: "It is our System’s standard number. You can save the number for all your future calls. Every time when you need to consult please call on this number",
  },
  {
    id: 6,
    question: "Whose number I will be getting when I buy consultation minutes?",
    ans: "It is our System’s standard number. You can save the number for all your future calls. Every time when you need to consult please call on this number",
  },
];

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Just Nyay | Know more</title>
        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta name="keywords" content={`legal, reporter, case, court`}></meta>
      </Head>
      <PageHeading title="Book Consultation" />

      <PricingSection />
      <FAQs questionsList={faqs} />
      <Services />
    </>
  );
};

export default index;
