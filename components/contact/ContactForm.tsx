import Promotion from "components/promotion/Promotion";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";
import Input from "./Input";

interface Props {}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactForm: React.FC<Props> = () => {
  return (
    <section className={styles.contact_form}>
      <div className="container">
        <div className={styles.form_wrapper}>
          <Formik
            initialValues={{ name: "", mobile: "", desc: "" }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              mobile: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Required"),
              desc: Yup.string()
                .min(20, "Describe your case briefly")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {() => (
              <Form>
                <h1 className={styles.title}>Get in touch !</h1>

                <Input name="name" placeholder="Your Name*" />
                <Input
                  name="mobile"
                  type="tel"
                  placeholder="Your Phone number*"
                />
                <Input
                  name="desc"
                  placeholder="Description of your case"
                  component="textarea"
                  rows="4"
                />
                <button className="primary-btn full-width">submit</button>
              </Form>
            )}
          </Formik>
          <Promotion />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
