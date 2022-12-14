import styles from "./ConsultationForm.module.scss";
import { Field, Form, Formik } from "formik";

import Input from "components/Input";

interface Props {}

const ConsultationForm: React.FC<Props> = () => {
  return (
    <div className={styles.consultation_form}>
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
              <p className={styles.block_description}>
                Too work with an attorney on helping you achieve your goals,
                enter your details precisely.
              </p>
            </div>
            {/* block two */}
            <div className={styles.block}>
              <h3 className={styles.block_heading}>Brief Your Case</h3>
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

export default ConsultationForm;
