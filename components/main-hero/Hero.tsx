import styles from "./Hero.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {}

const heroImages = ["hero-1", "hero-2", "hero-3"];

const Hero: React.FC<Props> = () => {
  const [currentImage, setCurrentImage] = useState("hero-1");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fade = setInterval(() => {
      setIndex((prev) => (prev >= 2 ? 0 : prev + 1));
      setCurrentImage(heroImages[index]);
    }, 10000);

    return () => {
      clearInterval(fade);
    };
  }, [index, currentImage]);

  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <Image
          priority
          src={`/images/${currentImage}.jpg`}
          alt="Image of library filled with law books"
          layout="fill"
          objectFit="cover"
        />
      </div>
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
          <div className="primary-btn hover">Consult a justNyay lawyer</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
