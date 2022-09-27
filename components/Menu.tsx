import styles from "./Menu.module.scss";
import { AiFillCloseSquare, AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const Menu: React.FC<Props> = ({ setMobileMenu }) => {
  const [checkedItem, setCheckedItem] = useState("");

  return (
    <motion.section
      className={styles.mobile_menu}
      initial={{ opacity: 1, x: "-100%" }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, x: "-100%", transition: { duration: 0.3 } }}
    >
      <div className="container">
        <AiFillCloseSquare
          className={styles.close_icon}
          onClick={() => setMobileMenu(false)}
        />

        <div className={styles.links_container}>
          <span className={styles.link}>Talk to Lawyer</span>
          <div className={styles.link}>
            <span>
              Services
              <AiFillCaretDown />
            </span>

            {arr.map((item) => (
              <div className={styles.accordian} key={item.id}>
                <label htmlFor={item.style}>
                  <input
                    hidden
                    type="checkbox"
                    className={styles.check}
                    id={item.style}
                    checked={checkedItem == item.style}
                    onChange={() =>
                      setCheckedItem((prev) =>
                        prev == item.style ? "" : item.style
                      )
                    }
                  />
                  <span>{item.heading}</span>
                  <ul>
                    {item.elems.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </label>
              </div>
            ))}
          </div>

          <span className={styles.link}>Legal Reporter</span>
          <span className={styles.link}>Contact</span>
          <span className={styles.link}>About us</span>
          <span className={styles.link}>Second Opinion</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Menu;
