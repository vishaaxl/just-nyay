import styles from "./Youtube.module.css";

interface Props {
  link?: string;
  hideHeading?: boolean;
  autoplay?: boolean;
}

const Youtube: React.FC<Props> = ({ hideHeading, autoplay, link }) => {
  return (
    <section className={styles.youtube}>
      <div className="container">
        {!hideHeading && <h1 className={styles.title}>Legal Reporter</h1>}
        <iframe
          src={`https://www.youtube.com/embed/${
            link || "x6iJU2hlz8c"
          }?autoplay=${autoplay}&mute=1`}
          frameBorder="0"
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </section>
  );
};
export default Youtube;
