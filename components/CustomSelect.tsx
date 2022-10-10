import styles from "./Custom.module.scss";

interface Props {
  optionsList: string[];
  placeholder: string;
  name: string;
}

import { BiChevronDown } from "react-icons/bi";
import { useCartContext } from "context/Cart";

const CustomSelect: React.FC<Props> = ({ placeholder, optionsList, name }) => {
  const cart = useCartContext();
  return (
    <div className={styles.select_wrapper}>
      <select
        className={styles.custom_select}
        defaultValue={"DEFAULT"}
        onChange={(e) => cart.updateCart(name, e.target.value)}
      >
        <option value="DEFAULT" disabled>
          {placeholder}
        </option>
        {optionsList.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <BiChevronDown
        style={{
          position: "absolute",
          right: 10,
          top: "15%",
          fontSize: "1.15rem",
        }}
      />
    </div>
  );
};

export default CustomSelect;
