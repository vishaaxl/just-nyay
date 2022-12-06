import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import { useRouter } from "next/router";
import Hero from "./Hero";

interface Props {}

const HeroWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding: 1rem 0 4rem 0;
  background: url("/images/hero.jpg");
  background-size: cover;

  .film {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .container {
    padding-top: 2rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: 120 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Navigation: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <HeroWrapper>
      <div className="film"></div>
      <Hero />
      <div className="container">
        <motion.div
          className={styles.hero_content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={listItem} className={styles.line_one}>
            <span className={styles.line}></span>
            Welcome to justnyay
          </motion.div>
          <motion.h1 variants={listItem} className={styles.line_two}>
            Legal Issue <br />
            no issue
          </motion.h1>
          <motion.p variants={listItem} className={styles.sub_heading}>
            When Experience Matters
            <br />
            India&rsquo;s First Online Legal Advice Website With More Than 10000
            Expert Lawyers Group
          </motion.p>
          <motion.div variants={listItem} className={styles.line_three}>
            <div
              className="btn-primary"
              onClick={() => router.push("/buy-now")}
            >
              <a href="#">
                <span>Book Consultation</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </HeroWrapper>
  );
};
export default Navigation;
