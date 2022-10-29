import styles from "./User.module.scss";
import type { NextPage } from "next";
import { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import { useTable } from "react-table";

import {
  collection,
  query,
  where,
  DocumentData,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

import { auth, db } from "firebase.config";
import { useAuth } from "context/User";
import { HiShoppingCart } from "react-icons/hi";
import {
  MdDashboard,
  MdLogout,
  MdOutlineMoney,
  MdPerson,
  MdSupportAgent,
} from "react-icons/md";
import UserProfile from "components/forms/UserProfile";
import Image from "next/image";
import { BsCart2, BsFolderX } from "react-icons/bs";
import { signOut } from "firebase/auth";

const User: NextPage = ({}) => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sideMenu, setSideMenu] = useState(true);
  const [orders, setOrders] = useState<DocumentData>([]);

  const { user, userInfo, updateUser } = useAuth();
  const router = useRouter();

  useEffect(
    () =>
      user?.phoneNumber
        ? onSnapshot(
            query(
              collection(db, "orders"),
              where("phoneNumber", "==", user?.phoneNumber)
            ),
            async (snapshot) => {
              //fetch the user
              const docRef = doc(db, "users", snapshot.docs[0].data().user);
              const docSnap = await getDoc(docRef);

              setOrders(snapshot.docs);

              // update user globally
              updateUser(docSnap.data());
            }
          )
        : console.log("No User found"),
    [user]
  );

  if (!orders.length) {
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

  const minutes = () => {
    let mins = orders.reduce(
      (a: number, c: DocumentData) => a + Number(c.data().plan),
      0
    );

    let hours = 0;

    while (mins > 60) {
      hours++;
      mins = mins - 60;
    }

    return `${hours}h ${mins}m`;
  };

  const Transactions = () => {
    const data = useMemo(() => orders.map((e: DocumentData) => e.data()), []);
    const columns = useMemo(
      () => [
        {
          Header: "Plan",
          accessor: "plan",
        },
        {
          Header: "Language",
          accessor: "language",
        },
        {
          Header: "Phone No.",
          accessor: "phoneNumber",
        },
        { Header: "UserID", accessor: "user" },
      ],
      []
    );
    const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
      useTable({
        columns,
        data,
      });

    return (
      <div style={{ overflow: "scroll" }}>
        <table
          {...getTableProps()}
          style={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps();
                  return (
                    <th
                      key={key}
                      {...restColumn}
                      style={{
                        fontWeight: "600",
                        padding: "1rem .75rem",
                        background: "rgba(0,0,0,0.1)",
                      }}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <tr key={key} {...restRowProps}>
                  {row.cells.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps();
                    return (
                      <td
                        key={key}
                        {...restCellProps}
                        style={{
                          padding: "1.75rem .75rem",
                          borderBottom: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <main style={{ background: "rgba(0,0,0,0.05)" }}>
      <Head>
        <title>Just Nyay | Legal Issue No Issue</title>
        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta
          name="keywords"
          content="legal, reporter, case, court, solutions"
        ></meta>
      </Head>

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
                <span>Welcome back</span>
              </div>

              {/* transactions */}
              <div className={styles.white_wrapper}>
                <div style={{ marginTop: "1rem" }} className={styles.header}>
                  <h2 className="header">Update Profile</h2>
                </div>
                <UserProfile />
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage == "transactions" && (
        <section className="container" style={{ padding: " 2em 0" }}>
          <div className={styles.page_wrapper}>
            {/* sidebar */}
            <SidebarDesktop
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />

            {/* page content */}
            <div className="content">
              <div className={styles.header}>
                <h2 className="header">Hello, {userInfo.firstname}</h2>
                <span>Welcome back</span>
              </div>

              {/* transactions */}
              <div className={styles.white_wrapper}>
                <div style={{ marginTop: "1rem" }} className={styles.header}>
                  <h2 className="header">Transactions</h2>
                </div>
                <Transactions />
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage == "dashboard" && (
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
                <span>Welcome back</span>
              </div>

              {/* balance */}
              <div className={styles.balance_wrapper}>
                <div className={styles.block_one}>
                  <span>Your JUSTNYAY Minutes Balance</span>
                  <h2>{minutes()}</h2>
                </div>
                <div className={styles.block_Two}>
                  <div className={styles.block_button}> Buy More Minutes</div>
                  <span>Valid till 29 oct, 2022</span>
                </div>
              </div>

              <div className={styles.balance_grid}>
                <div className={styles.balance_left_wrapper}>
                  <div className={styles.block_one}>
                    <span>Minutes Purchased</span>
                    <h2>{minutes()}</h2>
                  </div>
                </div>
                <div className={styles.balance_left_wrapper}>
                  <div className={styles.block_one}>
                    <span>Minutes Consumed</span>
                    <h2>0h 0m</h2>
                  </div>
                </div>
              </div>

              {/* recect calls */}
              <div className={styles.white_wrapper}>
                <div style={{ marginTop: "1rem" }} className={styles.header}>
                  <h2 className="header">Recent Calls</h2>
                </div>
                <div
                  style={{
                    padding: "2rem 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BsFolderX
                    style={{
                      fontSize: "8rem",
                      color: "rgba(0,0,0,0.7)",
                      display: "block",
                      marginBottom: "1rem",
                    }}
                  />
                  <span
                    style={{
                      opacity: 0.9,
                      fontWeight: "500",
                    }}
                  >
                    No record found
                  </span>
                </div>
              </div>

              {/* transactions */}
              <div className={styles.white_wrapper}>
                <div style={{ marginTop: "1rem" }} className={styles.header}>
                  <h2 className="header">Transactions</h2>
                </div>
                <Transactions />
              </div>

              {/* update profile */}
              <div className={styles.white_wrapper}>
                <div style={{ marginTop: "1rem" }} className={styles.header}>
                  <h2 className="header">Update Profile</h2>
                </div>
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

export default User;
