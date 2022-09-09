import styles from "./MainMenu.module.css";

import { GiHamburgerMenu } from "react-icons/gi";

interface Props {}

const MainMenu: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className={styles.main_menu}>
        <div className={styles.logo}>JUSTNYAY</div>
        <div className={styles.ham_icon}>
          <GiHamburgerMenu className="font-lg" />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
