import styles from "./MainMenu.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const arr = [
  {
    id: 0,
    heading: " Personal / family",
    style: "one",
    elems: [
      "Divorce",
      "Family Dispute",
      "Child Custody",
      "Muslim Law",
      "Medical Negligence",
      "Motor Accident",
    ],
  },
  {
    id: 2,
    heading: "Wills / Trusts",
    style: "two",
    elems: [
      "Labour & Service",
      "Corporate Law",
      "Arbitration",
      "Trademark & Copyright",
      "Customs & Central Excise",
      "Startup",
    ],
  },
  {
    id: 3,
    heading: "Banking / Finance",
    style: "three",
    elems: ["GST", "Corporate", "Tax"],
  },
  {
    id: 4,
    heading: "Civil / Debt Matters",
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
      "Criminal",
      "Property",
    ],
  },
];

const MainMenu: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [checkedItem, setCheckedItem] = useState("");

  const router = useRouter();

  const toPush = (e: string) => {
    let url = e.replace(/ /g, "-").toLowerCase();
    setShowMobileMenu(false);
    setShowMenu(false);

    e == "contact" ? router.push(`/${url}`) : router.push(`/lawyer/${url}`);
  };

  return (
    <>
      <div className="container">
        <div className={styles.main_menu}>
          <Link href="/">
            <div className={styles.logo}>JUSTNYAY</div>
          </Link>
          <div className={styles.ham_icon}>
            <GiHamburgerMenu
              className="font-lg hover"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            />
          </div>

          {/* desktop menu */}
          <ul className={styles.links}>
            <Link href="/contact">
              <li>Talk to Lawyer</li>
            </Link>

            <motion.li
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <span>services</span>
              <AnimatePresence exitBeforeEnter>
                {showMenu && (
                  <motion.div
                    key="mega-menu"
                    className={styles.menu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {arr.map((col) => (
                      <div className={styles.column_one} key={col.id}>
                        <div className={styles.column_heading}>
                          {col.heading}
                        </div>
                        <ul>
                          {col.elems.map((elem) => (
                            <li key={elem} onClick={() => toPush(elem)}>
                              {elem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className={styles.column_six}>
                      <div className={styles.column_heading}>Need help?</div>
                      <ul>
                        <li>Need help to find the right lawyer?</li>
                        <li
                          className={styles.cta}
                          onClick={() => toPush("contact")}
                        >
                          start here
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            <Link href="/buy-now">
              <li>Second opinion</li>
            </Link>
            <Link href="/legal-reporter">
              <li>Legal Reporter</li>
            </Link>
          </ul>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${styles.mobile_menu} ${
          showMobileMenu && styles.show_mobile_menu
        }`}
      >
        <div className="container">
          <ul className={styles.mobile_links}>
            <Link href="/buy-now">
              <li>Talk to Lawyer</li>
            </Link>
            <li>
              <span>Services</span>
              <div className={styles.accordian}>
                {arr.map((elem) => (
                  <div key={elem.id} className={styles.accordian_one}>
                    <label htmlFor={elem.style}>
                      <input
                        type="checkbox"
                        className={styles.check}
                        id={elem.style}
                        hidden
                        checked={checkedItem == elem.style}
                        onChange={() => setCheckedItem(elem.style)}
                      />
                      <div className={styles.accordian_heading}>
                        {elem.heading}
                      </div>

                      <ul className={styles.sub_links}>
                        {elem.elems.map((e) => (
                          <li key={e} onClick={() => toPush(e)}>
                            {e}
                          </li>
                        ))}
                      </ul>
                    </label>
                  </div>
                ))}

                <div className={styles.accordian_six}>
                  <label htmlFor="check_six">
                    <input
                      type="checkbox"
                      className={styles.check}
                      id="check_six"
                      hidden
                      checked={checkedItem == "check_six"}
                      onChange={() => setCheckedItem("check_six")}
                    />
                    <div className={styles.accordian_heading}>Need help?</div>
                    <ul className={styles.sub_links}>
                      <li>Need help to find the right lawyer?</li>

                      <li
                        className={styles.cta}
                        onClick={() => toPush("contact")}
                      >
                        start here
                      </li>
                    </ul>
                  </label>
                </div>
              </div>
            </li>

            <li
              onClick={() => {
                setShowMobileMenu(false);
                router.push("/legal-reporter");
              }}
            >
              Legal Reporter
            </li>

            <Link href="/buy-now">
              <li>Contact</li>
            </Link>
            <Link href="/buy-now">
              <li>Second Opinion</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
