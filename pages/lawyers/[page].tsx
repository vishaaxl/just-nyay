import PageHeading from "components/PageHeading";
import { GetServerSideProps } from "next";

import styles from "../../styles/page.module.scss";
import { pages } from "../../data.js";
import PricingSection from "components/Pricing";
import Head from "next/head";
import FAQs from "components/home/Faqs";
import Services from "components/home/Services";
import Hero from "components/home/Hero";

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
    question: "Who are these experts for consultation?",
    ans: "They are highly experienced Lawyers with hands-on knowledge and expertise on all the key fields of Law in India. They all are practicing in various High Court in Indian.",
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

interface Props {
  title: string;
  pageContent: {
    id: number;
    heading: string;
    title: string;
    content: string;
  }[];
}

const Page: React.FC<Props> = ({ title, pageContent }) => {
  return (
    <>
      <Head>
        <title>Just Nyay | Connect</title>
        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta name="keywords" content={`legal, reporter, case, court`}></meta>
      </Head>
      <Hero />
      <PageHeading title={title} />
      <section className="container">
        {pageContent[0] && (
          <>
            <h3 className={styles.main_heading}>{pageContent[0].heading}</h3>
            <div
              className={styles.para}
              dangerouslySetInnerHTML={{ __html: pageContent[0].content }}
            />
          </>
        )}
      </section>
      <div style={{ marginTop: "1.5rem" }}>
        <PricingSection />
      </div>
      <FAQs questionsList={faqs} />
      <Services />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query;

  const data = pages.filter((item) => item.title == page);

  return {
    props: {
      title: page,
      pageContent: data,
    },
  };
};
export default Page;
