import Hero from "components/home/Hero";
import PageHeading from "components/PageHeading";
import Testimonials from "components/Testimonials";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import styles from "../styles/page.module.scss";

interface Props {}

const Gallery = styled.div`
  margin: 2rem 0;

  display: grid;
  gap: 1rem;
  align-items: center;
  @media (min-width: 767px) {
    grid-template-columns: 1fr;
    height: 425px;
  }

  @media (min-width: 1024px) {
    max-width: 40rem;
    margin: 2rem auto;
    grid-template-columns: 1fr;
    height: 425px;
  }

  overflow: hidden;

  img {
    object-position: top center;
    object-fit: cover;
    width: 100%;
    height: 420px;
  }
`;

const About: React.FC<Props> = () => {
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
      <PageHeading title="About us" />
      <div className="container">
        <h3 className={styles.main_heading}>About JustNyay</h3>
        <p className={styles.para}>
          It has been over 7 decades since India embraced a well-entrenched,
          elaborated, and codified system of laws that has stood the test of
          time. An independent Judiciary is a cornerstone of a democratic state
          upon which Civil liberty is built. On contrary, It won&#39;t be an
          exaggeration in the Indian context to call the Judiciary the most
          expensive invention in terms of time and money
          <br />
          <br />
          Though the Indian Judiciary has played a crucial role in the evolution
          of society by holding reigns of power in particular yet even today the
          pendency of cases in the various courts of India is alarming. CJI
          Justice DY Chandrachud while addressing the judges in the Andhra
          Pradesh High Court said that the reason for the delay in about 14 lakh
          cases is due to some kind of record or document delay, while as per
          the data of National Judicial Data Grid [NJDG], 63 lakh cases are
          pending across the country due to absence of lawyers.
          <br />
          <br /> Various media reports reveal that about 70,000 cases are
          pending in the apex court. The main reasons for the pendency of these
          cases include factors like a shortage of judges and lawyers and delays
          in hearing the cases. The aforesaid plight stands out to be grim.
          <br />
          <iframe
            src={`https://www.youtube.com/embed/hWvEmFk07bE?autoplay=1&mute=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Legal Reporter"
            className={styles.player}
          />
          <br /> Justnyay.com is an online legal consultancy platform that has
          come to the rescue and has emerged with the sole aim of providing the
          best legal advice to those who are scuffling with the legal
          inconvenience. Justnyay.com maintains its commitment to delivering
          real, measurable results with a team made up of the fraternity&lsquo;s
          greatest minds. Nearly 10,000 proficient lawyers from all over the
          country are empaneled on Justnyay.com to serve the purpose. We are
          here to resolve the greatest predicaments existing in the judicial
          system.
          <br />
          <br />
          <br />
          Our existence is driven by the core purpose to make an impact that
          matters. Justnyay.com adheres to providing comprehensive legal advice
          that will empower people and further widens the outreach of justice.
          We at Justnyay.com aim for the highest bar and approach our work with
          a collaborative mindset and believe in delivering the upshot that
          transforms. The vast and diversified experience of our founder enables
          us not only to resolve the enigma of law but to rediscover new avenues
          that would lead to a more sustainable world.
          <br />
          <h3 className={styles.main_heading}>Our Founder and CEO</h3>
          Founder and CEO of Justnyay.com Mr. Viplava Awasthi is associated with
          legal reporting for the last 22 years. He is a decorated veteran
          journalist and has done legal reporting for 11 national news channels,
          newspapers, digital websites, etc. In 2019, our founder started a
          digital platform &lsquo;Legal Reporter&lsquo;, through which he has
          produced quintessential content in which more than 200 expert lawyers
          from across the nation have provided legal advice to the general
          public on various legal issues and laws like Crime, Civil, Family,
          Banking, GST, Finance, tax, online fraud, land acquisition, etc. Our
          founder has closely covered and reported thousands of high-profile
          cases in his career span of 22 years.
        </p>
        <Gallery>
          <img src="/images/about-4.jpeg" alt="" />
        </Gallery>

        <br />
        <p className={styles.para}>
          All the products, services & advertisements of JustNyay.com are Solely
          owned, operated, managed and modified by Advozone India Private
          Limited.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src={`https://www.youtube.com/embed/P4jmDGprMBA?autoplay=1&mute=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Legal Reporter"
            className={styles.player}
          />
        </div>
        <br />
        <br />
        <br />
      </div>
      <Testimonials />
    </>
  );
};

export default About;
