import Input from "components/contact/Input";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

import styles from "./ConsultationForm.module.css";

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <div className={styles.consultation_form}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.block}>
              <h3 className={styles.block_heading}>
                Welcome to JustNyay Family
              </h3>
              <p className={styles.block_description}>
                **Fill out all the fields to the best of you knowledge and our
                team will contact you soon. If you are already registred with
                JUSTNYAY,{" "}
                <span
                  className={styles.accent}
                  onClick={() => router.push("/lawyer")}
                >
                  Click Here
                </span>
                .
              </p>
              <div className={styles.input_block}>
                <Input name="email" placeholder="E-mail" />
              </div>
              <div className={styles.input_block}>
                <Input name="phone" placeholder="Phone number" />
              </div>
              <div className={styles.input_block}>
                <Input name="city" placeholder="City" />
              </div>
              <div className={styles.input_block}>
                <Input name="experience" placeholder="Years of experience" />
              </div>
              <div className={styles.input_block}>
                <Input name="registration" placeholder="Bar council Id" />
              </div>
            </div>

            <button className="primary-btn">Submit application</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
