import type { NextPage } from "next";
import styles from "styles/Lawyer.module.css";

import { FaSuitcase } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdTouchApp } from "react-icons/md";

import RegisterForm from "components/consultation-form/RegisterForm";
import FAQs from "components/faqs/FAQs";
import PageHeading from "components/page-heading/PageHeading";

const questions = [
  {
    id: 1,
    question: "What is JustNyay?",
    ans: "LawRato is India's leading legal advice and lawyer search platform! We are a curated online marketplace that connects our network of high-quality lawyers with business clients. We provide a one-stop platform to ask, answer, discuss legal questions, and from time to time, we even post legal updates and news for those of you who can't get enough of law-related newsbytes!",
  },
  {
    id: 2,
    question: "Is JustNyay a law firm?",
    ans: "No, LawRato is not a law firm. We are a neutral and transparent legal tech platform that connects our network of high-quality lawyers with business clients. LawRato does not entertain and take up any client matter directly.",
  },
  {
    id: 3,
    question: "What happens after listing myself with JustNyay",
    ans: "They are highly experienced Lawyers with hands-on knowledge and expertise on all the key fields of Law in India. They all are practicing in various High Court in Indian.<br/><br/> No You cannot choose them because they are chosen by Technology Algorithm based on their practice Area and experience; this is LegalKart’s “Smart Match” Technology ensuring you to connect with best available expert.",
  },
  {
    id: 5,
    question: "Why should I sign up with LawRato?",
    ans: `Our registered lawyers get exclusive access to queries or cases posted on LawRato by members of the public. Through LawRato, this may even lead to a formal engagement with the client! Registered lawyers also get to answer questions posed by members of the public to gain ratings and reviews. If you are a registered lawyer, you can be sure to get more exposure through LawRato than if you choose to remain anonymous.
    <br/><br/>

If you are not registered with us, you may only access the free content offered by our platform, such as some of our legal news and updates. You will not be able to search for potential clients, be engaged through the client users on our website.`,
  },
  {
    id: 6,
    question: "Is there a cost to join or monthly fee to participate?",
    ans: "No. There is no cost to join and no monthly subscription.",
  },
];

const Register: NextPage = () => {
  return (
    <>
      <PageHeading title="Let's get started!" />

      <section className="">
        <div className="main_login_form">
          <RegisterForm />
        </div>

        <div className={styles.testimony}>
          <div className={`${styles.wrapper} container`}>
            <div className={styles.block}>
              <FaSuitcase className={styles.icon} />
              <h3>Build Online Brand</h3>
              <p>
                Showcase your expertise, capabilities and achievements in the
                legal field.
              </p>
            </div>
            <div className={styles.block}>
              <MdTouchApp className={styles.icon} />
              <h3>Reach More Clients</h3>
              <p>
                Increase your business prospects by getting in front of new
                potential clients.
              </p>
            </div>
            <div className={styles.block}>
              <BsFillChatLeftTextFill className={styles.icon} />
              <h3>Grow Your Reputation</h3>
              <p>Answer legal questions and stand out among the rest.</p>
            </div>
          </div>
        </div>
        <FAQs questionsList={questions} />
      </section>
    </>
  );
};

export default Register;
