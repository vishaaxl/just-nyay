import styles from "./Footer.module.scss";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { auth } from "firebase.config";
import { toast } from "react-toastify";
import { useAuth } from "context/User";

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
    title: "LEGAL ADVICE",
    listElements: [
      { id: "20", title: "Divorce Legal Advice", link: "" },
      { id: "21", title: "Property Legal Advice", link: "" },
      { id: "22", title: "Criminal Legal Advice", link: "" },
      { id: "23", title: "Recovery Legal Advice", link: "" },
      { id: "24", title: "consumer Legal Advice", link: "" },
      { id: "25", title: "Cheque Bounce Legal Advice", link: "" },
      { id: "26", title: "Indian Kanoon", link: "" },
      { id: "27", title: "Legal Forms", link: "" },
      { id: "28", title: "Legal Help Center", link: "" },
      { id: "29", title: "Posh Training", link: "" },
    ],
  },
  {
    id: 3,
    title: "Lawyer by Matter",
    listElements: [
      { id: "30", title: "Criminal", link: "" },
      { id: "31", title: "Property", link: "" },
      { id: "32", title: "Landlord / Tenant", link: "" },
      { id: "33", title: "Documentation", link: "" },
      { id: "34", title: "Consumer Court", link: "" },
      { id: "35", title: "Civil", link: "" },
      { id: "36", title: "Cheque Bounce", link: "" },
      { id: "37", title: "Recovery", link: "" },
    ],
  },
];

const Footer: React.FC<Props> = () => {
  const router = useRouter();
  const { user } = useAuth();
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
            {user && (
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
            )}
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
