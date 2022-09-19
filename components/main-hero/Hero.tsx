import styles from "./Hero.module.css";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {}

const Hero: React.FC<Props> = () => {
  const router = useRouter();
  const [emblaRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    loop: true,
  });

  useEffect(() => {
    const temp = setInterval(() => {
      embla?.scrollNext();
    }, 5000);

    return () => {
      clearInterval(temp);
    };
  }, [embla]);

  return (
    <div className={styles.hero}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-1.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-2.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-3.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-4.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-5.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-6.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-7.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="/images/hero-8.png"
              alt=""
              className={styles.slide_image}
            />
          </div>
        </div>
      </div>
      <div className={styles.screen} />
      <div className={styles.hero_content}>
        <div className="container">
          <div className={styles.content_wrapper}>
            <span>Most Successful Law firm</span>
            <h1>
              Legal Issue, <br />
              No Issue
            </h1>
            <p>
              Quick and Instant Consultation.
              <br />
              On phone Instant Legal consultation from top Lawyers.
            </p>
            <div
              className="primary-btn"
              onClick={() => router.push("/buy-now")}
            >
              consult a justnyay lawyer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
