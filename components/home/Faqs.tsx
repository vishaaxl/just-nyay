import styles from "./Home.module.scss";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  questionsList: {
    id: number;
    question: string;
    ans: string;
  }[];
}

const FAQs: React.FC<Props> = ({ questionsList }) => {
  const [questionOpen, setQuestionOpen] = useState(1);
  const router = useRouter();

  return (
    <section className={styles.FAQs}>
      <article className="container">
        <div className={styles.section_one}>
          <h1>
            Frequently asked
            <br /> questions
          </h1>
          {router.asPath == "/" && (
            <p>
              Can’t find the answer you’re looking for? We got more{" "}
              <span onClick={() => router.push("/faqs")}>Click Here</span>.
            </p>
          )}
        </div>

        <div className={styles.section_two}>
          {questionsList.map((elem) => (
            <div key={elem.id} className={styles.question_block}>
              <h3
                className={styles.question}
                onClick={() => setQuestionOpen(elem.id)}
              >
                - {elem.question}
              </h3>
              <AnimatePresence exitBeforeEnter>
                {questionOpen == elem.id && (
                  <motion.p
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "", opacity: 1 }}
                    dangerouslySetInnerHTML={{ __html: elem.ans }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default FAQs;
