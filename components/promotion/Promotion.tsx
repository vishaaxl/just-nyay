import styles from "./Promotion.module.css";
interface Props {}

const Promotion: React.FC<Props> = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.block}>
        <h1>15 lakh+</h1>
        <p>Consulting minutes</p>
      </div>
      <div className={styles.block}>
        <h1>1K+</h1>
        <p>Start-up mentored</p>
      </div>
      <div className={styles.block}>
        <h1>1 lakh</h1>
        <p>Pages delivered</p>
      </div>
    </section>
  );
};

export default Promotion;
