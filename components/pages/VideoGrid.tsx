import styles from "./Page.module.scss";
interface Props {}

const VideoGrid: React.FC<Props> = () => {
  return (
    <section className="container">
      <div className={styles.video_grid}>
        <iframe
          src="https://www.youtube.com/embed/wVwe7TgJYq0?autoplay=0&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Legal Reporter"
          className={styles.player}
        />
        <iframe
          src="https://www.youtube.com/embed/MhEeagLJEZg?autoplay=0&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Legal Reporter"
          className={styles.player}
        />
        <iframe
          src="https://www.youtube.com/embed/wVwe7TgJYq0?autoplay=0&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Legal Reporter"
          className={styles.player}
        />
        <iframe
          src="https://www.youtube.com/embed/MhEeagLJEZg?autoplay=0&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Legal Reporter"
          className={styles.player}
        />
      </div>
    </section>
  );
};

export default VideoGrid;
