import styles from "./Hero.module.css";

import Image from "next/image";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/hero.jpg"
        alt="Image of library filled with law books"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.screen} />

      <div className="container">
        <div className={styles.hero_content}>
          <p className={styles.sub_heading}>Most Successful Law firm</p>
          <h1 className={styles.main_heading}>
            Effective legal <br />
            solutions
          </h1>
          <p className={styles.sub_heading_two}>
            Quick and Instant Consultation.
            <br /> On phone Instant Legal consultation from top Lawyers.
          </p>
          <div className="primary-btn">Consult a justNyay lawyer</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
