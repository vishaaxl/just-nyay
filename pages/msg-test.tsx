import { useCartContext } from "context/Cart";
import { useState } from "react";

interface Props {}

const MsgTest: React.FC<Props> = () => {
  const [sent, setSent] = useState(false);
  const cart = useCartContext();

  const send = async () => {
    if (sent) return;
    await fetch("/api/confirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: cart.phoneNumber.substr(cart.phoneNumber?.length - 10),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSent(true);
      })
      .catch((err) => console.log(err));
  };
  return <button onClick={send}>MsgTest</button>;
};
export default MsgTest;
