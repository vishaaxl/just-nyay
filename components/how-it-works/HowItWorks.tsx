import styles from "./HowItWorks.module.css";

import {
  BsFillArrowUpLeftCircleFill,
  BsWalletFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

interface Props {}

const steps = [
  {
    id: 1,
    icon: <BsFillArrowUpLeftCircleFill className="font-xl" />,
    title: "Select",
    subHeading: "Minutes you want to talk",
  },
  {
    id: 1,
    icon: <BsWalletFill className="font-xl" />,
    title: "Pay",
    subHeading: "Minutes you want to talk",
  },
  {
    id: 1,
    icon: <BsFillTelephoneFill className="font-xl" />,
    title: "Discuss",
    subHeading: "Get a call under 60 mins",
  },
];

const HowItWorks: React.FC<Props> = () => {
  return (
    <section className={styles.how_it_works}>
      <div className="container">
        <h1>How It Works</h1>
        <p>Simple three step process</p>

        <div className={styles.lines_wrapper}>
          {steps.map((step) => (
            <div className={styles.line} key={step.id}>
              <div className="icon">{step.icon}</div>
              <div className={styles.content}>
                <p>step 1</p>
                <h3>{step.title}</h3>
                <p>{step.subHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
