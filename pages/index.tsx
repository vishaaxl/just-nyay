import type { GetServerSideProps, NextPage } from "next";

import About from "components/home/About";
import Cases from "components/home/Cases";
import Services from "components/home/Services";
import FAQs from "components/home/Faqs";
import Marquee from "components/home/Marquee";
import PriceChart from "components/Pricing";
import Head from "next/head";
import Navigation from "components/home/Nav";
import Invoice from "components/Invoice";
import FloatingIcon from "components/FloatingIcon";

const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const PLAYLIST_ID = "PLPWEDbk41oFUYtDTf2_CFFPmj9pvrPCMV";

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

const Home: NextPage = ({ data }: any) => {
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

      <Navigation />

      <Cases />
      <PriceChart />
      {data && <Marquee data={data} />}
      <About />
      <Services />
      <FAQs questionsList={faqs} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => err);

  return {
    props: {
      data,
    },
  };
};

export default Home;
