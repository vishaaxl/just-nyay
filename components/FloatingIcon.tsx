import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {}

const Wrapper = styled(motion.div)`
  position: fixed;
  z-index: 999;

  right: 2rem;
  bottom: 2rem;

  height: 60px;
  width: 60px;
  cursor: pointer;
  animation: jump 0.8s ease infinite alternate;

  @media (min-width: 767px) {
    right: 4rem;
  }

  @keyframes jump {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  span {
    overflow: visible !important;
  }
  img {
    border-radius: var(--m);
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.15));
  }
`;

const FloatingIcon: React.FC<Props> = () => {
  return (
    <Wrapper>
      <a
        href="https://wa.me/+919318428656?text=Hello,%20"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          priority
          src="/images/floating.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </a>
    </Wrapper>
  );
};

export default FloatingIcon;
