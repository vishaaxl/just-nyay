import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import Input from "components/Input";
import { toast } from "react-toastify";
import { useAuth } from "context/User";
import {
  collection,
  getDocs,
  limit,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebase.config";

interface Props {}

const LawyerProfile: React.FC<Props> = () => {
  const [submitting, setSubmitting] = useState(false);
  const { user, userInfo } = useAuth();

  return (
    <div className={styles.user_profile_form}>
      <Formik
        enableReinitialize
        initialValues={{
          firstname: userInfo.firstname,
          email: userInfo.email,
          lastname: userInfo.lastname,
          state: userInfo.state,
          city: userInfo.city,
          postalCode: userInfo.postalCode,
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required("Required"),
          lastname: Yup.string().required("Required"),
          email: Yup.string().email().required("Required"),
          state: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          postalCode: Yup.string().required("Required"),
        })}
        onSubmit={async (values) => {
          // check user
          setSubmitting(true);
          const q = query(
            collection(db, "lawyers"),
            where("phoneNumber", "==", user.phoneNumber),
            limit(1)
          );

          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((document) => {
            const id = document.id;
            const docRef = doc(db, "lawyers", id);
            updateDoc(docRef, values)
              .then(() => {
                setSubmitting(false);

                toast("Updated Information", {
                  type: "success",
                });
              })
              .catch((err) => {
                setSubmitting(false);

                toast("Please try again later", {
                  type: "error",
                });
                console.log(err);
              });
          });
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className={styles.block}>
              <div className={styles.input_block}>
                <Input name="firstname" placeholder="First Name" />
                <Input name="lastname" placeholder="Last Name" />
              </div>

              <div className={styles.input_block}>
                <Input name="email" placeholder="Email" type="email" />
              </div>

              <div className={styles.input_block}>
                <Input name="state" placeholder="State" />
                <Input name="city" placeholder="City" />
              </div>
              <div className={styles.input_block}>
                <Input
                  name="postalCode"
                  placeholder="Postal Code"
                  type="number"
                />
              </div>
            </div>

            <button className="primary-btn" disabled={submitting}>
              Save changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LawyerProfile;
