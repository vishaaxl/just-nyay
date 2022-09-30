import FAQs from "components/home/Faqs";

import { faqs } from "../data";

interface Props {}

const Faqs: React.FC<Props> = () => {
  return <FAQs questionsList={faqs} />;
};

export default Faqs;
