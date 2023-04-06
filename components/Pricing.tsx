import styles from "./PriceMenu.module.scss";

import { AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/router";

import CustomSelect from "./CustomSelect";
import { useCartContext } from "context/Cart";
import styled from "styled-components";
import { BsChevronBarRight, BsChevronRight } from "react-icons/bs";

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

const PricingHeading = styled.div`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 800;

  max-width: 600px;
  font-family: "Frank Ruhl Libre", serif;

  @media (min-width: 425px) {
    font-size: 2rem;
  }
`;

const PricingButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.75em 1em;
  background: #162542;
  color: #fff;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 800;
  text-transform: capitalize;

  @media (min-width: 425px) {
    font-size: 1.5rem;
    padding: 0.5em 1em;
  }
`;

const PricingComponent = styled.div`
  background: #162542;
  border-radius: 20px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 0;
  margin: 2rem 0;

  .heading {
    font-size: 1.5rem;
    font-weight: 800;
  }

  span {
  }

  .title {
    font-size: 3rem;
    font-weight: 800;
  }

  .pricing-button {
    cursor: pointer;
    padding: 0.5em 3em 0.5em 1em;
    color: #b78c59;
    background: #f2f2f2;
    border-radius: 30px;
    span {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: capitalize;
    }
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    .icon-wrapper {
      background: #b78c59;
      color: #f2f2f2;
      position: absolute;
      left: 80%;
      top: 5%;
      padding: 1em 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
`;

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

  const navigateToBuy = () => {
    cart.updateCart("plan", "15");

    price_array.map((e) => {
      if (e.title == "15") {
        cart.updateCart("price", e.price);
      }
    });

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
          <PricingHeading>
            {heading
              ? heading
              : "Get Legal Consultation From Top Lawyers of High Court and Supreme Court."}
          </PricingHeading>
        </div>
        {/* content */}

        <PricingButton onClick={navigateToBuy}>
          Register now for just &#8377; 599 only
        </PricingButton>
      </div>

      {/* pricing part */}

      <div className="container">
        <PricingComponent>
          <div className="heading">Registration</div>
          <span>for just</span>
          <div className="title">&#8377; 599</div>
          <div className="pricing-button" onClick={navigateToBuy}>
            <span> Book Now</span>

            <div className="icon-wrapper">
              <BsChevronRight className="icon" />
            </div>
          </div>
        </PricingComponent>
      </div>

      {/* <div className={styles.pricing_component} id="buy-now">
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
      </div> */}
    </section>
  );
};

export default PriceChart;
