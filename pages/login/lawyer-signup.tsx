import type { NextPage } from "next";
import Image from "next/image";
import LawyerSignup from "components/forms/LawyerSignup";

const Lawyer: NextPage = () => {
  return (
    <section style={{ position: "relative", padding: "8em 0" }}>
      <Image
        alt=""
        src="/images/case-2.jpeg"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: "-1" }}
      />
      <LawyerSignup />
    </section>
  );
};

export default Lawyer;
