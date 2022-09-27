import type { NextPage } from "next";

import About from "components/home/About";
import Cases from "components/home/Cases";
import Hero from "components/home/Hero";
import Services from "components/home/Services";
import FAQs from "components/home/Faqs";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Cases />
      <About />
      <Services />
      <FAQs />
    </>
  );
};

export default Home;
