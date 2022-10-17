import LoginForm from "components/forms/LoginForm";
import { useEffect } from "react";
import { useAuth } from "context/User";

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Lawyer: NextPage = () => {
  return (
    <section style={{ position: "relative", padding: "5em 0" }}>
      <Image
        alt=""
        src="/images/case-2.jpeg"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: "-1" }}
      />
      <LoginForm />
    </section>
  );
};

export default Lawyer;
