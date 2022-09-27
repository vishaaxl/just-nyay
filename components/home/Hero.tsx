import Image from "next/image";
import styles from "./Home.module.scss";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "components/Menu";

interface Props {}

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

const Hero: React.FC<Props> = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.bg_wrap} style={{ opacity: mobileMenu ? 0.8 : 1 }}>
        <Image
          src="/images/hero-1.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>

      <nav className={styles.nav}>
        <GiHamburgerMenu
          style={{ fontSize: "2.125rem", cursor: "pointer" }}
          onClick={() => setMobileMenu(true)}
        />

        <div className="btn-primary">
          <a href="#">
            <span>Consult now</span>
          </a>
        </div>
      </nav>
      <AnimatePresence exitBeforeEnter>
        {mobileMenu && <Menu setMobileMenu={setMobileMenu} />}
      </AnimatePresence>

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
            Quick and Instant Consultation.
            <br />
            On phone Instant Legal consultation from top Lawyers.
          </motion.p>
          <motion.div variants={listItem} className={styles.line_three}>
            <div className="btn-primary">
              <a href="#">
                <span>Book Consultation</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.next}></div>
    </div>
  );
};
export default Hero;
