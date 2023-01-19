import styles from "./Home.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";
import { MdEmail, MdGavel } from "react-icons/md";
import Link from "next/link";

interface Props {}

const TopNav: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.top_nav} style={{ lineHeight: 1.4 }}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.contact}>
            E-mail:{" "}
            <a
              href="mailto: info@justnyay.com"
              className={styles.accent_underline}
              style={{ cursor: "pointer" }}
            >
              info@justnyay.com
            </a>
            <br />
            Toll Free no.&nbsp;
            <a
              href="tel: 9318428656"
              className={styles.accent_underline}
              style={{ cursor: "pointer" }}
            >
              +91 9318428656
            </a>
          </div>
          <div className={styles.redirects}>
            <Link href="/login/lawyer">Lawyer Login</Link> |{" "}
            <Link href="/login/user">Login</Link>
          </div>
        </div>
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
              <a href="tel: 9318428656">
                <div className={styles.content}>
                  <span>TOLL FREE NUMBER</span>
                  <span>+91 9318428656</span>
                </div>
              </a>
            </div>
            <div className={styles.quick_section}>
              <div>
                <MdEmail size={35} className={styles.logo} />
              </div>
              <a href="mailto: info@justnyay.com">
                <div className={styles.content}>
                  <span>Email Address</span>
                  <span>info@justnyay.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
