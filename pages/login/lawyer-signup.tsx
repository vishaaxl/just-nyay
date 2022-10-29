import type { NextPage } from "next";
import styles from "./Login.module.scss";

import Image from "next/image";
import LawyerSignup from "components/forms/LawyerSignup";

const Lawyer: NextPage = () => {
  return (
    <section className={styles.page_wrapper}>
      <div className={styles.image_section}>
        <Image
          alt=""
          src="/images/case-1.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.form_section}>
        <div className="container">
          <LawyerSignup />
        </div>
      </div>
    </section>
  );
};

export default Lawyer;
