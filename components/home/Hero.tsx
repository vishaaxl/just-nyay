import Image from "next/image";
import styles from "./Home.module.scss";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "components/Menu";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";

interface Props {}

const lawyers = [
  {
    id: 0,
    heading: "Criminal / Property",
    style: "one",
    elems: ["Criminal", "Property", "LandLord/ Tenant", "Cyber Crime"],
  },
  {
    id: 2,
    heading: "Personal/ Family",
    style: "two",
    elems: [
      "Divorce",
      "Family Disputes",
      "Child Custody",
      "Muslim Law",
      "Medical Negligence",
      "Motor Accident",
      "Wills/ Trust",
      "Labour and Service",
      "marriage Registration",
    ],
  },
  {
    id: 3,
    heading: "Corporate Law",
    style: "three",
    elems: [
      "Arbitration",
      "Trademark and Copyright",
      "Customs and Central Excise",
      "Startup",
      "Banking/ Finance",
      "GST",
      "Corporate",
      "Tax",
    ],
  },
  {
    id: 4,
    heading: "Civil Matters",
    style: "four",
    elems: [
      "Documentation",
      "Consumer Court",
      "Civil",
      "Cheque Bounce",
      "Recovery",
    ],
  },
  {
    id: 5,
    heading: "others",
    style: "five",
    elems: [
      "Armed Forces Tribunal",
      "Supreme Court",
      "Insurance",
      "Immigration",
      "International Law",
    ],
  },
];

const services = [
  {
    id: 0,
    heading: "Legal Notice",
    style: "six",
    elems: [
      "Divorce Notice",
      "Tenant Eviction Notice",
      "Refund of Security Notice",
      "Faulty Product Notice",
      "Cheque Bounce Notice",
      "Recovery Notice",
    ],
  },
  {
    id: 2,
    heading: "Family/Matrimonial",
    style: "seven",
    elems: [
      "Mutual Divorce ",
      "Marriage Registration",
      "Court Marriage",
      "Divorce Notice",
      "Marriage Counselling ",
      "Will Draft ",
    ],
  },
  {
    id: 3,
    heading: "Documentation",
    style: "eight",
    elems: [
      "MoU",
      "Name Change",
      "Sale Deed Registration",
      "Gift Deed Registration ",
      "Will Registration ",
      "Power of Attorney ",
    ],
  },
  {
    id: 4,
    heading: "Civil Law / Property",
    style: "nine",
    elems: [
      "Succession Certificate",
      "Property Verification",
      "Property Registration",
      "Gift Deed ",
      "Lease Agreement",
    ],
  },
];

const Hero: React.FC<Props> = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState("");

  const router = useRouter();

  const kebab = (str: string) => {
    return str.replace(/\s/g, "-").replace(/\//g, "").toLowerCase();
  };

  return (
    <div
      // ${router.asPath == "/" && styles.hero_height}
      className={`${styles.hero} `}
    >
      {/* {router.asPath == "/" && (
        <div
          className={styles.bg_wrap}
          style={{ opacity: mobileMenu ? 0.8 : 1 }}
        >
          <Image
            src="/images/hero.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )} */}
      <nav className={styles.nav}>
        <GiHamburgerMenu
          className={styles.ham_icon}
          style={{ fontSize: "2.125rem", cursor: "pointer" }}
          onClick={() => setMobileMenu(true)}
        />

        <motion.ul className={styles.nav_links}>
          <motion.li
            onHoverStart={() => setShowDropdown("lawyers")}
            onHoverEnd={() => setShowDropdown("")}
          >
            <span>Ask for Lawyer</span>
            <AnimatePresence exitBeforeEnter>
              {showDropdown == "lawyers" && (
                <motion.div
                  className={styles.dropdown}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {lawyers.map((item) => (
                    <div key={item.id} className={styles.dropdown_section}>
                      <span className={styles.dropdown_section_heading}>
                        {item.heading}
                      </span>
                      {item.elems.map((e) => (
                        <span
                          key={e}
                          onClick={() => router.push(`/lawyers/${kebab(e)}`)}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li
            onClick={() => router.push("/second-opinion")}
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <span>Second Opinion</span> <AiFillStar style={{ opacity: 0.8 }} />
          </motion.li>
          <motion.li
            onHoverStart={() => setShowDropdown("services")}
            onHoverEnd={() => setShowDropdown("")}
          >
            <span>Legal Services</span>

            <AnimatePresence exitBeforeEnter>
              {showDropdown == "services" && (
                <motion.div
                  className={styles.dropdown}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {services.map((item) => (
                    <div key={item.id} className={styles.dropdown_section}>
                      <span className={styles.dropdown_section_heading}>
                        {item.heading}
                      </span>
                      {item.elems.map((e) => (
                        <span
                          key={e}
                          onClick={() => router.push(`/lawyers/${kebab(e)}`)}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          <li
            onClick={() => router.push("/legal-reporter")}
            style={{
              color: router.asPath.includes("legal-reporter") ? "#b68c5a" : "",
            }}
          >
            Legal Reporter TV
          </li>
          <li
            onClick={() => router.push("/about")}
            style={{
              color: router.asPath.includes("about") ? "#b68c5a" : "",
            }}
          >
            About Us
          </li>
        </motion.ul>

        <div
          className="btn-primary"
          onClick={() =>
            router.asPath == "/second-opinion"
              ? router.push("/second-opinion/buy-now")
              : router.push("/buy-now")
          }
        >
          <a>
            <span>Consult now</span>
          </a>
        </div>
      </nav>
      <AnimatePresence exitBeforeEnter>
        {mobileMenu && <Menu setMobileMenu={setMobileMenu} />}
      </AnimatePresence>
      {/* {router.asPath == "/" && (
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
              India&rsquo;s First Online Legal Advice Website With More Than
              10000 Expert Lawyers Group
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
      )} */}

      <div className={styles.next}></div>
    </div>
  );
};
export default Hero;
