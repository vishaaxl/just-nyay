import { GetServerSideProps } from "next";
import styles from "../users/User.module.scss";

import Head from "next/head";

// database
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { db } from "firebase.config";
import Image from "next/image";
import ConsultationForm from "components/forms/ConsultationForm";
import Input from "components/Input";
import { Form, Formik } from "formik";
import Hero from "components/home/Hero";

interface Props {
  caseData: DocumentData;
}

const Page: React.FC<Props> = ({ caseData }) => {
  if (!caseData) {
    return (
      <section className="container">
        <div className={styles.header}>
          <h2 className="header">Fetching data..</h2>
          <span>Please wait</span>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>Just Nyay | Legal Issue No Issue</title>
        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta name="keywords" content={`legal, reporter, case, court`}></meta>
      </Head>
      <Hero />
      <section className="container" style={{ padding: " 2em 0" }}>
        <div className={styles.header}>
          <h2 className="header">
            Hello, {caseData.firstname} {caseData.lastName}
          </h2>
          <span>Welcome back</span>
        </div>

        <div className={styles.header}>
          <h3 className="header">Case Lawyer</h3>
        </div>

        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div
              className=""
              style={{
                position: "absolute",
                left: "30%",
                top: "10%",
                zIndex: 4,
              }}
            >
              <Image height={50} width={50} alt="" src="/vector.png" />
            </div>
            <div className={styles.card_content}>
              <p className={styles.line}>Assigned Lawyer</p>
              <h2 className={styles.line}>Viplawa Awasthi</h2>
              <span className={`${styles.line} ${styles.desc}`}>
                Mr. Viplava Awasthi has been practicing as a lawyer for the last
                13+ years.
              </span>
              <span className={styles.line}>Learn More</span>
            </div>
            <div className={styles.card_image}>
              <Image
                style={{ borderRadius: "0 5px 5px 0" }}
                layout="fill"
                objectFit="cover"
                alt=""
                src="/images/about-2.jpeg"
              />
            </div>
          </div>
        </div>

        <div
          className="blob"
          style={{
            position: "absolute",
            zIndex: -1,
            height: "100%",
            width: "100%",
            top: 0,
            opacity: 0.1,
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#b68c5a"
              d="M50.9,-15.8C60.2,11.9,57.8,44.1,41.5,55.6C25.1,67.1,-5.2,58,-26.3,41.4C-47.5,24.8,-59.6,0.7,-53.7,-22.4C-47.8,-45.6,-23.9,-67.8,-1.5,-67.3C20.8,-66.8,41.7,-43.6,50.9,-15.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className={styles.header}>
          <h3 className="header">Update case info</h3>
        </div>
        <Formik
          initialValues={{ brief: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Input
              name="case brief"
              placeholder="Brief Your case"
              rows="5"
              component="textarea"
            />
            <Input
              name="extra"
              placeholder="Comments for lawyer"
              rows="2"
              component="textarea"
            />
            <button className="primary-btn">Submit</button>
          </Form>
        </Formik>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { caseId } = context.query;
  const docSnap = await getDoc(doc(db, "orders", `${caseId}`));

  return {
    props: {
      caseData: docSnap.data(),
    },
  };
};
export default Page;
