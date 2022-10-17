import styles from "./User.module.scss";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

import {
  collection,
  query,
  where,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { db } from "firebase.config";
import { useAuth } from "context/User";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";

const User: NextPage = ({}) => {
  const [orders, setOrders] = useState<DocumentData>([]);

  const user = useAuth();
  const router = useRouter();

  useEffect(
    () =>
      user?.phoneNumber
        ? onSnapshot(
            query(
              collection(db, "orders"),
              where("phoneNumber", "==", user?.phoneNumber)
            ),
            (snapshot) => {
              setOrders(snapshot.docs);
            }
          )
        : console.log("No User found"),
    [user?.phoneNumber]
  );

  if (!orders.length) {
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
        <meta
          name="keywords"
          content="legal, reporter, case, court, solutions"
        ></meta>
      </Head>
      <section className="container" style={{ padding: " 2em 0" }}>
        <div className={styles.header}>
          <h2 className="header">
            Hello, {user?.displayName || orders[0].data().firstname}{" "}
            {user?.displayName || orders[0].data().lastname}
          </h2>
          <span>Welcome back</span>
        </div>

        {/* <div className={styles.header}>
          <h3 className="header">Personal information</h3>
          <div className={styles.line}>
            <span>Full Name:</span>
            <span>
              {orders[0].data().firstname} {orders[0].data().lastname}
            </span>
          </div>

          <div className={styles.line}>
            <span>city:</span>
            <span>{orders[0].data().city}</span>
          </div>
          <div className={styles.line}>
            <span>Phone Number:</span>
            <span>{orders[0].data().phoneNumber}</span>
          </div>
          <div className={styles.line}>
            <span>E-mail:</span>
            <span style={{ textTransform: "lowercase" }}>
              {orders[0].data().email}
            </span>
          </div>
        </div> */}
        <div className={styles.header}>
          <h3 className="header">Assigned Consultant</h3>
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
              <h2 className={styles.line}>Rishabh Mishra</h2>
              <span className={`${styles.line} ${styles.desc}`}>
                Mr. Rishabh Mishra has been practicing as a lawyer for the last
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
                src="/images/layer.jpg"
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
          <h3 className="header">Currently Active Cases</h3>
          {orders.map((order: DocumentData) => (
            <div
              onClick={() => router.push(`/cases/${order.id}`)}
              className={styles.line_active}
              key={order.id}
              style={{ background: "rgba(0,244,0,0.1)" }}
            >
              <span>case niche</span>
              <span>{orders[0].data().problemType}</span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <BsDot style={{ color: "green", fontSize: "2rem" }} />
                Active
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default User;
