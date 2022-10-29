import styles from "../../styles/checkout.module.scss";
import type { NextPage } from "next";
import { useState } from "react";

import CheckoutForm from "components/forms/CheckoutForm";
import Image from "next/image";
import { toast } from "react-toastify";

import { useCartContext } from "context/Cart";

// database
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  limit,
} from "firebase/firestore";
import { db } from "firebase.config";
import { useRouter } from "next/router";

interface SummaryProps {
  title: string;
  price: number;
}

const Login: NextPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const cart = useCartContext();

  const checkout = async () => {
    setSubmitting(true);

    // check if the user is already registered
    const q = query(
      collection(db, "users"),
      where(
        "phoneNumber",
        "==",
        `+91${cart.phoneNumber.substr(cart.phoneNumber.length - 10)}`
      ),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      addDoc(collection(db, "orders"), {
        user: querySnapshot.docs[0].id,
        phoneNumber: `+91${cart.phoneNumber.substr(
          cart.phoneNumber.length - 10
        )}`,

        language: cart.language,
        payment: false,
        plan: cart.plan,
      })
        .then((doc) => {
          // redirect to continue payment and set payment true on successfull transaction
          toast("Continue payment to proceed", {
            type: "success",
          });

          router.push("/login/user");
          setSubmitting(false);
        })
        .catch((err) => {
          toast("Something went wrong", {
            type: "error",
          });
          setSubmitting(false);
        });

      return;
    }

    // add user
    addDoc(collection(db, "users"), {
      city: cart.city,
      phoneNumber: `+91${cart.phoneNumber.substr(
        cart.phoneNumber.length - 10
      )}`,

      email: cart.email,
      firstname: cart.firstname,
      lastname: cart.lastname,
    })
      .then((docRef) => {
        // toast("Order Placed successfully", {
        //   type: "success",
        // });
        addDoc(collection(db, "orders"), {
          user: docRef.id,
          phoneNumber: `+91${cart.phoneNumber.substr(
            cart.phoneNumber.length - 10
          )}`,

          language: cart.language,
          payment: false,
          plan: cart.plan,
        })
          .then((doc) => {
            // redirect to continue payment and set payment true on successfull transaction
            router.push("/login/user");
            toast("Continue payment to proceed", {
              type: "success",
            });
            setSubmitting(false);
          })
          .catch((err) => {
            toast("Something went wrong", {
              type: "error",
            });
            setSubmitting(false);
          });
      })
      .catch((err) => {
        toast("Something went wrong", {
          type: "error",
        });
        setSubmitting(false);
      });
  };

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
            onClick={() => !submitting && checkout()}
            className="primary-btn"
            style={{
              background: "#624BD6",
              width: "100%",
              padding: "1rem 0",
              textAlign: "center",
              opacity: submitting ? 0.5 : 1,
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
