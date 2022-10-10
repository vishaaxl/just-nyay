import styles from "./Page.module.scss";
interface Props {
  children: React.ReactNode;
}

const VideoGrid: React.FC<Props> = ({ children }) => {
  return (
    <section className="container">
      <div className={styles.video_grid}>{children}</div>
    </section>
  );
};

export default VideoGrid;
