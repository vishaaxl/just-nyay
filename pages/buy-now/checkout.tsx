import styles from "../../styles/checkout.module.scss";
import type { NextPage } from "next";

import CheckoutForm from "components/forms/CheckoutForm";
import Image from "next/image";
import { useCartContext } from "context/Cart";

interface SummaryProps {
  title: string;
  price: number;
}

const Login: NextPage = () => {
  const cart = useCartContext();

  const Header = () => {
    return (
      <div className={styles.header}>
        <div className={styles.header_section}>
          <span>Ask for Lawyer</span>
          <span>{cart.plan} minutes </span>
        </div>
        <div className={styles.header_section}>
          <em className={styles.header_price}> &#8377; 999.00</em>
        </div>
      </div>
    );
  };

  const SummaryLine: React.FC<SummaryProps> = ({ title, price }) => {
    return (
      <div className={styles.summary_line}>
        <span>{title}</span>
        <span>&#8377; {price}</span>
      </div>
    );
  };

  return (
    <section className="container">
      <div className={styles.checkout_wrapper}>
        <div className={styles.checkout_form}>
          <Header />
          <span className={styles.checkout_form_heading}>
            Personal <span>Details</span>
          </span>
          <CheckoutForm />
        </div>

        {/* summary section */}
        <div className={styles.checkout_summary}>
          <div className="input-block custom-input">
            <label htmlFor="promo">Have a promocode?</label>
            <input id="promo" placeholder="Enter promocode" />

            <div className="error"></div>
          </div>

          {/* summary */}
          <span className={styles.summary}>Summary</span>

          <SummaryLine title="Base Price" price={999.0} />
          <SummaryLine title="Discount" price={0.0} />
          <SummaryLine title="GST (18%)" price={152.39} />

          {/* header reuse */}
          <div className={styles.header} style={{ alignItems: "center" }}>
            <div className={styles.header_section}>
              <span>Total</span>
            </div>
            <div className={styles.header_section}>
              <em className={styles.header_price}> &#8377; 999.00</em>
            </div>
          </div>

          {/* checkout button */}
          <div
            className="primary-btn"
            style={{
              background: "#624BD6",
              width: "100%",
              padding: "1rem 0",
              textAlign: "center",
            }}
          >
            Checkout
          </div>

          <div className={styles.summary_secure}>
            <Image
              src="/images/secure.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
