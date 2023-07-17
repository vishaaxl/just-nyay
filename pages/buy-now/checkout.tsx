import styles from "../../styles/checkout.module.scss";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

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
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "firebase.config";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

interface SummaryProps {
  title: string;
  price: any;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Login: NextPage = () => {
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const cart = useCartContext();

  const checkSubmit = () => {
    if (submitting) {
      return false;
    }

    if (
      cart.firstname &&
      cart.lastname &&
      cart.email &&
      cart.phoneNumber &&
      cart.city
    ) {
      return true;
    }

    alert("Plase fill the form before checking out");
    return false;
  };

  useEffect(() => {
    if (!cart.plan && !cart.language && !cart.problemType) {
      router.push("/buy-now");
    }
  }, []);

  // razorpay related stuff
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async (docId: string) => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const { data } = await axios.post("/api/user-payment", {
      amount: cart.price,
    });

    let options = {
      key: process.env.NEXT_PUBLIC_RAZOR_PAY_ID,
      name: "Just-nyay Pvt Ltd",
      order_id: data.id,
      currnecy: data.currency,
      amount: data.amount,
      description: "Payment for just-nyay",
      image:
        "https://justnyay.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75",
      handler: async function (response: any) {
        // Validate payment at server - using webhooks is a better idea.
        const razorpayResponse = {
          orderCreationId: data.order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const success = await fetch("/api/success", {
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          referrerPolicy: "no-referrer",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(razorpayResponse),
        }).then((res) => res.json());

        if (success.msg == "success") {
          toast("Payment Successful", {
            type: "success",
          });

          const docRef = doc(db, "orders", docId);
          await updateDoc(docRef, {
            payment: true,
          }).then(async () => {
            await fetch("/api/confirmation", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phoneNumber: cart.phoneNumber.substr(
                  cart.phoneNumber.length - 10
                ),
              }),
            })
              .then(() => router.push("/users/login"))
              .catch((err) => console.log(err));
          });
        }
      },
      prefill: {
        name: cart.firstname + " " + cart.lastname,
        email: cart.email,
        contact: `+91${cart.phoneNumber.substr(cart.phoneNumber.length - 10)}`,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const checkout = async () => {
    setSubmitting(true);
    if (!cart.termsAgreement) {
      alert("Agree to terms and conditions to continue");
      setSubmitting(false);
      return;
    }

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
        user: {
          uid: querySnapshot.docs[0].id,
          firstname: cart.firstname,
          lastname: cart.lastname,
          city: cart.city,
        },

        phoneNumber: `+91${cart.phoneNumber.substr(
          cart.phoneNumber.length - 10
        )}`,

        language: cart.language,
        problemType: cart.problemType,
        status: "pending",
        payment: false,
        plan: cart.plan,
        time: cart.time || "9-10",
        date: cart.date,
        createdAt: serverTimestamp(),
      })
        .then((doc) => {
          makePayment(doc.id);
          // redirect to continue payment and set payment true on successfull transaction
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
      createdAt: serverTimestamp(),
    })
      .then((docRef) => {
        addDoc(collection(db, "orders"), {
          user: {
            uid: docRef.id,
            firstname: cart.firstname,
            lastname: cart.lastname,
            city: cart.city,
          },

          time: cart.time || "9-10",
          date: cart.date,

          phoneNumber: `+91${cart.phoneNumber.substr(
            cart.phoneNumber.length - 10
          )}`,

          language: cart.language,
          problemType: cart.problemType,
          status: "pending",
          payment: false,
          plan: cart.plan,
          createdAt: serverTimestamp(),
        })
          .then((doc) => {
            makePayment(doc.id);
            // redirect to continue payment and set payment true on successfull transaction
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
          <span
            style={{
              fontWeight: "bold",
              letterSpacing: 0,
            }}
          >
            Registration&nbsp; Fee
          </span>
        </div>
        <div className={styles.header_section}>
          <em className={styles.header_price}> &#8377; 1999.00</em>
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
          {/* <div className="input-block custom-input">
            <label htmlFor="promo">Have a promocode?</label>
            <input id="promo" placeholder="Enter promocode" />

            <div className="error"></div>
          </div> */}

          {/* summary */}
          <span className={styles.summary}>Summary</span>

          <SummaryLine
            title="Base Price"
            price={Math.round(cart.price - (cart.price / 100) * 18)}
          />
          <SummaryLine title="Discount" price={0.0} />
          <SummaryLine
            title="GST (18%)"
            price={((Number(cart.price) / 100) * 18).toFixed(2)}
          />

          {/* header reuse */}
          <div className={styles.header} style={{ alignItems: "center" }}>
            <div className={styles.header_section}>
              <span>Total</span>
            </div>
            <div className={styles.header_section}>
              <em className={styles.header_price}> &#8377; {cart.price}.00</em>
            </div>
          </div>

          {/* checkout button */}
          <div
            onClick={() => checkSubmit() && checkout()}
            className="primary-btn"
            style={{
              background: "#624BD6",
              width: "100%",
              padding: "1rem 0",
              textAlign: "center",
              opacity: submitting ? 0.5 : 1,
            }}
          >
            {submitting ? "Please wait" : "Checkout"}
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
