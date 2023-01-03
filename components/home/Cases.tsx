import styles from "./Home.module.scss";

import { MdGavel, MdHomeWork, MdTraffic } from "react-icons/md";
import { GiChestnutLeaf, GiHandcuffs } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";

import Image from "next/image";
import { useRouter } from "next/router";

interface Props {}

const cases = [
  {
    id: 3,
    title: "Land Acquisition",
    description: "Are you trying to buy land and having troubles?",
    icon: <MdHomeWork />,
    link: "/lawyers/property-registration",
    image: "/images/case-1.jpeg",
  },
  {
    id: 1,
    title: "Criminal",
    description: "If you need the best criminal lawyer for your criminial case",
    icon: <MdGavel />,
    link: "/lawyers/criminal",
    image: "/images/case-1.jpeg",
  },
  {
    id: 2,
    title: "Divorce",
    description: "Are you upset with your partner and want a divorce",
    icon: <GiChestnutLeaf />,
    link: "/lawyers/divorce",
    image: "/images/case-2.jpeg",
  },

  {
    id: 4,
    title: "Online Fraud",
    description: "Have you been scammed online in any purchase or service",
    icon: <MdTraffic />,
    link: "/lawyers/cyber-crime",
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
  const router = useRouter();

  return (
    <div className={styles.cases} onClick={() => router.push(data.link)}>
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
