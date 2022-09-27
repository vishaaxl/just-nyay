import styles from "./Home.module.scss";

import { MdGavel, MdTraffic } from "react-icons/md";
import { GiChestnutLeaf, GiHandcuffs } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";

import Image from "next/image";

interface Props {}

const cases = [
  {
    id: 1,
    title: "Divorce",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    icon: <MdGavel />,
    link: "#",
    image: "/images/case-1.jpeg",
  },
  {
    id: 2,
    title: "Drug offense",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    icon: <GiChestnutLeaf />,
    link: "#",
    image: "/images/case-2.jpeg",
  },
  {
    id: 3,
    title: "Domestic Violence",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    icon: <GiHandcuffs />,
    link: "#",
    image: "/images/case-1.jpeg",
  },
  {
    id: 4,
    title: "Traffic Violence",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
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
