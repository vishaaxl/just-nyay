import PageHeading from "components/PageHeading";
import PriceChart from "components/Pricing";
import type { NextPage } from "next";
import Faqs from "components/home/Faqs";
import Services from "components/home/Services";
import Hero from "components/home/Hero";
import { useEffect } from "react";

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
    ans: "They are highly experienced Lawyers with hands-on knowledge and expertise on all the key fields of Law in India. They all are practicing in various High Court in India.",
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

const Index: NextPage = () => {
  useEffect(() => {
    if (document) {
      document.getElementById("price_chart")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <Hero />
      <PageHeading title="Consult Now" />

      <PriceChart />
      <Faqs questionsList={faqs} />
      <Services />
    </>
  );
};

export default Index;
