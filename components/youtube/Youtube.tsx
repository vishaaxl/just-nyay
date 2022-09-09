import styles from "./Youtube.module.css";

interface Props {}

const Youtube: React.FC<Props> = () => {
  return (
    <section className={styles.youtube}>
      <div className="container">
        <h1 className={styles.title}>Interviews</h1>
        <iframe
          src="https://www.youtube.com/embed/x6iJU2hlz8c"
          frameBorder="0"
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </section>
  );
};
export default Youtube;
