import { useCartContext } from "context/Cart";
import { Field, useField } from "formik";

interface Props {
  name: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  component?: string;
  rows?: string;
  updateCart?: boolean;
  value?: string;
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  type,
  disabled,
  component,
  rows,
  updateCart,
}) => {
  const [field, meta] = useField(name);
  const cart = useCartContext();
  return (
    <div className="input-block custom-input">
      <label htmlFor={name}>{placeholder}</label>
      <Field
        id={name}
        type={type || "text"}
        disabled={disabled}
        {...field}
        component={component}
        rows={rows}
        onChange={(e: any) => {
          field.onChange(e);
          updateCart && cart.updateCart(name, e.target.value);
        }}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
