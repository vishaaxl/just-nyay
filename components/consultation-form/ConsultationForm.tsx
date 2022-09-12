import Input from "components/contact/Input";
import { Field, Form, Formik } from "formik";
import styles from "./ConsultationForm.module.css";
interface Props {}

const ConsultationFrom: React.FC<Props> = () => {
  return (
    <div className={styles.consultation_form}>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          phone: "",
          alternatenumber: "",
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
              <h3 className={styles.block_heading}>
                Enter Your Personal Details
              </h3>
              <p className={styles.block_description}>
                Tow work with an attorney on helping you achieve your goals,
                enter your details precisely.
              </p>
              <div className={styles.input_block}>
                <Input name="fullname" placeholder="Full Name" />
              </div>
              <div className={styles.input_block}>
                <Input name="email" placeholder="Email" />
              </div>
              <div className={`${styles.input_block} ${styles.flex}`}>
                <Input name="phone" placeholder="Phone no." type="tel" />
                <Input
                  name="aternamenumber"
                  placeholder="Altername Phone no."
                  type="tel"
                />
              </div>
            </div>
            {/* block two */}
            <div className={styles.block}>
              <h3 className={styles.block_heading}>Enter Your Case Details</h3>

              <div className={`${styles.input_block} ${styles.flex}`}>
                <Input name="casenumber" placeholder="Case Number" />

                <Input name="act" placeholder="Act Name" />
              </div>
              <div className={styles.input_block}>
                <p className={styles.block_description}>
                  **Double check the quality of files you are uploading, they
                  will be used by our lawyers for future references.
                </p>
                <Input
                  name="attatchments"
                  placeholder="Case Related Files"
                  type="file"
                />
              </div>
              <div className={styles.input_block}>
                <Input
                  name="description"
                  placeholder="Describe your case"
                  component="textarea"
                  rows="4"
                />
              </div>
            </div>
            {/* block three */}
            <div className={styles.block}>
              <h3 className={styles.block_heading}>
                Mark Consultation Schedule
              </h3>

              <div className={`${styles.input_block} ${styles.flex}`}>
                <Input name="date" placeholder="Date" type="date" />

                {/* time block select option */}
                <div className="input-block custom-input">
                  <label>Time</label>
                  <Field as="select" name="schedule" className="custom-select">
                    <option value="10:00 PM - 11 : 00 PM">
                      10:00 PM - 11 : 00 PM
                    </option>
                    <option value="11:00 PM - 12 : 00 PM">
                      11:00 PM - 12 : 00 PM
                    </option>
                    <option value="1:00 PM - 2 : 00 PM">
                      1:00 PM - 2 : 00 PM
                    </option>
                    <option value="2:00 PM - 3 : 00 PM">
                      2:00 PM - 3 : 00 PM
                    </option>
                    <option value="3:00 PM - 4 : 00 PM">
                      3:00 PM - 4 : 00 PM
                    </option>
                    <option value="4:00 PM - 5 : 00 PM">
                      4:00 PM - 5 : 00 PM
                    </option>
                    <option value="5:00 PM - 6 : 00 PM">
                      5:00 PM - 6 : 00 PM
                    </option>
                    <option value="6:00 PM - 7 : 00 PM">
                      6:00 PM - 7 : 00 PM
                    </option>
                    <option value="7:00 PM - 8 : 00 PM">
                      7:00 PM - 8 : 00 PM
                    </option>
                  </Field>
                  {touched.schedule && errors.schedule ? (
                    <div className="error">{errors.schedule}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <button className="primary-btn">Schedule</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConsultationFrom;
