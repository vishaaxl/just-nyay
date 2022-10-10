import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";

import Input from "components/Input";

interface Props {}

const CheckoutForm: React.FC<Props> = () => {
  return (
    <div className={styles.checkout_form}>
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
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.block}>
              <div className={styles.input_block}>
                <Input name="firstname" placeholder="First Name" />
                <Input name="lastname" placeholder="Last Name" />
              </div>
              <div className={styles.input_block}>
                <Input name="email" placeholder="Email" />
              </div>
              <div className={`${styles.input_block}`}>
                <Input
                  name="phone"
                  placeholder="Phone no. (**without country code)"
                  type="tel"
                />
                <Input name="city" placeholder="City" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
