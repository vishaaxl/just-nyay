import Image from "next/image";
import styles from "./Home.module.scss";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <section className="container">
      <div className={styles.about}>
        <div className={styles.content}>
          <div className="line_heading">
            <span className="line"></span>
            <h4>Who We Are</h4>
          </div>

          <h2 className={styles.about_title}>About JustNyay</h2>
          <p className={styles.about_sub_title}>
            25 Years Of Experience In Law Solutiuons
          </p>
          <p className={styles.about_description}>
            Sed ut perspiciatis unde omnis iste natus error site voluaccusantium
            doloremque laudantium totam rem aperiam eaque quae ab illo inventore
            veritatis et quas architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aute sed quia
            consequuntur magne
          </p>
          <div className={styles.count_container}>
            <h1>100 +</h1>
            <p>Cases Won</p>
          </div>
          <div className={styles.count_container}>
            <h1>150 +</h1>
            <p>Clients reached</p>
          </div>
          <div className="btn-primary">
            <a href="#">
              <span>Book Consulation</span>
            </a>
          </div>
        </div>
        <div className={styles.about_images}>
          <div className={styles.about_image_one}>
            <Image
              alt=""
              src="/images/hero-1.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.about_image_two}>
            <Image
              alt=""
              src="/images/hero-2.png"
              layout="fill"
              objectFit="cover"
              objectPosition="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
