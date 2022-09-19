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
              <h3 className={styles.block_heading}>Login to Dashboard</h3>
              <p className={styles.block_description}>
                If you still haven&lsquo;t registred with JUSTNYAY,{" "}
                <span
                  className={styles.accent}
                  onClick={() => router.push("/lawyer/register")}
                >
                  Click Here
                </span>
                .
              </p>
              <div className={styles.input_block}>
                <Input name="email" placeholder="E-mail" />
              </div>
              <div className={styles.input_block}>
                <Input name="password" placeholder="Password" />
              </div>
            </div>
            <p className={styles.block_description}>
              <span className={styles.accent}>Forgot password?</span>.
            </p>

            <button className="primary-btn">Log-in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
