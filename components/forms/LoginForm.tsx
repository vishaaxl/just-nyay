import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

import Input from "components/Input";
import styles from "./ConsultationForm.module.scss";
import * as Yup from "yup";

// database
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

import { auth, db } from "firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Props {}

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const LoginForm: React.FC<Props> = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  // auth
  const generateRecaptcha = () => {
    if (window.recaptchaVerifier) {
      return;
    }

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const requestOtp = async (phoneNumber: string) => {
    setLoading(true);

    // check if number is registered
    const q = query(
      collection(db, "users"),
      where("phoneNumber", "==", `+91${phoneNumber}`)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setError("**user not found");
      return;
    }

    // login process
    generateRecaptcha();

    if (phoneNumber.length != 10) {
      setError("**Invalid phone number");
      setLoading(false);
      return;
    }

    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setOtpSent(true);
        setLoading(false);

        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        setOtpSent(false);
        setLoading(false);
        console.log(error);
        setError("*something went wrong, try refreshing the page");
      });
  };

  const confirmOtp = (otp: string) => {
    if (otp.length == 6) {
      setLoading(true);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((res: any) => {
          const user = res.user;
          router.push(`/users/${user.uid}`);
          setLoading(false);
        })
        .catch((err: any) => {
          setOtpSent(false);
          setLoading(false);
          setError("*something went wrong, try refreshing the page");
        });
    }
  };

  return (
    <div className={styles.login_form} style={{}}>
      <Formik
        initialValues={{
          otp: "",
          phoneNumber: "",
        }}
        validationSchema={Yup.object().shape({
          phoneNumber: Yup.number()
            .typeError("Must be a number")
            .min(10000000, "Enter a valid number!")
            .max(100000000000, "Enter a valid number")
            .required("Required"),
          otp: Yup.number()
            .typeError("Must be a number")
            .min(99999, "Invalid otp!")
            .max(1000000, "Invalid otp! ")
            .required("Required"),
        })}
        onSubmit={(values) => {}}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className={styles.block}>
              <h3 className={styles.block_heading}>Welcome to JustNyay</h3>
              <div className={styles.input_block} style={{}}>
                <Input
                  name="phoneNumber"
                  placeholder="Enter your phone number (+91)"
                />
              </div>
              {otpSent && (
                <div className={styles.input_block} style={{}}>
                  <Input name="otp" placeholder="Confirm OTP" />
                </div>
              )}
              <div className="error">{error}</div>
            </div>
            <div id="recaptcha-container"></div>

            {!otpSent ? (
              <button
                style={{ opacity: loading ? "0.5" : 1 }}
                className="primary-btn"
                onClick={() => !loading && requestOtp(values.phoneNumber)}
              >
                Send Otp
              </button>
            ) : (
              <button
                style={{ opacity: loading ? "0.5" : 1 }}
                className="primary-btn"
                onClick={() => !loading && confirmOtp(values.otp)}
              >
                Log in
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
