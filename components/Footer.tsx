import styles from "./Footer.module.scss";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { auth } from "firebase.config";
import { toast } from "react-toastify";

interface Props {}

const sections = [
  {
    id: 1,
    title: "Lawyers in India",
    listElements: [
      { id: "10", title: "Divorce Lawyers", link: "" },
      { id: "11", title: "Property Lawyers", link: "" },
      { id: "12", title: "Civil Lawyers", link: "" },
      { id: "13", title: "Criminal Lawyers", link: "" },
      { id: "14", title: "Family Lawyers", link: "" },
      { id: "15", title: "Cheque Bounce Lawyers", link: "" },
      { id: "16", title: "Labour and Service Lawyers", link: "" },
      { id: "17", title: "Consumer Court", link: "" },
      { id: "18", title: "Motor Accident Lawyers", link: "" },
      { id: "19", title: "Supreme Court Lawyers", link: "" },
    ],
  },
  {
    id: 2,
    title: "LAWYERS IN INDIA",
    listElements: [
      { id: "20", title: "Lawyers in Delhi", link: "" },
      { id: "21", title: "Lawyers in Bangalore", link: "" },
      { id: "22", title: "Lawyers in Mumbai", link: "" },
      { id: "23", title: "Lawyers in Chennai", link: "" },
      { id: "24", title: "Lawyers in Gurgaon", link: "" },
      { id: "25", title: "Lawyers in Noida", link: "" },
      { id: "26", title: "Lawyers in Jaipur", link: "" },
      { id: "27", title: "Lawyers in Chandigarh", link: "" },
      { id: "28", title: "Lawyers in Pune", link: "" },
      { id: "29", title: "Lawyers in Nagpur", link: "" },
    ],
  },
  {
    id: 3,
    title: "LEGAL ADVICE",
    listElements: [
      { id: "30", title: "Divorce", link: "" },
      { id: "31", title: "Family Disput", link: "" },
      { id: "32", title: "Child Custody", link: "" },
      { id: "33", title: "Muslim Law", link: "" },
      { id: "34", title: "Medical Negligence", link: "" },
      { id: "35", title: "Motor Accident", link: "" },
      { id: "36", title: 'Labour & Service",', link: "" },
      { id: "37", title: "Corporate Law", link: "" },
      { id: "38", title: "Arbitration", link: "" },
      { id: "39", title: "Trademark & Copyright", link: "" },
      { id: "310", title: "Customs & Central Excise", link: "" },
      { id: "311", title: "Startup", link: "" },
      { id: "312", title: "", link: "" },
    ],
  },
  {
    id: 4,
    title: "LEGAL ADVICE",
    listElements: [
      { id: "40", title: "Divorce", link: "" },
      { id: "41", title: "Family Disput", link: "" },
      { id: "42", title: "Child Custody", link: "" },
      { id: "43", title: "Muslim Law", link: "" },
      { id: "44", title: "Medical Negligence", link: "" },
      { id: "45", title: "Motor Accident", link: "" },
      { id: "46", title: 'Labour & Service",', link: "" },
      { id: "47", title: "Corporate Law", link: "" },
      { id: "48", title: "Arbitration", link: "" },
      { id: "49", title: "Trademark & Copyright", link: "" },
      { id: "410", title: "Customs & Central Excise", link: "" },
      { id: "411", title: "Startup", link: "" },
      { id: "412", title: "", link: "" },
    ],
  },
];

const Footer: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.section_wrapper}>
          {sections.map((item) => (
            <Section key={item.id} data={item} />
          ))}
        </div>

        <div className={styles.section_one}>
          <ul>
            <li>About Us</li>
            <li onClick={() => router.push("/login/lawyer-signup")}>
              Lawyer sign-up
            </li>
            <li onClick={() => router.push("/login/lawyer")}>Lawyer sign-in</li>
            <li onClick={() => router.push("/login/user")}>User sign-in</li>
            <li
              onClick={() => {
                auth
                  .signOut()
                  .then(() => toast("Logged out", { type: "success" }))
                  .catch((err) => console.log(err));
              }}
            >
              Log out
            </li>
            <li className={styles.icon_wrapper}>
              <AiOutlineTwitter className={styles.icon} />
              <AiOutlineYoutube className={styles.icon} />
              <AiOutlineFacebook className={styles.icon} />
            </li>
          </ul>
        </div>

        <span className={styles.developed}>
          2022 © Ample Media Agency | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

interface SectionProps {
  data: {
    id: number;
    title: string;
    listElements: {
      id: string;
      title: string;
      link: string;
    }[];
  };
}

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <div className={styles.section}>
      <h4 className={styles.heading}>{data.title}</h4>
      <ul>
        {data.listElements.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
