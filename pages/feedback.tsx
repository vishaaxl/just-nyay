import ContactUs from "components/forms/ContactForm";
import Hero from "components/home/Hero";
import PageHeading from "components/PageHeading";
import Image from "next/image";
import styles from "/pages/login/Login.module.scss";
import FeedBack from "components/forms/feedback";

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <>
      <Hero />
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
            <FeedBack />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
