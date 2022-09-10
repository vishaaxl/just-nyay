import styles from "./MainMenu.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

interface Props {}

const MainMenu: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container">
      <div className={styles.main_menu}>
        <div className={styles.logo}>JUSTNYAY</div>
        <div className={styles.ham_icon}>
          <GiHamburgerMenu className="font-lg hover" />
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
  );
};

export default MainMenu;
