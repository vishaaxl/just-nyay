import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
var crypto = require("crypto");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const values = req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.NEXT_PUBLIC_RAZOR_PAY_SECRET)
      .update(
        "wm5pTB" +
          "|" +
          "JNY14122022CVBN" +
          "|" +
          "599.0" +
          "|" +
          "Resgistration Fee" +
          "|" +
          values.firstname +
          "|" +
          values.email +
          "|" +
          values.phoneNumber +
          "|" +
          "m8HH0mKKUnaCbU19wM2XjMOhe9BRdV3y"
      )
      .digest("hex");

    const encodedParams = new URLSearchParams();
    encodedParams.set("key", "wm5pTB");
    encodedParams.set("txnid", "JNY14122022CVBN");
    encodedParams.set("firstname", values.firstname);
    encodedParams.set("phone", values.phoneNumber);
    encodedParams.set("email", values.email);
    encodedParams.set("amount", "599.0");
    encodedParams.set("productinfo", "Registration Fee");
    encodedParams.set("hash", generated_signature);
    encodedParams.set("surl", "https://localhost:3000/buy-now/checkout");
    encodedParams.set("furl", "https://localhost:3000/buy-now/checkout");

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodedParams,
    };

    const url = "https://test.payu.in/_payment";

    axios
      .post(url, options)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));

    return res.status(200).send("hello");
  }
}
