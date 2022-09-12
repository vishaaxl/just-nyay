import styles from "./Footer.module.css";

import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

interface Props {}

const footer_data = [
  {
    id: 1,
    heading: "solutions",
    values: [
      "property",
      "Document",
      "Startup",
      "Divorce",
      "Ask Lawyer",
      "Lawyers click here",
    ],
  },
  {
    id: 2,
    heading: "support",
    values: ["property", "Document", "Startup"],
  },
  {
    id: 3,
    heading: "company",
    values: ["about", "contact us", "youtube", "Blogs"],
  },
  {
    id: 4,
    heading: "legal",
    values: ["privacy police", "Terms of use"],
  },
];

const Footer: React.FC<Props> = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.main_header}>
            <h2>JustNyay</h2>
            <div className={styles.icon_wrapper}>
              <AiFillYoutube className="font-med hover hover-scale" />
              <AiFillInstagram className="font-med hover hover-scale" />
              <AiFillFacebook className="font-med hover hover-scale" />
            </div>
          </div>

          <div className={styles.content_wrapper}>
            {footer_data.map((data) => (
              <div className={styles.box} key={data.id}>
                <div className={styles.h3}>{data.heading}</div>
                {data.values.map((val) => (
                  <p key={val}>{val}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="ample-media">Developed By &#169;Ample Media Agency</div>
    </>
  );
};

export default Footer;
