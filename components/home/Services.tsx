import styles from "./Home.module.scss";

import { MdGavel, MdMedicalServices } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { BsCalendar2RangeFill } from "react-icons/bs";
import Image from "next/image";

interface Props {}

const services = [
  {
    id: 1,
    title: "Online Consultation with a Lawyer",
    description:
      "Now consult a lawyer or get your legal documents reviewed anytime from the convenience of your home. With secure calls and verified Lawyers",
    icon: <MdGavel />,
    link: "#",
  },
  {
    id: 2,
    title: "Property legal solutions for all your property investments",
    description:
      "Trusted Property Legal Services. We help you take the right Property investment decisions. India's #1 Property Legal Solutions.",
    icon: <FaBalanceScale />,
    link: "#",
  },
  {
    id: 3,
    title: "Documentation by Expert Professionals",
    description:
      "Corporate, HR, professional or personal, Get any legal document drafted and customised to your business or personal needs in the most affordable way.",
    icon: <BsCalendar2RangeFill />,
    link: "#",
  },
  {
    id: 4,
    title: "Start-up Legal Solutions",
    description:
      "Planning a start-up or have an on-going business, now You focus on your business and leave the legal worries on us. Consulting, Drafting, Review and Filing all under one roof.",
    icon: <MdMedicalServices />,
    link: "#",
  },
];

const Services: React.FC<Props> = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className="line_heading">
          <span className="line"></span>
          <h4>What We Do</h4>
        </div>
        <h2 className={styles.main_heading}>Legal Practice Areas</h2>

        <div className={styles.services_wrapper}>
          <div className="">
            {services.map((item) => (
              <Service key={item.id} data={item} />
            ))}
          </div>
          <div className={styles.service_image}>
            <Image
              objectPosition="right"
              layout="fill"
              objectFit="cover"
              src="/images/hero-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  };
}

export const Service: React.FC<ServiceProps> = ({ data }) => {
  return (
    <div className={styles.service_container}>
      <div className={styles.service_icon}>{data.icon}</div>
      <div className={styles.service_content}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Services;
