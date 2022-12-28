import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import { toast } from "react-toastify";
import { db } from "firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

interface Props {}

const specializationArray = [
  "Corporate Law",
  "Banking Law",
  "Cyber Law",
  "Administrative Law",
  "Intellectual Property Law",
  "Commercial Law",
  "Maritime Law",
  "Competition Law",
  "Consumer Law",
  "International Law",
  "Company Law",
  "Real Estate Law",
  "Criminal Law",
  "Civil Law",
  "Labour Law",
  "Tax Law",
  "Business Law",
  "Media Law",
  "Environmental Law",
  "Air and Space Law",
  "Energy Law",
  "Mergers and Acquisitions Law",
  "Human Rights Law",
  "Patent Law",
];

declare global {
  interface Window {
    Razorpay: any;
  }
}

const LawyerSignup: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // razorpay related stuff
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async (docId: string, values: any) => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const { data } = await axios.post("/api/user-payment", { amount: "999" });

    let options = {
      key: process.env.NEXT_PUBLIC_RAZOR_PAY_ID,
      name: "Just-nyay Pvt Ltd",
      order_id: data.id,
      currnecy: data.currency,
      amount: 699,
      description: "Payment for just-nyay",
      image:
        "https://justnyay.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75",
      handler: async function (response: any) {
        // Validate payment at server - using webhooks is a better idea.
        const razorpayResponse = {
          orderCreationId: data.order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const success = await fetch("/api/success", {
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          referrerPolicy: "no-referrer",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(razorpayResponse),
        }).then((res) => res.json());

        if (success.msg == "success") {
          toast("Payment Successful", {
            type: "success",
          });

          const docRef = doc(db, "lawyers", docId);
          await updateDoc(docRef, {
            payment: true,
          }).then(() => router.push("/login/lawyer"));
        }
      },
      prefill: {
        name: values.firstname + " " + values.lastname,
        email: values.email,
        contact: `+91${values.phoneNumber.substr(
          values.phoneNumber.length - 10
        )}`,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className={styles.lawyer_signup_form}>
      <Formik
        enableReinitialize
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          state: "",
          city: "",
          barCouncilId: "",
          specialization: "Corporate Law",
          year: "",
          experience: "",
          phoneNumber: "",
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required("Required"),
          lastname: Yup.string().required("Required"),
          email: Yup.string().email().required("Required"),

          state: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          barCouncilId: Yup.string().required("Required"),
          specialization: Yup.string().required("Required"),
          year: Yup.number().typeError("Invalid year").required("Required"),
          experience: Yup.number()
            .max(40, "Enter valid experience")
            .typeError("Invalid year")
            .required("Required"),
          phoneNumber: Yup.number()
            .typeError("Must be a number")
            .min(10000000, "Enter a valid number!")
            .max(100000000000, "Enter a valid number")
            .required("Required"),
        })}
        onSubmit={async (values) => {
          setLoading(true);
          const docRef = collection(db, "lawyers");
          const q = query(
            docRef,
            where(
              "phoneNumber",
              "==",
              `+91${values.phoneNumber.substr(values.phoneNumber.length - 10)}`
            ),
            limit(1)
          );

          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            toast("Already Registered", {
              type: "warning",
            });
            router.push("/login/lawyer");
          }

          await addDoc(docRef, {
            ...values,
            payment: false,
            verified: false,
            createdAt: serverTimestamp(),
            phoneNumber: `+91${values.phoneNumber.substr(
              values.phoneNumber.length - 10
            )}`,
          })
            .then((docRef) => {
              toast("Continue Payment to proceed", {
                type: "success",
              });

              makePayment(docRef.id, values);

              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              toast("Something went Wrong", {
                type: "error",
              });
              setLoading(false);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.block}>
              <h3 className={styles.block_heading}>Lawyer Signup</h3>
              <div className={styles.input_block}>
                <Input name="firstname" placeholder="First Name" />
              </div>
              <div className={styles.input_block}>
                <Input name="lastname" placeholder="Last Name" />
              </div>
              <div className={styles.input_block}>
                <Input name="email" placeholder="E-mail" />
              </div>

              <div className={styles.input_block}>
                <Input name="state" placeholder="State" />
                <Input name="city" placeholder="City" />
              </div>
              <div className={styles.input_block}>
                <Input name="barCouncilId" placeholder="Bar council ID" />
                <Input
                  name="specialization"
                  placeholder="Specialization"
                  component="select"
                >
                  {specializationArray.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </Input>
              </div>
              <div className={styles.input_block}>
                <Input name="year" placeholder="Year" />
              </div>
            </div>
            {/* block two */}
            <div className={styles.block}>
              <h3 className={styles.block_heading}>Additional Information</h3>

              <div className={styles.input_block}>
                <Input
                  name="experience"
                  placeholder="Years of experience"
                  type="number"
                />
              </div>
              <div className={styles.input_block}>
                <Input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
            </div>

            <button className="primary-btn" disabled={loading}>
              Become a just-nyay lawyer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LawyerSignup;
