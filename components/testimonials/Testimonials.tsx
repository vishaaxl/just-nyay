import styles from "./Testimonials.module.css";

import useEmblaCarousel from "embla-carousel-react";
import { CgPlayTrackNextR, CgPlayTrackPrevR } from "react-icons/cg";
import Youtube from "components/youtube/Youtube";
import { useCallback } from "react";

interface Props {}

const Testimonials: React.FC<Props> = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
    loop: true,
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.top}>
          <h2>Live Testimonials</h2>
          <div className={styles.button_container}>
            <CgPlayTrackPrevR className="font-xl hover" onClick={scrollPrev} />
            <CgPlayTrackNextR className="font-xl hover" onClick={scrollNext} />
          </div>
        </div>
      </div>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.slider_container}>
          <div className={styles.slide}>
            <Youtube hideHeading link="GtR5jP8g3L0" />
          </div>
          <div className={styles.slide}>
            <Youtube hideHeading />
          </div>
          <div className={styles.slide}>
            <Youtube hideHeading link="GtR5jP8g3L0" />
          </div>
          <div className={styles.slide}>
            <Youtube hideHeading />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
