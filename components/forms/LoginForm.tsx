import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

import Input from "components/Input";
import styles from "./ConsultationForm.module.scss";

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <div className={styles.consultation_form} style={{ margin: "5rem auto" }}>
      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.block}>
              <h3 className={styles.block_heading}>Login to continue</h3>
              <p className={styles.block_description}>
                **Logging in will provide you with a user dashboard where you
                can see your request status as well raise disputes, to know more
                <span
                  className={styles.accent}
                  onClick={() => router.push("/")}
                >
                  {" "}
                  Click Here
                </span>
                .
              </p>
              <div className={styles.input_block}>
                <Input
                  name="phoneNumber"
                  placeholder="Enter your phone number (**without country code)"
                />
              </div>
            </div>

            <button
              className="primary-btn"
              onClick={() => router.push("/buy-now/case-brief")}
            >
              Log-in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
