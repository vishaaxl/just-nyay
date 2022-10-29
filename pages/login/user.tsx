import LoginForm from "components/forms/LoginForm";
import { useEffect } from "react";
import { useAuth } from "context/User";

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(`/users/${user.uid}`);
    }
  }, [user, router]);

  return (
    <section style={{ position: "relative" }} className="page-padding">
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

export default Index;
