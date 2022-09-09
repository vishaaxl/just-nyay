import type { NextPage } from "next";

import TopMenu from "components/top-menu/TopMenu";
import MainMenu from "components/mega-menu/MainMenu";
import Hero from "components/main-hero/Hero";
import PriceChart from "components/price-chart/PriceMenu";
import HowItWorks from "components/how-it-works/HowItWorks";
import Youtube from "components/youtube/Youtube";
import Footer from "components/footer/Footer";
import FAQs from "components/faqs/FAQs";
import ContactForm from "components/contact/ContactForm";

const Home: NextPage = () => {
  return (
    <>
      <TopMenu />
      <MainMenu />
      <Hero />
      <PriceChart />
      <Youtube />

      <HowItWorks />
      <ContactForm />
      <FAQs />
      <Footer />
    </>
  );
};

export default Home;
