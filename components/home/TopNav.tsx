import styles from "./Home.module.scss";
import { Service } from "./Services";

import { AiFillPhone } from "react-icons/ai";

interface Props {}

const TopNav: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.top_nav}>
        Happy To Discuss About Your Requirement&nbsp;
        <span className={styles.accent_underline}>Get a Quote</span>
      </div>
    </>
  );
};

export default TopNav;
