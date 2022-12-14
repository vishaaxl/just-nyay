import styles from "./Menu.module.scss";
import { AiFillCloseSquare, AiFillCaretDown, AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

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
      "Cheque Bounce Notice ",
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
      "Property Verification ",
      "Property Registration",
      "Gift Deed ",
      "Lease Agreement",
    ],
  },
];

const Menu: React.FC<Props> = ({ setMobileMenu }) => {
  const [checkedItem, setCheckedItem] = useState("one");
  const [checkedSection, setCheckedSection] = useState("");

  const router = useRouter();

  const kebab = (str: string) => {
    return str.replace(/\s/g, "-").replace(/\//g, "").toLowerCase();
  };

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
          <div className={styles.link}>
            <span
              onClick={() =>
                setCheckedSection((prev) =>
                  prev == "lawyers" ? "" : "lawyers"
                )
              }
            >
              Ask for Lawyer
              <AiFillCaretDown />
            </span>
            {checkedSection == "lawyers" &&
              lawyers.map((item) => (
                <motion.div
                  className={styles.accordian}
                  key={item.id}
                  initial={{ height: 0 }}
                  animate={{ height: "" }}
                >
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
                        <li
                          key={e}
                          onClick={() => {
                            setMobileMenu(false);
                            router.push(`/lawyers/${kebab(e)}`);
                          }}
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </label>
                </motion.div>
              ))}
          </div>

          <span
            className={styles.link}
            onClick={() => {
              setMobileMenu(false);
              router.push("/second-opinion");
            }}
            style={{
              color: router.asPath.includes("second-opinion") ? "#b68c5a" : "",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>Second Opinion</span> <AiFillStar style={{ opacity: 0.8 }} />
          </span>
          <div className={styles.link}>
            <span
              onClick={() =>
                setCheckedSection((prev) =>
                  prev == "services" ? "" : "services"
                )
              }
            >
              Legal Services
              <AiFillCaretDown />
            </span>

            {checkedSection == "services" &&
              services.map((item) => (
                <motion.div
                  className={styles.accordian}
                  key={item.id}
                  initial={{ height: 0 }}
                  animate={{ height: "" }}
                >
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
                        <li
                          key={e}
                          onClick={() => {
                            setMobileMenu(false);
                            router.push(`/lawyers/${kebab(e)}`);
                          }}
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </label>
                </motion.div>
              ))}
          </div>
          <span
            className={styles.link}
            onClick={() => {
              router.push("/legal-reporter");
              setMobileMenu(false);
            }}
            style={{
              color: router.asPath.includes("legal-reporter") ? "#b68c5a" : "",
            }}
          >
            Legal Reporter TV
          </span>
          <span
            className={styles.link}
            onClick={() => {
              setMobileMenu(false);
              router.push("/about");
            }}
            style={{
              color: router.asPath.includes("about") ? "#b68c5a" : "",
            }}
          >
            About Us
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default Menu;
