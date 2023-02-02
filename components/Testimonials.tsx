import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { ButtonContainer } from "./home/Marquee";

interface Props {}

const Testimony = styled.div`
  background: #f3f4f5;
  widht: 100vw;
  padding: 2rem 0;
  position: relative;

  h1 {
    font-weight: 700;
    opacity: 0.9;
    margin-bottom: 1.75rem;
  }
`;

const Wrapper = styled.div`
  cursor: grabbing;
  padding: 2rem;

  .icon {
    margin-bottom: 1rem;
  }

  .content {
    opacity: 0.8;
    font-weight: 500;
    line-height: 1.5;
  }

  .line {
    margin: 1rem 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.3);
  }

  .info-wrapper {
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    gap: 1rem;

    .image {
      img {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        height: 120px;
        min-width: 120px;
        max-width: 120px;
        object-fit: cover;
        border-radius: 10%;
      }
    }

    .text {
      h2 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
      span {
        opacity: 0.8;
        font-weight: 500;
        font-size: 0.9rem;
      }
    }
  }
`;

const Embla = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
`;

const Slide = styled.div`
  background: #fff;
  border-radius: 1rem;

  min-width: 100%;
  max-width: 35rem;
  margin-left: 1rem;

  @media (min-width: 425px) {
    min-width: 70%;
  }

  @media (min-width: 767px) {
    min-width: 50%;
  }
`;

const Testimonials: React.FC<Props> = () => {
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
    <Testimony>
      <div className="container">
        <h1>Our Testimonials</h1>
      </div>
      <ButtonContainer>
        <div className=""></div>
        <BsChevronRight className="icons" onClick={() => scrollNext()} />
      </ButtonContainer>
      <Embla>
        <div className="embla__viewport" ref={viewportRef}>
          <EmblaContainer>
            <Slide>
              <Wrapper>
                <div className="one">
                  <div className="icon">
                    <img
                      src="https://annedece.sirv.com/Images/commos.png"
                      alt=""
                    />
                  </div>
                  <p className="content">
                    A discerning lawyer with a keen sense of what is newsworthy
                    and sharp understanding of legal nuances, Vipalav’s take on
                    law can not only not be ignored but is vital to understand
                    all sides of the legal issue.
                    <br />
                    <br />A personable man himself, his presentation is as
                    appealing he being able to break the complexity down to
                    present the core of the controversies in readily
                    understandable form. The epitome of an ideal reporter, the
                    reporting would be forever deficient without his
                    contributions!
                  </p>
                </div>
                <div className="two">
                  <span className="line"></span>

                  <div className="info-wrapper">
                    <div className="image">
                      <img alt="" src="/testimonials/aman.jpeg" />
                    </div>
                    <div className="text">
                      <h2>Sri Aman Lekhi Ji</h2>
                      <span>
                        Former Additional Solicitor General of India and Senior
                        Advocate Supreme Court
                      </span>
                    </div>
                  </div>
                </div>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper>
                <div className="one">
                  <div className="icon">
                    <img
                      src="https://annedece.sirv.com/Images/commos.png"
                      alt=""
                    />
                  </div>
                  <p className="content">
                    Viplava Awasthi whom I know for last two decades, very
                    energetic and talented in his field,a person with effective
                    communication skills from very beginning.
                    <br />
                    <br />
                    His zeal towards his job has proved his professionalism and
                    brought him to success.His knowledge towards Legal field and
                    grasp has helped him in matter of interviews he has
                    successfully conducted with confidence as reporter and
                    anchor.I wish him all the success in his new venture.
                  </p>
                </div>
                <div className="two">
                  <span className="line"></span>

                  <div className="info-wrapper">
                    <div className="image">
                      <img alt="" src="/testimonials/ravi.jpeg" />
                    </div>
                    <div className="text">
                      <h2>Ravi Kant Chadha</h2>
                      <span>Senior Advocate</span>
                    </div>
                  </div>
                </div>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper>
                <div className="icon">
                  <img
                    src="https://annedece.sirv.com/Images/commos.png"
                    alt=""
                  />
                </div>
                <p className="content">
                  Dear Viplava Awasthi,
                  <br /> Heartiest congratulations on this wonderful initiative
                  of launching Legal Website . I am very much impressed by
                  watching your legal awareness program &rsquo;Legal
                  Reporter&rsquo;.
                  <br />
                  <br />
                  you are a thoughtful and knowledgeable person and I strongly
                  believe that talent and ability to work hard will give you
                  success every where. CONGRATULATIONS and Best Wishes 💐
                </p>

                <span className="line"></span>

                <div className="info-wrapper">
                  <div className="image">
                    <img alt="" src="/testimonials/johri.jpeg" />
                  </div>
                  <div className="text">
                    <h2> Dr.B.K.Jauhari</h2>
                    <span> Advocate, Supreme Court of India</span>
                  </div>
                </div>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper>
                <div className="icon">
                  <img
                    src="https://annedece.sirv.com/Images/commos.png"
                    alt=""
                  />
                </div>
                <p className="content">
                  Many many congratulations to create Legal Website by my
                  brother Mr. Viplava Awasthi, Editor, Legal Reporter Because no
                  one covers effective true legal affairs like Mr. Awasthi.
                  <br />
                  <br />
                  He is bone of legal reporter in Hon”ble Supreme Court of India
                  and so every concerned person should visits his website for
                  unbiased and up to date legal news coverage.
                </p>

                <span className="line"></span>

                <div className="info-wrapper">
                  <div className="image">
                    <img alt="" src="/testimonials/ap.jpeg" />
                  </div>
                  <div className="text">
                    <h2>Dr. A P Singh</h2>
                    <span>Eminent Lawyer, Supreme Court</span>
                  </div>
                </div>
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper>
                <div className="icon">
                  <img
                    src="https://annedece.sirv.com/Images/commos.png"
                    alt=""
                  />
                </div>
                <p className="content">
                  Dear Viplav we have seen you in the campus doing good legal
                  job and it seems you are doing a fabulous work by giving
                  insight of some of the best legal minds in the Delhi NCR
                  region.
                  <br />
                  <br /> You have tried to keep the recipe simple and that is
                  the reason of your immense popularity amongst us here. My best
                  wishes to you.
                </p>

                <span className="line"></span>

                <div className="info-wrapper">
                  <div className="image">
                    <img alt="" src="/testimonials/anurag.jpeg" />
                  </div>
                  <div className="text">
                    <h2>Anurag Singh</h2>
                    <span>Advocate, Supreme Court</span>
                  </div>
                </div>
              </Wrapper>
            </Slide>
          </EmblaContainer>
        </div>
      </Embla>
    </Testimony>
  );
};

export default Testimonials;
