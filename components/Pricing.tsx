import styles from "./PriceMenu.module.scss";

import { AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/router";

import CustomSelect from "./CustomSelect";
import { useCartContext } from "context/Cart";

interface Props {
  heading?: string;
}

const price_array = [
  {
    id: 1,
    title: "15",
    price: "599",
    valid: 30,
  },
  {
    id: 2,
    title: "30",
    price: "1099",
    valid: 60,
  },
  {
    id: 3,
    title: "45",
    price: "1599",
    valid: 90,
  },
  {
    id: 4,
    title: "60",
    price: "2099",
    valid: 120,
  },
];

const PriceChart: React.FC<Props> = ({ heading }) => {
  const cart = useCartContext();

  const router = useRouter();
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string>("60");

  const selectPlan = (name: string) => {
    setSelectedPlan(name);
    cart.updateCart("plan", name);

    price_array.map((e) => {
      if (e.title == name) {
        cart.updateCart("price", e.price);
      }
    });
  };

  const buynow = () => {
    if (cart.language == "" || cart.problemType == "") {
      setError("**Both options are required");
      return;
    }

    router.push("/buy-now/checkout");
  };

  return (
    <section className={styles.price_chart} id="price_chart">
      <div className={styles.content}>
        {/* heading and rating */}
        <div className={styles.main_heading}>
          {/* <div className={styles.rating_container}>
            <div className={styles.star_container}>
              4.4 <AiFillStar />
            </div>
            <div className={styles.number_ratings}>1047 Ratings</div>
          </div> */}
          <h1>{heading ? heading : "Get Legal Consultation"}</h1>
        </div>
        {/* content */}
        <span>Quick and Instant consultation</span>
        <p>
          On Phone Instant Legal consultation from
          <br /> top lawyers
        </p>

        <div className="primary-btn" onClick={() => setSelectedPlan("60")}>
          Legal Consultation at just 599
        </div>
      </div>

      {/* pricing part */}

      <div className={styles.pricing_component} id="buy-now">
        <div className="error" style={{ margin: "0 0 1rem 0" }}>
          {error}
        </div>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <CustomSelect
            optionsList={["Hindi", "English"]}
            placeholder="Select Language"
            name="language"
          />
          <CustomSelect
            name="problemType"
            optionsList={[
              "Criminal / Property",
              "Personal/ Family",
              "Corporate Law",
              "Civil Matters",
              "others",
            ]}
            placeholder="Problem Type"
          />
        </div>

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
                <span className={styles.accent}>Rs. {elem.price} </span> (Rs
                {(Number(elem.price) / Number(elem.title)).toFixed(2)} / minute)
              </div>
              <div className={styles.line_three}>
                Save Rs {(40 * Number(elem.title)) / 60}
              </div>
              <div className={styles.line_four}>
                <GoVerified className={styles.icon} />
                <span>valid for {elem.valid} days</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buy_now} onClick={() => buynow()}>
          Buy Now
        </div>
      </div>
    </section>
  );
};

export default PriceChart;
