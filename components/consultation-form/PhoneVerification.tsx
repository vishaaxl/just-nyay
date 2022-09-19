import Input from "components/contact/Input";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

import styles from "./ConsultationForm.module.css";

interface Props {}

const VerifyForm: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <div className={styles.consultation_form}>
      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          router.push("/buy-now/consultation-form");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.block}>
              <h3 className={styles.block_heading}>
                One step towards solution
              </h3>
              <p className={styles.block_description}>
                **This phone number will be used to contact you shortly after
                the payment process is completed.
              </p>
              <div className={styles.input_block}>
                <Input
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <button className="primary-btn">Send OTP</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VerifyForm;
