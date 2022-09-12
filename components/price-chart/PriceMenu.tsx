import styles from "./PriceMenu.module.css";

import { AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {}

const price_array = [
  {
    id: 1,
    title: "60",
  },
  {
    id: 2,
    title: "45",
  },
  {
    id: 3,
    title: "30",
  },
  {
    id: 4,
    title: "15",
  },
];

const PriceChart: React.FC<Props> = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const selectPlan = (name: string) => {
    setSelectedPlan(name);
  };

  return (
    <section className={styles.price_chart}>
      <div className={styles.content}>
        {/* heading and rating */}
        <div className={styles.main_heading}>
          <div className={styles.rating_container}>
            <div className={styles.star_container}>
              4.4 <AiFillStar />
            </div>
            <div className={styles.number_ratings}>1047 Ratings</div>
          </div>
          <h1>Talk To Lawyer</h1>
        </div>
        {/* content */}
        <span>Quick and Instant consultation</span>
        <p>
          On Phone Instant Legal consultaion from
          <br /> top lawyers
        </p>

        <div className="primary-btn" onClick={() => router.push("/contact")}>
          Legal Consultation at just 599
        </div>
      </div>

      {/* pricing part */}

      <div className={styles.pricing_component}>
        <div className={styles.pricing_component_wrapper}>
          {price_array.map((elem) => (
            <div
              className={`${styles.price_element} ${
                elem.title == selectedPlan && styles.price_element_selected
              }`}
              key={elem.id}
              onClick={() => selectPlan(elem.title)}
            >
              <div className={styles.line_one}>
                <input
                  checked={elem.title == selectedPlan}
                  type="checkbox"
                  id={elem.title}
                  name={elem.title}
                  onChange={() => selectPlan(elem.title)}
                />

                <label htmlFor={elem.title}>{elem.title} Minutes</label>
              </div>
              <div className={styles.line_two}>
                <span className={styles.accent}>Rs. 999 </span> (Rs 16.6 /
                minute)
              </div>
              <div className={styles.line_three}>Save Rs 981</div>
              <div className={styles.line_four}>
                <GoVerified className={styles.icon} />
                <span>valid for 30 days</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buy_now}>Buy Now</div>
      </div>
    </section>
  );
};

export default PriceChart;
