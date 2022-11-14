import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import { toast } from "react-toastify";
import { db } from "firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {}

const LawyerSignup: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.lawyer_signup_form}>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          state: "",
          city: "",
          barCouncilId: "",
          IDnumber: "",
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
          IDnumber: Yup.string().required("Required"),
          year: Yup.number().typeError("Invalid year").required("Required"),
          experience: Yup.number()
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
          await addDoc(docRef, {
            ...values,
            verified: false,
            phoneNumber: `+91${values.phoneNumber.substr(
              values.phoneNumber.length - 10
            )}`,
          })
            .then((docRef) => {
              toast("Request sent, check email", {
                type: "success",
              });

              router.push("/login/lawyer");
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
                <Input name="IDnumber" placeholder="ID no." />
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
