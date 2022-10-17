import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";

import Input from "components/Input";
import { toast } from "react-toastify";

interface Props {}

const LawyerSignup: React.FC<Props> = () => {
  return (
    <div className={styles.login_form}>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          phone: "",
          address: "",
          casenumber: "",
          act: "",
          file: "",
          description: "",
          date: "",
          schedule: "",
        }}
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
                <Input name="Fullname" placeholder="Full Name" />
              </div>
              <div className={styles.input_block}>
                <Input name="Fullname" placeholder="Age" type="number" />
              </div>
              <div className={styles.input_block}>
                <Input name="Fullname" placeholder="City" />
              </div>
              <div className={styles.input_block}>
                <Input name="Fullname" placeholder="Highest Qualification" />
              </div>
            </div>
            {/* block two */}
            <div className={styles.block}>
              <h3 className={styles.block_heading}>Additional Information</h3>
              <div className={styles.input_block}>
                <Input
                  name="description"
                  placeholder="Describe yourself"
                  component="textarea"
                  rows="4"
                />
              </div>
              <div className={styles.input_block}>
                <Input
                  name="Fullname"
                  placeholder="Bar council id"
                  type="number"
                />
              </div>
              <div className={styles.input_block}>
                <Input
                  name="Fullname"
                  placeholder="Years of experience"
                  type="number"
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
