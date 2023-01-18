import PageHeading from "components/PageHeading";
import PriceChart from "components/Pricing";
import type { NextPage } from "next";
import Faqs from "components/home/Faqs";
import Services from "components/home/Services";
import Hero from "components/home/Hero";

const faqs = [
  {
    id: 1,
    question: "Is it like an Appointment I am getting when I am paying?",
    ans: "NO, it’s instant. There is no appointment you need to take. After you are done purchasing the plan, our team will call you on your booked call schedule.",
  },
  {
    id: 2,
    question: "Whose number I will be getting when I buy consultation minutes?",
    ans: "It is our System’s standard number. You can save the number for all your future calls. Every time when you need to consult please call on this number",
  },
  {
    id: 3,
    question: "Who are these experts for consultation?",
    ans: "They are highly experienced Lawyers with hands-on knowledge and expertise on all the key fields of Law in India. They all are practicing in various High Court in India.",
  },
  {
    id: 4,
    question: "What legal services we provide?",
    ans: "JustNyay provides a variety of legal services to their customers. We have a lawyer for all of your needs. To know more about the services, please visit the legal services section.",
  },
  {
    id: 5,
    question: "How does JustNyay choose their lawyers?",
    ans: "JustNyay Lawyers are highly qualified and experienced individuals in their fields. We have reputated lawyers from district courts all the way up to supreme court working with us closely.",
  },
];

const Index: NextPage = () => {
  return (
    <>
      <Hero />
      <PageHeading title="Consult Now" />

      <PriceChart heading="Get Second Opinion" />
      <Faqs questionsList={faqs} />
      <Services />
    </>
  );
};

export default Index;
