import styles from "./Hero.module.css";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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
            <Image
              objectFit="cover"
              layout="fill"
              src="/images/hero-1.png"
              alt=""
              className={styles.slide_image}
              priority
            />
          </div>

          <div className={styles.embla__slide}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2Fhero-2.png?alt=media&token=f8bb4f22-036a-4e3b-9225-bcc90344ffe3"
              alt=""
              loading="lazy"
              className={styles.slide_image}
            />
          </div>

          <div className={styles.embla__slide}>
            <img
              loading="lazy"
              src="https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2Fhero-3.png?alt=media&token=f31db673-dfd0-485a-847d-f53f94e35837"
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
