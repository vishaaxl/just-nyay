import styles from "./TopMenu.module.css";

import { MdMarkunreadMailbox, MdLocationOn } from "react-icons/md";

interface Props {}

const TopMenu: React.FC<Props> = () => {
  return (
    <div className={styles.top_menu}>
      <div className={styles.line}>
        <p> Welcome to Just-Nyay, The Leading Law Services Firm</p>
      </div>
      <div className={styles.line}>
        <MdMarkunreadMailbox className="font-sm" />
        <p> support@justnyay.com</p>
      </div>
      <div className={styles.line}>
        <MdLocationOn className="font-sm" />
        <p> 15 Pills Avenue, Camron, FL 33069</p>
      </div>
    </div>
  );
};

export default TopMenu;
