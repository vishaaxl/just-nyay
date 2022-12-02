import PageHeading from "components/PageHeading";
import PriceChart from "components/Pricing";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/page.module.scss";

interface Props {}

const SecondOpinion: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Just Nyay | Legal Issue No Issue</title>

        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta
          name="keywords"
          content="legal, reporter, case, court, solutions"
        ></meta>
      </Head>
      <div
        className="page-heading"
        style={{
          textAlign: "left",
          fontWeight: 600,
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          alt=""
          src="/images/layer.jpg"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: "-1" }}
        />
        <div className="container">Second Opinion</div>
      </div>
      <div className="container">
        <h3 className={styles.main_heading}>
          Can I Get a{" "}
          <span style={{ textDecoration: "underline" }}>Second Opinion</span>{" "}
          for My Legal Case?
        </h3>
        <ul className={styles.para}>
          <li>1. Is your case also going on in court?</li>
          <li>
            2. Have you also been waiting for years for your case to end soon?
          </li>
          <li>
            3. Do you also feel that the legal advice you are getting is not
            enough?
          </li>

          <li>
            4. Do you also think that it will be better if you get this legal
            advice from a big lawyer of the country?
          </li>
          <li>
            5. Are you a Legal Practitioner and stuck with some aspect of the
            case?
          </li>
          <li>
            6. Are you a Law graduate and want to talk to the top lawyers of the
            country about your career?
          </li>
        </ul>

        <div className="container" style={{ marginTop: "1rem" }}>
          <Image
            src="/images/case-2.jpeg"
            alt=""
            height="50"
            width="100%"
            objectFit="contain"
            layout="responsive"
          />
        </div>

        <h3 className={styles.main_heading}>Q. Need for a second opinion!</h3>
        <p className={styles.para}>
          A. The legal process in India is a complex system. The Indian legal
          system was first codified by the British. Most of the laws governing
          India are the laws of the British era. The laws made during British
          rule were made to govern the Indians. Therefore the process of law is
          much complex and beyond simple understanding. The language of law in
          India and their definitions are also beyond the comprehension of the
          common man. That&rsquo;s why as soon as you get caught in the clutches
          of any law, you go to the lawyer. It is believed that the lawyer you
          have done for your case has better legal understanding and he is also
          well acquainted with the decisions of the High Courts and Supreme
          Court of the country. But it is also seen that a lawyer with common
          legal sense can also spoil your case. That&rsquo;s why you also need a
          second opinion for your case.
        </p>
        <p className={styles.para}>
          As soon as you get in trouble in any criminal case, family matter,
          civil matter or tax matter, then you have to face the court procedures
          and have to leave all your personal work for many years. You hire a
          lawyer to deal with these cases and expect the lawyer to have a
          thorough knowledge of all kinds of laws. But sometimes it also happens
          that the person whom you have chosen to be an Advocate lacks legal
          knowledge or is not able to take your case in the right direction. In
          these circumstances, you need such an experienced Advocate who will
          take your case in the right direction and you will get relief in your
          case. At this time you need a second opinion the most.
        </p>
        <h3 className={styles.main_heading}>Q. Benefits of Second Opinion!</h3>
        <p className={styles.para}>
          As soon as you get in trouble in any criminal case, family matter,
          civil matter or tax matter, then you have to face the court procedures
          and have to leave all your personal work for many years. You hire a
          lawyer to deal with these cases and expect the lawyer to have a
          thorough knowledge of all kinds of laws. But sometimes it also happens
          that the person whom you have chosen to be an Advocate lacks legal
          knowledge or is not able to take your case in the right direction. In
          these circumstances, you need such an experienced Advocate who will
          take your case in the right direction and you will get relief in your
          case. At this time you need a second opinion the most.
        </p>
        <div className="container" style={{ marginTop: "-2rem" }}>
          <Image
            src="/images/about-2.jpeg"
            alt=""
            height="70"
            width="100%"
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <h3 className={styles.main_heading}>Q. Whom to Get Second Opinion!</h3>
        <p className={styles.para}>
          A. The judiciary of India is mainly divided into three parts, the
          lower courts, the High Courts and the Supreme Court. According to the
          legal process, whether the case is civil or criminal, it starts with
          the lower courts. As the stage of the case progresses, the matter goes
          through the High Court to the Supreme Court of the country. Of course,
          from the lower court to the Supreme Court, the matter takes a larger
          form, so the lawyers practising in the Supreme Court read and
          understand every aspect of the case. Constitutional matters, writ
          cases, all kinds of appeals are heard in the Supreme Court, so only
          that lawyer can become a successful lawyer who has knowledge of every
          aspect of Law. Just Nyay will get you directly in touch with lawyers
          who have vast experience in legal practice.
        </p>
      </div>
      <PriceChart />
    </>
  );
};

export default SecondOpinion;
