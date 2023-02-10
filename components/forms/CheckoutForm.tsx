import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import { useCartContext } from "context/Cart";

interface Props {}

const CheckoutForm: React.FC<Props> = () => {
  const cart = useCartContext();
  console.log(cart);

  return (
    <div className={styles.checkout_form}>
      <Formik
        enableReinitialize
        initialValues={{
          firstname: cart.firstname,
          lastname: cart.lastname,
          email: cart.email,
          city: cart.city,
          phoneNumber: cart.phoneNumber || "+91",
          date: cart.date,
          time: cart.time || "9-10",
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
          date: Yup.string().required("Required"),
          time: Yup.string().required("Required"),
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
              <div className={`${styles.input_block}`}>
                <Input
                  name="date"
                  placeholder="When should we contact you"
                  type="date"
                  updateCart
                  min={new Date().toISOString().split("T")[0]}
                />
                <Input
                  name="time"
                  placeholder="Time"
                  updateCart
                  component="select"
                >
                  <option disabled>Select Time Slot</option>
                  <option value="9-10">9 - 10</option>
                  <option value="10-11">10 - 11</option>
                  <option value="11-12">11 - 12</option>
                  <option value="12-13">12 - 13</option>
                  <option value="13-14">13 - 14</option>
                  <option value="14-15">14 - 15</option>
                  <option value="15-16">15 - 16</option>
                  <option value="16-17">16 - 17</option>
                  <option value="17-18">17 - 18</option>
                  <option value="18-19">18 - 19</option>
                  <option value="19-20">19 - 20</option>
                  <option value="20-21">20 - 21</option>
                </Input>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
