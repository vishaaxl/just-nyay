import styles from "./FAQs.module.css";

interface Props {
  questionsList?: {
    id: number;
    question: string;
    ans: string;
  }[];
}

const faqs = [
  {
    id: 1,
    question: "Is it like an Appointment I am getting when I am paying?",
    ans: "NO, it’s instant. There is no appointment you need to take. Just call on the number you receive after buying consultation minutes",
  },
  {
    id: 2,
    question: "Whose number I will be getting when I buy consultation minutes?",
    ans: "It is our System’s standard number. You can save the number for all your future calls. Every time when you need to consult please call on this number",
  },
  {
    id: 3,
    question:
      "Who are these experts for consultation? Can I choose them to talk?",
    ans: "They are highly experienced Lawyers with hands-on knowledge and expertise on all the key fields of Law in India. They all are practicing in various High Court in Indian.<br/><br/> No You cannot choose them because they are chosen by Technology Algorithm based on their practice Area and experience; this is LegalKart’s “Smart Match” Technology ensuring you to connect with best available expert.",
  },
  {
    id: 5,
    question: "Whose number I will be getting when I buy consultation minutes?",
    ans: "It is our System’s standard number. You can save the number for all your future calls. Every time when you need to consult please call on this number",
  },
  {
    id: 6,
    question: "Whose number I will be getting when I buy consultation minutes?",
    ans: "It is our System’s standard number. You can save the number for all your future calls. Every time when you need to consult please call on this number",
  },
];

const FAQs: React.FC<Props> = ({ questionsList }) => {
  return (
    <section className={styles.FAQs}>
      <article className="container">
        <div className={styles.section_one}>
          <h1>
            Frequently asked
            <br /> questions
          </h1>
          <p>
            Can’t find the answer you’re looking for? Reach out to our{" "}
            <span>customer support</span> team.
          </p>
        </div>
        {questionsList ? (
          <div className={styles.section_two}>
            {questionsList.map((elem) => (
              <div key={elem.id} className={styles.question_block}>
                <h3 className={styles.question}>- {elem.question}</h3>
                <p dangerouslySetInnerHTML={{ __html: elem.ans }} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.section_two}>
            {faqs.map((elem) => (
              <div key={elem.id} className={styles.question_block}>
                <h3 className={styles.question}>- {elem.question}</h3>
                <p dangerouslySetInnerHTML={{ __html: elem.ans }} />
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default FAQs;