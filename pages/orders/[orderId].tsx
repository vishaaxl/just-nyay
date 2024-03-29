import { db } from "firebase.config";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import { BsCaretLeftFill, BsCaretRightFill, BsDot } from "react-icons/bs";
import { useRouter } from "next/router";
import moment from "moment";
import { useState, useEffect } from "react";
import { useAuth } from "context/User";
import Hero from "components/home/Hero";
import { generateUid } from "utils/customId";

interface Props {
  order: string;
  user: string;
  lawyer: string;
  lawyerId: string;
}

const Header = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadowPrimary}
  padding: 1rem;
  font-weight: 500;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background: rgba(0, 0, 0, 0.025);
    border-radius: 5px;
  }
`;

const GoBack = styled.div`
  cursor: pointer;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  .icon {
    color: ${({ theme }) => theme.primaryAccentLight};
  }
`;

const Content = styled.div`
  padding: 1rem 1rem 3rem 1rem;
  background-color: #fff;
  margin-top: 1rem;
  border-radius: 5px 5px 0 0;
  .id {
    font-size: 1.0125rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  span {
    display: block;
  }
  .problemType {
    opacity: 0.6;
  }
  .block-two {
    margin-top: 2.5rem;
    span {
      opacity: 0.7;
      margin-bottom: 0.45rem;
    }
  }
`;

const InvoiceDetails = styled.div`
  margin-top: 2.5rem;
  @media (min-width: 425px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .small {
    opacity: 0.6;
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }
  .big {
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0.95;
    padding-bottom: 0.75rem;
  }
  .user-details {
    span {
      opacity: 0.7;
      margin-bottom: 0.45rem;
    }
  }
  .redirect {
    display: flex;
    align-items: center;
    .icon {
      margin-left: 0.5rem;
    }
    margin-top: 1rem;
    color: ${({ theme }) => theme.primaryAccent};
    opacity: 1 !important;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Total = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 2rem 2rem;
  border-radius: 0 0 5px 5px;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
  }
  span:last-child {
    font-weight: 500;
    font-size: 1.75rem;
  }
`;

const Main = styled.div`
  width: 95%;
  max-width: 60rem;
  margin: 0 auto;
`;

const OrderDetails: React.FC<Props> = ({ order, user, lawyer, lawyerId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const closeCase = async (id: string, status: string) => {
    if (loading) return;

    setLoading(true);
    const docRef = doc(db, "orders", id);
    const data = {
      status: status,
      caseClosedAt: serverTimestamp(),
    };

    await updateDoc(docRef, data)
      .then(() => {
        setLoading(false);
        router.back();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Hero />
      <div
        style={{
          background: "rgba(0,0,0,0.0225)",
          padding: "2rem 0",
          overflow: "hidden",
        }}
      >
        <Main>
          <GoBack onClick={() => router.back()}>
            <BsCaretLeftFill className="icon" />
            Go Back
          </GoBack>
          <Header
            onClick={() =>
              closeCase(
                JSON.parse(order).id,
                JSON.parse(order).status == "closed" ? "assigned" : "closed"
              )
            }
          >
            <span>Status</span>
            <div style={{ color: "#FF8F00", background: "#FFF8F0" }}>
              <BsDot style={{ fontSize: "2rem" }} /> {JSON.parse(order).status}
            </div>
          </Header>

          <Content>
            <div className="block-one">
              <span className="id">
                {generateUid(
                  JSON.parse(order).createdAt?.seconds * 1000,
                  JSON.parse(order).id
                )}
              </span>
              <span className="problemType">
                {JSON.parse(order).problemType}
              </span>
            </div>

            <div className="block-two">
              <span>Language: {JSON.parse(order).language}</span>
              <span>{JSON.parse(order).plan} minutes</span>
              <span>
                Due at: {moment(JSON.parse(order).date).format("MMM Do YY")}
              </span>
            </div>

            <InvoiceDetails>
              <div className="invoice-details">
                <span className="small">Invoice Date:</span>
                <span className="big">
                  {moment(JSON.parse(order).createdAt.seconds * 1000).format(
                    "MMM Do YY"
                  )}
                </span>
              </div>
              <div className="user-details">
                <div className="small">Bill to</div>
                <div className="big">
                  {JSON.parse(user).firstname} {JSON.parse(user).lastname}
                </div>
                <span>{JSON.parse(user).city}</span>
                <span>{JSON.parse(user).email}</span>
                <span>{JSON.parse(user).phoneNumber}</span>
              </div>
            </InvoiceDetails>
            <InvoiceDetails>
              <div className="invoice-details">
                <span className="small">Assigned Date:</span>
                <span className="big">
                  {moment(
                    JSON.parse(order).lawyerAssignedAt.seconds * 1000
                  ).format("MMM Do YY")}
                </span>
              </div>
              <div className="user-details">
                <div className="small">Lawyer</div>
                <div className="big">
                  {JSON.parse(lawyer).firstname} {JSON.parse(lawyer).lastname}
                </div>
                <span>{JSON.parse(lawyer).city}</span>
                <span>{JSON.parse(lawyer).email}</span>
                <span>{JSON.parse(lawyer).phoneNumber}</span>
              </div>
            </InvoiceDetails>
          </Content>
          <Total>
            <span>Plan Minutes</span>
            <span>{JSON.parse(order)?.plan || 0} minutes</span>
          </Total>
        </Main>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // get order details
  const { orderId, lawyerId } = context.query;
  const orderRef = doc(db, "orders", orderId as string);
  const orderSnap = await getDoc(orderRef);

  // get the user who made the offer
  const userRef = doc(db, "users", orderSnap.data()?.user as string);
  const userSnap = await getDoc(userRef);

  // get the assigned Lawyer
  const lawyerRef = doc(db, "lawyers", orderSnap.data()?.lawyer);
  const lawyerSnap = await getDoc(lawyerRef);

  if (orderSnap?.data()?.lawyer != lawyerId) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/lawyer",
      },
      props: {},
    };
  }

  return {
    props: {
      order: JSON.stringify({ ...orderSnap.data(), id: orderSnap.id }),
      user: JSON.stringify({ ...userSnap.data(), id: userSnap.id }),
      lawyer: JSON.stringify({ ...lawyerSnap.data(), id: lawyerSnap.id }),
      lawyerId,
    },
  };
};

export default OrderDetails;
