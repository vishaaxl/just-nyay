import styles from "./Home.module.scss";

import { MdGavel, MdTraffic } from "react-icons/md";
import { GiChestnutLeaf, GiHandcuffs } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";

import Image from "next/image";

interface Props {}

const cases = [
  {
    id: 1,
    title: "Criminal",
    description: "If you need the best criminal lawyer for your criminial case",
    icon: <MdGavel />,
    link: "#",
    image: "/images/case-1.jpeg",
  },
  {
    id: 2,
    title: "Divorce",
    description: "Are you upset with your partner and want a divorce",
    icon: <GiChestnutLeaf />,
    link: "#",
    image: "/images/case-2.jpeg",
  },
  {
    id: 3,
    title: "Startup",
    description: "Are you going to start your own startup by forming a company",
    icon: <GiHandcuffs />,
    link: "#",
    image: "/images/case-1.jpeg",
  },
  {
    id: 4,
    title: "Online Fraud ",
    description: "Have you been scammed online in any purchase or service",
    icon: <MdTraffic />,
    link: "#",
    image: "/images/case-3.jpeg",
  },
];

const Cases: React.FC<Props> = () => {
  return (
    <section className={styles.cases_wrapper}>
      {cases.map((item) => (
        <Case key={item.id} data={item} />
      ))}
    </section>
  );
};

interface CaseProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    link: string;
  };
}

const Case: React.FC<CaseProps> = ({ data }) => {
  return (
    <div className={styles.cases}>
      <div className={styles.bg_wrap}>
        <Image src={data.image} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={styles.case_icon}>{data.icon}</div>
      <h2 className={styles.case_title}>{data.title}</h2>
      <p className={styles.case_desc}>{data.description}</p>
      <div className={styles.case_cta}>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Cases;
