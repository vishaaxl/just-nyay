import styles from "./Home.module.scss";
import VideoModal from "../VideoModal";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  data: any;
}

const images = [
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20Aman%20Lekhi-min.png?alt=media&token=5142e901-985d-44e2-9a40-202381951ad0",
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20Vivek%20Tankha-min.png?alt=media&token=da31ee3d-5181-4b56-a0e9-5da4797e8599",
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20Prashant%20Bhushan-min.png?alt=media&token=f256c276-b1c4-47a6-9ca3-e5912683c566",
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20Ramesh%20Gupta-min.png?alt=media&token=75bbec08-dfa1-4a2b-9766-752a347abeb8",
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20H%20S%20Phoolka%20-min.png?alt=media&token=04e56d8b-fc49-4d91-9325-6f34331a6bcc",
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20Aman%20Lekhi-min.png?alt=media&token=5142e901-985d-44e2-9a40-202381951ad0",
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20C%20S%20Vaidhyanathan-min.png?alt=media&token=b99436b6-619a-4789-a24f-8d26a8f3a55e",
  "https://firebasestorage.googleapis.com/v0/b/eshop-a3b91.appspot.com/o/jn%2FSenior%20Advocate%20Colin%20Gonsalves-min.png?alt=media&token=a7d5241b-93ec-4273-a894-b5a69fa76a4c",
];

const ButtonContainer = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;

  display: flex;
  justify-content: space-between;

  .icons {
    pointer-events: fill;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 1.45rem;

    background-color: rgba(255, 255, 255, 0.6);
    padding: 0.65rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    color: #242424;
    border-radius: 20%;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Marquee: React.FC<Props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerVideo, setPlayerVideo] = useState("wVwe7TgJYq0");

  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  useEffect(() => {
    const marquee = setInterval(() => {
      if (embla) {
        embla.scrollNext();
      }
    }, 5000);

    return () => clearInterval(marquee);
  }, [embla]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && (
          <VideoModal setIsModalOpen={setIsModalOpen} embedId={playerVideo} />
        )}
      </AnimatePresence>
      <section className={styles.marquee} style={{ position: "relative" }}>
        <ButtonContainer>
          <BsChevronLeft className="icons" onClick={() => scrollPrev()} />
          <BsChevronRight className="icons" onClick={() => scrollNext()} />
        </ButtonContainer>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {data.items.map((item: any) => {
                const { id, snippet = {} } = item;
                const { thumbnails = {}, resourceId = {} } = snippet;
                const { maxres = {} } = thumbnails;

                if (maxres.url) {
                  return (
                    <div
                      className="embla__slide"
                      key={id}
                      onClick={() => {
                        setPlayerVideo(resourceId.videoId);
                        setIsModalOpen(true);
                      }}
                    >
                      <img
                        className="embla__slide__img"
                        src={maxres.url}
                        alt=""
                      />
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="marquee" onClick={() => setIsModalOpen(true)}>
        <div className="marquee-content">
          <div className="marquee-item">
            <img
              src=
              alt=""
            />
          </div>

          <div className="marquee-item">
            <img
              src="
              alt=""
            />
          </div>

          <div className="marquee-item">
            <img
              src=
              alt=""
            />
          </div>

          <div className="marquee-item">
            <img
              src=
              alt=""
            />
          </div>

          <div className="marquee-item">
            <img
              src=
              alt=""
            />
          </div>

          <div className="marquee-item">
            <img
              src=
              alt=""
            />
          </div>

          <div className="marquee-item">
            <img
              src=
              alt=""
            />
          </div>
          <div className="marquee-item">
            <img
              src=
              alt=""
            />
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Marquee;
