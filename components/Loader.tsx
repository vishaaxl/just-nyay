import { motion } from "framer-motion";
import Image from "next/image";

interface Props {}

const Loader: React.FC<Props> = () => {
  return (
    <motion.div
      key="loader"
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="blink">
        <Image
          priority
          src="/images/jn-logo.jpeg"
          alt="logo"
          height={150}
          width={150}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
