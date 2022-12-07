import styles from "pages/users/User.module.scss";

import { useAuth } from "context/User";
import { auth, db } from "firebase.config";
import {
  collection,
  doc,
  DocumentData,
  getDocs,
  limit,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { signOut } from "firebase/auth";
import {
  MdDashboard,
  MdGavel,
  MdLogout,
  MdOutlineMoney,
  MdPerson,
  MdSupportAgent,
} from "react-icons/md";
import UserProfile from "components/forms/UserProfile";
import LawyerProfile from "components/forms/LawyerProfile";
import Stats from "components/dashboard/Stats";
import OrdersTable from "components/dashboard/Table";
import Hero from "components/home/Hero";
import { generateUid } from "utils/customId";
import { toast } from "react-toastify";

const LawyerDashboard: NextPage = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sideMenu, setSideMenu] = useState(true);
  const [payment, setPayment] = useState(true);
  const [orders, setOrders] = useState<DocumentData[]>([]);

  const { user, userInfo, updateUser } = useAuth();
  const router = useRouter();

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

  const makePayment = async (docId: string, values: any) => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/user-payment", { method: "POST" }).then(
      (res) => res.json()
    );

    let options = {
      key: process.env.NEXT_PUBLIC_RAZOR_PAY_ID,
      name: "Just-nyay Pvt Ltd",
      order_id: data.id,
      currnecy: data.currency,
      amount: 699,
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

          setPayment(true);

          const docRef = doc(db, "lawyers", docId);
          await updateDoc(docRef, {
            payment: true,
          }).then(() => router.push("/login/lawyer"));
        }
      },
      prefill: {
        name: values.firstname + " " + values.lastname,
        email: values.email,
        contact: `+91${values.phoneNumber.substr(
          values.phoneNumber.length - 10
        )}`,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(
    () =>
      user?.phoneNumber
        ? onSnapshot(
            query(
              collection(db, "lawyers"),
              where("phoneNumber", "==", user?.phoneNumber),
              limit(1)
            ),
            async (snapshot) => {
              //check if the user is lawyer
              if (snapshot.empty) {
                // user does not exist
                router.push("/");
                return;
              }

              snapshot.forEach((doc) => {
                if (!doc.data().payment) {
                  makePayment(doc.id, doc.data());
                }
                setPayment(doc.data().payment);
              });

              // update user globally
              snapshot.forEach(async (doc) => {
                const q = query(
                  collection(db, "orders"),
                  where("lawyer", "==", doc.id)
                );

                const ordersSnap = await getDocs(q);
                if (!orders.length) {
                  ordersSnap.forEach((order) => {
                    setOrders((prev) => [
                      ...prev,
                      { ...order.data(), id: order.id },
                    ]);
                  });
                }

                updateUser({ ...doc.data(), id: doc.id });
              });
            }
          )
        : console.log("No User found"),
    [user]
  );

  if (!user) {
    return (
      <section className={`${styles.skeleton_container} container`}>
        <Skeleton
          count={5}
          style={{ marginBottom: ".75rem", height: "2rem" }}
        />
        <Skeleton
          count={5}
          style={{ marginBottom: ".75rem", height: "2rem" }}
        />
        <Skeleton
          count={5}
          style={{ marginBottom: ".75rem", height: "2rem" }}
        />
        <Skeleton
          count={5}
          style={{ marginBottom: ".75rem", height: "2rem" }}
        />
      </section>
    );
  }

  const orderColumn = [
    {
      Header: "Order ID",
      accessor: "uid" as const, // accessor is the "key" in the data
    },
    {
      Header: "Plan",
      accessor: "plan" as const, // accessor is the "key" in the data
    },
    {
      Header: "Language",
      accessor: "language" as const,
    },
    {
      Header: "Type",
      accessor: "problemType" as const,
    },
    {
      Header: "Status",
      accessor: "status" as const,
    },
  ];

  return (
    <>
      <Hero />
      <main style={{ background: "rgba(0,0,0,0.02)" }}>
        {currentPage == "dashboard" && (
          <section className="container" style={{ padding: " 2em 0" }}>
            <div className={styles.page_wrapper}>
              {/* sidebar */}
              <SidebarDesktop
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />

              {/* content */}
              <div className={styles.content}>
                {/* <div className={styles.stat_grid}>
                <Stats title="Cases" icon={<MdGavel />} />
                <Stats title="Clients" icon={<MdPerson />} color="#735E45" />
              </div> */}
                {orders && (
                  <OrdersTable
                    tableData={orders.map((order) => ({
                      ...order,
                      uid: generateUid(
                        order.createdAt?.seconds * 1000,
                        order.id
                      ),
                    }))}
                    tableColumns={orderColumn}
                    tableName={
                      payment
                        ? "Assigned Cases"
                        : "Continue payment to get cases"
                    }
                    path="orders"
                    lawyerId={userInfo.id}
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {currentPage == "profile" && (
          <section className="container" style={{ padding: " 2em 0" }}>
            <div className={styles.page_wrapper}>
              {/* sidebar */}
              <SidebarDesktop
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />

              {/* page content */}
              <div className={styles.content}>
                <div className={styles.header}>
                  <h2 className="header">Hello, {userInfo.firstname}</h2>
                  <span>Update Profile</span>
                </div>

                {/* transactions */}

                <div className={styles.white_wrapper}>
                  <LawyerProfile />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

const SidebarDesktop = ({ currentPage, setCurrentPage }: any) => {
  const router = useRouter();
  return (
    <aside className={styles.sidebar_desktop}>
      <div
        style={{ color: currentPage == "dashboard" ? "#624BD6" : "" }}
        className={styles.sidebar_row}
        onClick={() => setCurrentPage("dashboard")}
      >
        <MdDashboard className={styles.sidebar_icon} />
        <span>Dashboard</span>
      </div>
      <div
        style={{ color: currentPage == "profile" ? "#624BD6" : "" }}
        className={styles.sidebar_row}
        onClick={() => setCurrentPage("profile")}
      >
        <MdPerson className={styles.sidebar_icon} />
        <span>Profile</span>
      </div>

      <div className={styles.sidebar_row}>
        <MdSupportAgent className={styles.sidebar_icon} />
        <span>Support</span>
      </div>
      <div
        className={styles.sidebar_row}
        onClick={() => {
          signOut(auth).then(() => router.push("/"));
        }}
      >
        <MdLogout className={styles.sidebar_icon} />

        <span>Logout</span>
      </div>
    </aside>
  );
};

export default LawyerDashboard;
