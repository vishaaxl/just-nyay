import styles from "./Home.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";
import { MdEmail, MdGavel } from "react-icons/md";

interface Props {}

const TopNav: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.top_nav}>
        Happy To Discuss About Your Requirement&nbsp;
        <span className={styles.accent_underline}>Get a Quote</span>
      </div>
      <div className="container">
        <div className={styles.quick_info}>
          <div
            className="logo"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            <Image
              src="/images/logo.png"
              alt=""
              height="70"
              width="212"
              objectFit="contain"
            />
          </div>

          <div className={styles.quick_content}>
            <div className={styles.quick_section}>
              <div>
                <MdGavel size={35} className={styles.logo} />
              </div>
              <div className={styles.content}>
                <span>TOLL FREE NUMBER</span>
                <span>+91 9318428656</span>
              </div>
            </div>
            <div className={styles.quick_section}>
              <div>
                <MdEmail size={35} className={styles.logo} />
              </div>
              <div className={styles.content}>
                <span>Email Address</span>
                <span>info@justnyay.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
