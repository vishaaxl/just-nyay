import type { NextPage } from "next";
import Image from "next/image";
import LawyerLogin from "components/forms/LawyerLogin";
import { useEffect } from "react";
import { useAuth } from "context/User";
import { useRouter } from "next/router";
import Hero from "components/home/Hero";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "firebase.config";

const Lawyer: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(
    () =>
      user?.phoneNumber
        ? onSnapshot(
            query(
              collection(db, "lawyers"),
              where("phoneNumber", "==", user?.phoneNumber),
              limit(1)
            ),
            async (snapshot) => {
              //check if the user is lawyer
              if (snapshot.empty) {
                // user does not exist
                return;
              } else {
                router.push(`/lawyers/dashboard/${user.uid}`);
              }

              // update user globally
            }
          )
        : console.log("No User found"),
    [user]
  );

  return (
    <>
      <Hero />
      <section style={{ position: "relative" }} className="page-padding">
        <Image
          alt=""
          src="/images/hero.jpg"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: "-1" }}
        />
        <LawyerLogin />
      </section>
    </>
  );
};

export default Lawyer;
