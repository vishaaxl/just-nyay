import styles from "./PriceMenu.module.scss";

import { AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/router";

import CustomSelect from "./CustomSelect";
import { useCartContext } from "context/Cart";
import styled from "styled-components";
import {
  BsChevronBarRight,
  BsChevronRight,
  BsPersonFill,
  BsPhoneFill,
  BsTelephoneFill,
} from "react-icons/bs";
import Image from "next/image";

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

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  .heading {
    font-size: 1.75rem;

    @media (min-width: 425px) {
      font-size: 2.5rem;
    }
    font-weight: 800;
    line-height: 1.4;
    .accent {
      color: #b68c5a;
    }
  }

  .perks {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: 425px) {
      gap: 4rem;
    }

    .line {
      display: flex;
      gap: 0.45rem;
      align-items: center;

      span {
        white-space: nowrap;
        font-weight: 600;
      }

      .icon-wrapper-circular {
        padding: 0.5rem;
        border: 1px solid #b78c59;
        border-radius: 50%;
      }

      .icon {
        color: #b78c59;
      }
    }
  }

  .section-one > * {
    margin-bottom: 1.5rem;
  }

  .section-two {
    position: relative;
    height: 400px;
  }
`;

const BookButton = styled.div`
  cursor: pointer;
  padding: 1.125em 3em 1.125em 1.25em;
  color: #b78c59;
  background: #f2f2f2;
  border-radius: 30px;

  @media (min-width: 425px) {
    padding: 1.25em 3.5em 1.25em 1.75em;
  }

  span {
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    white-space: nowrap;
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
    right: -5%;
    top: 2%;
    height: 98%;
    aspect-ratio: 1 / 1;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

const BookButtonWrapper = styled.div`
  postion: relative;

  background: #162542;
  color: #fefeee;
  border-radius: 30px;
  padding: 0.2rem 0.2rem 0.2rem 1.25rem;
  max-width: 425px;

  @media (min-width: 425px) {
    padding: 0.2rem 0.2rem 0.2rem 2.25rem;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    white-space: nowrap;
    font-weight: 800;
    font-size: 1.3rem;

    @media (min-width: 425px) {
      font-size: 1.75rem;
    }
  }
`;

const PriceChart: React.FC<Props> = ({ heading }) => {
  const cart = useCartContext();

  const router = useRouter();

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
    <section
      className="container"
      id="price_chart"
      style={{ overflow: "hidden" }}
    >
      <Wrapper>
        <div className="section-one">
          <div className="heading">
            Get <span className="accent">Legal Consultation</span> From Top
            Lawyers of <span className="accent">High Court</span> and{" "}
            <span className="accent">Supreme Court</span>
          </div>
          <BookButtonWrapper>
            <h2>Just &#8377; 599 Only</h2>
            <BookButton onClick={navigateToBuy}>
              <span> Book Now</span>

              <div className="icon-wrapper">
                <BsChevronRight className="icon" />
              </div>
            </BookButton>
          </BookButtonWrapper>
          <div className="perks">
            <div className="line">
              <div className="icon-wrapper-circular">
                <BsPersonFill className="icon" />
              </div>
              <span>Experienced Lawyers</span>
            </div>
            <div className="line">
              <div className="icon-wrapper-circular">
                <BsTelephoneFill className="icon" />
              </div>
              <span>Secured Calls</span>
            </div>
          </div>
        </div>
        <div className="section-two">
          <Image
            src="/images/call-center-working-24-hr.webp"
            alt=""
            priority
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default PriceChart;
