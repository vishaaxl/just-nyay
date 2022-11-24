import type { NextPage } from "next";
import Image from "next/image";
import LawyerLogin from "components/forms/LawyerLogin";

const Lawyer: NextPage = () => {
  return (
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
  );
};

export default Lawyer;
