import Image from "next/image";
import styles from "./Home.module.scss";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <section className="container">
      <div className={styles.about}>
        <div className={styles.content}>
          <div className="line_heading">
            <span className="line"></span>
            <h4>Who We Are</h4>
          </div>

          <h2 className={styles.about_title}>About JustNyay</h2>
          <p className={styles.about_sub_title}>
            25 Years Of Experience In Law Solutiuons
          </p>
          <p className={styles.about_description}>
            The purpose of starting Just Nyay is only to reach the solution of
            the complex legal problem to the common people of the country.
            According to media reports by the year 2022, about 1.5 crore cases
            are pending in the lower courts. India’s middle class and lower
            class are constantly facing trouble in the process of justice.
            <br />
            <br /> Just Nyay&apos;s media company Legal Reporter, started in the
            year 2019, has been working in the legal reporting field for the
            past 20 years. The Legal Reporter has so far interacted with more
            than 200 senior lawyers of the Supreme Court to know their views on
            different legal subjects.
          </p>
          <p className={styles.about_description}>
            All the products, services & advertisements of JustNyay.com are
            Solely owned, operated, managed and modified by Advozone India
            Private Limited.
          </p>

          <div className="btn-primary">
            <a href="#">
              <span>Book Consulation</span>
            </a>
          </div>
        </div>
        <div className={styles.about_images}>
          <div className={styles.about_image_one}>
            <Image
              alt=""
              src="/images/about-1.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.about_image_two}>
            <Image
              alt=""
              src="/images/about-2.jpeg"
              layout="fill"
              objectFit="cover"
              objectPosition="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
