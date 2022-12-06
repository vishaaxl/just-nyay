import type { NextPage } from "next";
import Image from "next/image";
import LawyerLogin from "components/forms/LawyerLogin";
import { useEffect } from "react";
import { useAuth } from "context/User";
import { useRouter } from "next/router";
import Hero from "components/home/Hero";

const Lawyer: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(`/lawyers/dashboard/${user.uid}`);
    }
  }, [user, router]);
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
