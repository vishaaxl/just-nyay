import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";

import Input from "components/Input";

interface Props {}

const ContactUs: React.FC<Props> = () => {
  return (
    <div className={styles.consultation_form}>
      <Formik
        initialValues={{
          phoneNumber: "",
          email: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.block}>
              <p className={styles.block_description}>
                We are more than happy to get on your case with you. Fill the
                form and we will contact your shortly.
              </p>
            </div>
            {/* block two */}
            <div className={styles.block}>
              <div className={styles.input_block}>
                <Input name="phoneNumber" placeholder="Your Phone Number" />
              </div>
              <div className={styles.input_block}>
                <Input name="email" placeholder="E-mail" />
              </div>
              <div className={styles.input_block}>
                <Input
                  name="Description"
                  placeholder="Any Query (*optional)"
                  component="textArea"
                  rows="4"
                />
              </div>
            </div>
            {/* block three */}

            <button className="primary-btn">Send query</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
