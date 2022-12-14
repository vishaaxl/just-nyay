import styles from "./Home.module.scss";
import VideoModal from "../VideoModal";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

const Marquee: React.FC<Props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerVideo, setPlayerVideo] = useState("wVwe7TgJYq0");

  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    const marquee = setInterval(() => {
      if (embla) {
        embla.scrollNext();
      }
    }, 5000);

    return () => clearInterval(marquee);
  }, [embla]);

  const added = [
    {
      id: "E6h4xIwSTpk",
      image: "/thumbnails/01.jpg",
    },
    {
      id: "n-sUPCt3sXI",
      image: "/thumbnails/02.jpg",
    },
    {
      id: "2b1IHlBEiUY",
      image: "/thumbnails/03.jpg",
    },
    {
      id: "w80Cssp_edA",
      image: "/thumbnails/04.jpg",
    },
    {
      id: "SQ7wPsJ721k",
      image: "/thumbnails/05.jpg",
    },
    {
      id: "suBcx9nB97Q",
      image: "/thumbnails/06.jpg",
    },
    {
      id: "0-COTxURJ1s",
      image: "/thumbnails/07.jpg",
    },
    {
      id: "MAd2PnzTnNQ",
      image: "/thumbnails/08.jpg",
    },
    {
      id: "AuS2NejW5G4",
      image: "/thumbnails/09.jpg",
    },
  ];

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && (
          <VideoModal setIsModalOpen={setIsModalOpen} embedId={playerVideo} />
        )}
      </AnimatePresence>
      <section className={styles.marquee}>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {added.map((e) => (
                <div
                  key={e.id}
                  className="embla__slide"
                  onClick={() => {
                    setPlayerVideo(e.id);
                    setIsModalOpen(true);
                  }}
                >
                  <img className="embla__slide__img" src={e.image} alt="" />
                </div>
              ))}
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
