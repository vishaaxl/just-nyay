import type { NextPage } from "next";

import MainMenu from "components/mega-menu/MainMenu";
import Hero from "components/main-hero/Hero";
import PriceChart from "components/price-chart/PriceMenu";
import HowItWorks from "components/how-it-works/HowItWorks";
import Youtube from "components/youtube/Youtube";
import Footer from "components/footer/Footer";
import FAQs from "components/faqs/FAQs";
import ContactForm from "components/contact/ContactForm";
import Testimonials from "components/testimonials/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <PriceChart />
      <Youtube />

      <HowItWorks />
      <ContactForm />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
