import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import Input from "components/Input";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "firebase.config";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface Props {}

const feedbackArray = [
  { rating: 1, text: "Very Satisfied" },
  { rating: 2, text: "Satisfied" },
  { rating: 3, text: "Unsatisfied" },
  { rating: 4, text: "Very Unsatisfied" },
  { rating: 5, text: "Neutral" },
];

const FeedBack: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(1);
  const router = useRouter();

  return (
    <div className={styles.consultation_form}>
      <Formik
        enableReinitialize
        initialValues={{
          phoneNumber: "+91",
          email: "",
          description: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email(),
          phoneNumber: Yup.string().required("Required").min(10),
          description: Yup.string(),
        })}
        onSubmit={(values) => {
          setLoading(true);
          const dbRef = collection(db, "feedbacks");

          addDoc(dbRef, {
            ...values,
            feedback: feedbackArray[feedback - 1],
            createdAt: serverTimestamp(),
          })
            .then((docRef) => {
              toast("Your feedback has been submitted.", {
                type: "success",
              });
              setLoading(false);

              router.push("/");
            })
            .catch((error) => {
              toast("Something went wrong please try again or call later.", {
                type: "success",
              });
              setLoading(false);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.block}>
              <p className={styles.block_description}>
                We would love to hear your feedback, suggestions, or problems
                with anything so we can improve!
              </p>
            </div>
            {/* block two */}
            <div className={styles.block}>
              <div className={styles.input_block}>
                <Input name="phoneNumber" placeholder="Your Phone Number*" />
              </div>
              <div className={styles.input_block}>
                <Input name="email" placeholder="E-mail" />
              </div>
              <div className={`input-block custom-input`}>
                <label htmlFor="feedback" style={{ marginBottom: "1.5rem" }}>
                  How satisfied are your with our services?
                </label>
                {feedbackArray.map((e) => (
                  <div
                    className=""
                    key={e.text}
                    style={{
                      fontSize: "1rem",
                      display: "flex",
                      gap: "1rem",
                      marginBottom: ".5rem",
                    }}
                  >
                    <input
                      id={`${e.rating.toString()}-feedback-label`}
                      type="checkbox"
                      name="feedback"
                      style={{ transform: "Scale(1.15)" }}
                      onChange={() => setFeedback(e.rating)}
                      checked={feedback == e.rating}
                    />
                    <label htmlFor={`${e.toString()}-feedback-label`}>
                      {e.text}
                    </label>
                  </div>
                ))}
              </div>

              <div className={styles.input_block}>
                <Input
                  name="description"
                  placeholder="Comments"
                  component="textarea"
                  rows="4"
                />
              </div>
            </div>
            {/* block three */}

            <button className="primary-btn" disabled={loading}>
              Send Feedback
            </button>
          </Form>
        )}
      </Formik>
      <p style={{ lineHeight: 1.4, marginTop: "4rem" }}>
        <div className="line">
          <MdLocationOn className="line-icon" />
          <span>
            10060, Tower 1, Mahagun Mywood, Gaur City-2, Greater Noida West-
            201009
          </span>
        </div>
        <div className="line">
          <MdPhone className="line-icon" />
          <span>
            <a
              href="tel: 9318428656"
              className={styles.accent_underline}
              style={{ cursor: "pointer" }}
            >
              +91 9318428656
            </a>
          </span>
        </div>
        <div className="line">
          <MdOutlineEmail className="line-icon" />
          <span>
            <a
              href="mailto: info@justnyay.com"
              className={styles.accent_underline}
              style={{ cursor: "pointer" }}
            >
              info@justnyay.com
            </a>
          </span>
        </div>
      </p>
      {/* <p style={{ lineHeight: 1.4 }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        Operating Address * C-2/6, Gulmohar Vihar, Near lshwar Prem Aashram,
        Kanpur-208014
        <br />
        <br /> Regional Office * 10060, Tower 1, Mahagun Mywood, Gaur City-2,
        Greater Noida West- 201009
        <br />
        <br />
        E-mail *&nbsp;{" "}
        <a
          href="mailto: info@justnyay.com"
          className={styles.accent_underline}
          style={{ cursor: "pointer" }}
        >
          info@justnyay.com
        </a>
        <br />
        <br />
        Toll Free number / Contact number *&nbsp;+91 9318428656
      </p> */}
    </div>
  );
};

export default FeedBack;
