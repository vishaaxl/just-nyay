import axios from "axios";

export const sendConfirmationMessage = async (phoneNumber: string) => {
  console.log("sending confirmation message...");
  const encodedParams = new URLSearchParams();
  encodedParams.set("key", process.env.NEXT_PUBLIC_IVR_KEY as string);
  encodedParams.set("key", process.env.NEXT_PUBLIC_IVR_CLIENT_ID as string);
  encodedParams.set("phone", phoneNumber);
  encodedParams.set(
    "message",
    "Thanks for Calling Just Nyay Please visit www.justnyay.com to book your appointment for the best legal solution or write to us at info@justnyay.com"
  );
  encodedParams.set("senderid", "JUSTNY");
  encodedParams.set("linkid", "justnay");
  encodedParams.set("templateid", "1707166989016781621");

  const url = `https://sms.ivrguru.com/api/v1/sms?` + encodedParams.toString();

  try {
    await axios
      .get(url)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
