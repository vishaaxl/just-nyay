import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import { toast } from "react-toastify";

interface Props {}

const LawyerSignup: React.FC<Props> = () => {
  return (
    <div className={styles.lawyer_signup_form}>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          gender: "",
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
          otp: Yup.string().required("Required"),
          email: Yup.string().email().required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters long")
            .required("Required"),
          gender: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          barCouncilId: Yup.string().required("Required"),
          IDnumber: Yup.string().required("Required"),
          year: Yup.number().typeError("Invalid year").required("Required"),
          experience: Yup.number()
            .typeError("Invalid year")
            .required("Required"),
          phoneNumber: Yup.number()
            .typeError("Invalid phone number")
            .required("Required"),
        })}
        onSubmit={(values) => {
          toast("Request sent, check email", {
            type: "success",
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
                <Input name="email" placeholder="Email" type="email" />
                <Input name="password" placeholder="Password" type="password" />
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

            <button className="primary-btn">Become a just-nyay lawyer</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LawyerSignup;
