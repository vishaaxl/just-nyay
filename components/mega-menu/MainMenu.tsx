import styles from "./MainMenu.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

interface Props {}

const MainMenu: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [checkedItem, setCheckedItem] = useState("");

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
            <motion.li
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <span>Talk to a laywer</span>
              <AnimatePresence exitBeforeEnter>
                {showMenu && (
                  <motion.div
                    key="mega-menu"
                    className={styles.menu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.column_one}>
                      <div className={styles.column_heading}>
                        Personal / family
                      </div>
                      <ul>
                        <li>Divorce</li>
                        <li>Family Dispute</li>
                        <li>Child Custody</li>
                        <li>Muslim Law</li>
                        <li>Medical Negligence</li>
                        <li>Motor Accident</li>
                        <li>Wills / Trusts</li>
                        <li>Labour & Service</li>
                      </ul>
                    </div>
                    <div className={styles.column_two}>
                      <div className={styles.column_heading}>Corporate</div>
                      <ul>
                        <li>Arbitration</li>
                        <li>Trademark & Copyright</li>
                        <li>Customs & Central Excise</li>
                        <li>Startup</li>
                        <li>Banking / Finance</li>
                        <li>GST</li>
                        <li>Corporate</li>
                        <li>Tax</li>
                      </ul>
                    </div>
                    <div className={styles.column_three}>
                      <div className={styles.column_heading}>civil</div>
                      <ul>
                        <li>Documentation</li>
                        <li>Consumer Court</li>
                        <li>Civil</li>
                        <li>Cheque Bounce</li>
                        <li>Recovery</li>
                      </ul>
                    </div>
                    <div className={styles.column_four}>
                      <div className={styles.column_heading}>
                        Criminal / property
                      </div>
                      <ul>
                        <li>Criminal</li>
                        <li>Property</li>
                        <li>Landlord / Tenant</li>
                        <li>Cyber Crime</li>
                      </ul>
                    </div>
                    <div className={styles.column_five}>
                      <div className={styles.column_heading}>Others</div>
                      <ul>
                        <li>Armed Forces Tribunal</li>
                        <li>Supreme Court</li>
                        <li>Insurance</li>
                        <li>Immigration</li>
                        <li>International Law</li>
                      </ul>
                    </div>
                    <div className={styles.column_six}>
                      <div className={styles.column_heading}>Need help?</div>
                      <ul>
                        <li>Need help to find the right lawyer?</li>
                        <li className={styles.cta}>start here</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            <li>about</li>
            <li>Contact</li>
            <li>book consultation</li>
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
            <li>
              <span>Talk to a lawer</span>
              <div className={styles.accordian}>
                <div className={styles.accordian_one}>
                  <label htmlFor="check">
                    <input
                      type="checkbox"
                      className={styles.check}
                      id="check"
                      hidden
                      checked={checkedItem == "check"}
                      onChange={() => setCheckedItem("check")}
                    />
                    <div className={styles.accordian_heading}>
                      Personal / family
                    </div>

                    <ul className={styles.sub_links}>
                      <li>Divorce</li>
                      <li>Family Dispute</li>
                      <li>Child Custody</li>
                      <li>Muslim Law</li>
                      <li>Medical Negligence</li>
                      <li>Motor Accident</li>
                      <li>Wills / Trusts</li>
                      <li>Labour & Service</li>
                    </ul>
                  </label>
                </div>
                <div className={styles.accordian_two}>
                  <label htmlFor="check_two">
                    <input
                      type="checkbox"
                      className={styles.check}
                      id="check_two"
                      hidden
                      checked={checkedItem == "check_two"}
                      onChange={() => setCheckedItem("check_two")}
                    />
                    <div className={styles.accordian_heading}>Corporate</div>
                    <ul className={styles.sub_links}>
                      <li>Arbitration</li>
                      <li>Trademark & Copyright</li>
                      <li>Customs & Central Excise</li>
                      <li>Startup</li>
                      <li>Banking / Finance</li>
                      <li>GST</li>
                      <li>Corporate</li>
                      <li>Tax</li>
                    </ul>
                  </label>
                </div>
                <div className={styles.accordian_three}>
                  <label htmlFor="check_three">
                    <input
                      type="checkbox"
                      className={styles.check}
                      id="check_three"
                      hidden
                      checked={checkedItem == "check_three"}
                      onChange={() => setCheckedItem("check_three")}
                    />
                    <div className={styles.accordian_heading}>civil</div>
                    <ul className={styles.sub_links}>
                      <li>Documentation</li>
                      <li>Consumer Court</li>
                      <li>Civil</li>
                      <li>Cheque Bounce</li>
                      <li>Recovery</li>
                    </ul>
                  </label>
                </div>
                <div className={styles.accordian_four}>
                  <label htmlFor="check_four">
                    <input
                      type="checkbox"
                      className={styles.check}
                      id="check_four"
                      hidden
                      checked={checkedItem == "check_four"}
                      onChange={() => setCheckedItem("check_four")}
                    />
                    <div className={styles.accordian_heading}>
                      Criminal / property
                    </div>
                    <ul className={styles.sub_links}>
                      <li>Criminal</li>
                      <li>Property</li>
                      <li>Landlord / Tenant</li>
                      <li>Cyber Crime</li>
                    </ul>
                  </label>
                </div>
                <div className={styles.accordian_five}>
                  <label htmlFor="check_five">
                    <input
                      type="checkbox"
                      className={styles.check}
                      id="check_five"
                      hidden
                      checked={checkedItem == "check_five"}
                      onChange={() => setCheckedItem("check_five")}
                    />
                    <div className={styles.accordian_heading}>Others</div>
                    <ul className={styles.sub_links}>
                      <li>Armed Forces Tribunal</li>
                      <li>Supreme Court</li>
                      <li>Insurance</li>
                      <li>Immigration</li>
                      <li>International Law</li>
                    </ul>
                  </label>
                </div>
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
                      <li className={styles.cta}>start here</li>
                    </ul>
                  </label>
                </div>
              </div>
            </li>
            <li>about</li>
            <Link href="/contact">
              <li>Contact</li>
            </Link>

            <li>book consultation</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
