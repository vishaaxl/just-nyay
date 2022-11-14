import styles from "pages/users/User.module.scss";

import { useAuth } from "context/User";
import { auth, db } from "firebase.config";
import {
  collection,
  limit,
  onSnapshot,
  query,
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
  MdLogout,
  MdOutlineMoney,
  MdPerson,
  MdSupportAgent,
} from "react-icons/md";
import UserProfile from "components/forms/UserProfile";

const LawyerDashboard: NextPage = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sideMenu, setSideMenu] = useState(true);

  const { user, userInfo, updateUser } = useAuth();
  const router = useRouter();

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

              // update user globally
              snapshot.forEach((doc) => {
                updateUser(doc.data());
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

  return (
    <main style={{ background: "rgba(0,0,0,0.02)" }}>
      {currentPage == "dashboard" && (
        <section className="container" style={{ padding: " 2em 0" }}>
          <div className={styles.page_wrapper}>
            {/* sidebar */}
            <SidebarDesktop
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
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
                <UserProfile />
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
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
      <div
        style={{ color: currentPage == "transactions" ? "#624BD6" : "" }}
        className={styles.sidebar_row}
        onClick={() => setCurrentPage("transactions")}
      >
        <MdOutlineMoney className={styles.sidebar_icon} />
        <span>Transactions</span>
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
