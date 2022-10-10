import styles from "./VideoModal.module.scss";

import {
  AiOutlineClose,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { SetStateAction } from "react";

interface Props {
  embedId: string;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ embedId, setIsModalOpen }) => {
  return (
    <motion.section
      className={styles.modal}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className={styles.player_wrapper}>
          <AiOutlineClose
            className={styles.close_icon}
            onClick={() => setIsModalOpen(false)}
          />
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Legal Reporter"
            className={styles.player}
          />
          <div className={styles.socials}>
            <AiFillYoutube className={styles.youtube_icon} />
            <AiFillFacebook className={styles.youtube_icon} />
            <AiOutlineTwitter className={styles.youtube_icon} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Modal;
