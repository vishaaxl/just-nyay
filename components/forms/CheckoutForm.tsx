import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import { useCartContext } from "context/Cart";

interface Props {}

const CheckoutForm: React.FC<Props> = () => {
  const cart = useCartContext();
  return (
    <div className={styles.checkout_form}>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          city: "",
          phoneNumber: "+91",
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
          lastname: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          phoneNumber: Yup.number()
            .typeError("Must be a number")
            .min(10000000, "Enter a valid number!")
            .max(10000000000000, "Enter a valid number")
            .required("Required"),
          city: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        })}
        onSubmit={(values) => {}}
      >
        {({}) => (
          <Form>
            <div className={styles.block}>
              <div className={styles.input_block}>
                <Input name="firstname" placeholder="First Name" updateCart />
                <Input name="lastname" placeholder="Last Name" updateCart />
              </div>
              <div className={styles.input_block}>
                <Input name="email" placeholder="Email" updateCart />
              </div>
              <div className={`${styles.input_block}`}>
                <Input
                  name="phoneNumber"
                  placeholder="Phone no. (+91)"
                  type="tel"
                  updateCart
                />
                <Input name="city" placeholder="City" updateCart />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
