import PageHeading from "components/PageHeading";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/page.module.scss";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Just Nyay | Legal Issues No Issues</title>

        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta
          name="keywords"
          content="legal, reporter, case, court, solutions"
        ></meta>
      </Head>
      <PageHeading title="About us" />
      <div className="container">
        <h3 className={styles.main_heading}>About JustNyay</h3>
        <p className={styles.para}>
          The purpose of starting Just Nyay is only to reach the solution of the
          complex legal problem to the common people of the country. According
          to media reports by the year 2022, about 1.5 crore cases are pending
          in the lower courts. India’s middle class and lower class are
          constantly facing trouble in the process of justice.
          <br />
          <br /> Just Nyay&apos;s media company Legal Reporter, started in the
          year 2019, has been working in the legal reporting field for the past
          20 years. The Legal Reporter has so far interacted with more than 200
          senior lawyers of the Supreme Court to know their views on different
          legal subjects.
          <br />
          <br /> Just Nyay is the first such platform in the country which will
          not only provide you the best lawyer for your legal matter but will
          also get you the best opinion of the country&apos;s leading and
          experienced lawyers to get you justice at the earliest.
          <br />
          <br /> So, don&apos;t delay and contact Just Nyay immediately for any
          legal problem.
        </p>
        <div className="container" style={{ marginTop: "-5rem" }}>
          <Image
            src="/images/about-1.jpeg"
            alt=""
            height="80"
            width="100%"
            objectFit="contain"
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
};

export default About;
