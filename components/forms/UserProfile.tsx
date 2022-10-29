import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import { toast } from "react-toastify";
import { useAuth } from "context/User";

interface Props {}

interface MyFormValues {
  firstname: string;
  lastname: string;
  email: string;
  gender: string[];
  phoneNumber: string;
  state: string;
  city: string;
  postalCode: string;
}

const UserProfile: React.FC<Props> = () => {
  const { userInfo } = useAuth();

  const initialValues: MyFormValues = {
    firstname: userInfo.firstname,
    lastname: userInfo.lastname,
    email: userInfo.email,
    gender: [],
    phoneNumber: userInfo.phoneNumber,
    state: "",
    city: userInfo.city,
    postalCode: "",
  };
  return (
    <div className={styles.user_profile_form}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required("Required"),
          lastname: Yup.string().required("Required"),
          email: Yup.string().email().required("Required"),
          gender: Yup.string().required("Required"),
          phoneNumber: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          postalCode: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          toast("Request sent, check email", {
            type: "success",
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
              <div
                role="group"
                aria-labelledby="checkbox-group"
                className={styles.checkbox_group}
                style={{ overflow: "scroll" }}
              >
                <label htmlFor="" style={{ marginRight: "2rem" }}>
                  Gender{" "}
                </label>
                <label>
                  Male
                  <Field
                    type="checkbox"
                    name="gender"
                    value="male"
                    checked={values.gender.includes("male")}
                  />
                </label>
                <label>
                  Female
                  <Field
                    type="checkbox"
                    name="gender"
                    value="female"
                    checked={values.gender.includes("female")}
                  />
                </label>
                <label>
                  Other
                  <Field
                    type="checkbox"
                    name="gender"
                    value="Other"
                    checked={values.gender.includes("other")}
                  />
                </label>
              </div>
              <div className={styles.input_block}>
                <Input
                  name="phoneNumber"
                  placeholder="Phone Number (+91)"
                  type="tel"
                />
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

            <button className="primary-btn">Save changes</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserProfile;
