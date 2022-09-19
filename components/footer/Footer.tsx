import styles from "./Footer.module.css";

import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { useRouter } from "next/router";

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
    values: ["about", "contact us", "youtube", "Director"],
  },
  {
    id: 4,
    heading: "legal",
    values: ["privacy police", "Terms of use"],
  },
];

const Footer: React.FC<Props> = () => {
  const router = useRouter();

  const linkBuilder = (val: string, heading: string) => {
    let link: string;
    switch (heading) {
      case "solutions":
        link =
          val == "Lawyers click here"
            ? "/lawyer/register"
            : (link = `/lawyer/${val.replace(/ /g, "-")}`);

        break;
      case "support":
        link = `/lawyer/${val}`;
        break;
      default:
        link = `/${val}`;
        break;
    }

    return link.toLowerCase();
  };
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
                {data.values.map((val) => {
                  let link = linkBuilder(val, data.heading);
                  return (
                    <p key={val} onClick={() => router.push(`${link}`)}>
                      {val}
                    </p>
                  );
                })}
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
