import styles from "./Footer.module.scss";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Router, useRouter } from "next/router";
import { auth } from "firebase.config";
import { toast } from "react-toastify";
import { useAuth } from "context/User";

interface Props {}

const sections = [
  {
    id: 1,
    title: "Lawyers in India",
    listElements: [
      { id: "10", title: "Divorce Lawyers", link: "/lawyers/divorce" },
      { id: "11", title: "Property Lawyers", link: "/lawyers/property" },
      { id: "12", title: "Civil Lawyers", link: "/lawyers/civil" },
      { id: "13", title: "Criminal Lawyers", link: "/lawyers/criminal" },
      { id: "14", title: "Family Lawyers", link: "/lawyers/family-disputes" },
      {
        id: "15",
        title: "Cheque Bounce Lawyers",
        link: "/lawyers/cheque-bounce",
      },
      { id: "16", title: "Labour and Service Lawyers", link: "/lawyers/civil" },
      { id: "17", title: "Consumer Court", link: "/lawyers/consumer-court" },
      {
        id: "18",
        title: "Motor Accident Lawyers",
        link: "/lawyers/motor-accident",
      },
      {
        id: "19",
        title: "Supreme Court Lawyers",
        link: "/lawyers/supreme-court",
      },
    ],
  },
  {
    id: 2,
    title: "LEGAL ADVICE",
    listElements: [
      { id: "20", title: "Divorce Legal Advice", link: "/lawyers/divorce" },
      { id: "21", title: "Property Legal Advice", link: "/lawyers/propert" },
      { id: "22", title: "Criminal Legal Advice", link: "/lawyers/criminal" },
      { id: "23", title: "Recovery Legal Advice", link: "/lawyers/recovery" },
      {
        id: "24",
        title: "consumer Legal Advice",
        link: "/lawyers/consumer-court",
      },
      {
        id: "25",
        title: "Cheque Bounce Legal Advice",
        link: "/lawyers/cheque-bounce",
      },
      { id: "26", title: "Indian Kanoon", link: "/lawyers/" },
      { id: "27", title: "Legal Forms", link: "/lawyers/documentation" },
      { id: "28", title: "Legal Help Center", link: "/lawyers/" },
      { id: "29", title: "Posh Training", link: "/lawyers/" },
    ],
  },
  {
    id: 3,
    title: "Lawyer by Matter",
    listElements: [
      { id: "30", title: "Criminal", link: "/lawyers/criminal" },
      { id: "31", title: "Property", link: "/lawyers/property" },
      {
        id: "32",
        title: "Landlord / Tenant",
        link: "/lawyers/landlord-tenant",
      },
      { id: "33", title: "Documentation", link: "/lawyers/documentation" },
      { id: "34", title: "Consumer Court", link: "/lawyers/consumer" },
      { id: "35", title: "Civil", link: "/lawyers/civil" },
      { id: "36", title: "Cheque Bounce", link: "/lawyers/cheque-bounce" },
      { id: "37", title: "Recovery", link: "/lawyers/recovery" },
    ],
  },
  {
    id: 4,
    title: "Pages",
    listElements: [
      { id: "30", title: "Contact Us", link: "contact-us" },
      { id: "31", title: "Terms and Conditions", link: "terms-and-conditions" },
      { id: "32", title: "Refund Policy", link: "refund-policy" },
      { id: "33", title: "Privacy Policy", link: "privacy-policy" },
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
            <li onClick={() => router.push("/about")}>About Us</li>
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
              <AiOutlineInstagram className={styles.icon} />
              <a
                href="https://www.youtube.com/@LegalReporter/videos"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineYoutube className={styles.icon} />
              </a>
              <a
                href="https://www.facebook.com/legalreporter"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFacebook className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>

        <span className={styles.developed}>
          2022 © Advozone India Pvt Ltd | All Rights Reserved
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
  const router = useRouter();
  return (
    <div className={styles.section}>
      <h4 className={styles.heading}>{data.title}</h4>
      <ul>
        {data.listElements.map((item) => (
          <li key={item.id} onClick={() => router.push(`/${item.link}`)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
