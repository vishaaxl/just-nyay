import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
var jsSHA = require("jssha");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const values = req.body;
    // `${values.price}.00`;

    var hashString =
      "" + // Merchant Key
      "|" +
      values.id +
      "|" +
      `10.00` +
      "|" +
      "Registration Fee" +
      "|" +
      values.firstname +
      "|" +
      values.email +
      "|" +
      "||||||||||" +
      ""; // Your salt value

    var sha = new jsSHA("SHA-512", "TEXT");
    sha.update(hashString);

    const encodedParams = new URLSearchParams();
    encodedParams.set("key", "wm5pTB");
    encodedParams.set("txnid", values.id);
    encodedParams.set("firstname", values.firstname);
    encodedParams.set("phone", values.phoneNumber);
    encodedParams.set("email", values.email);
    encodedParams.set("amount", `10.00`);
    encodedParams.set("productinfo", "Registration Fee");
    encodedParams.set("hash", sha.getHash("HEX"));

    encodedParams.set("surl", "http://localhost:3000/buy-now/checkout");
    encodedParams.set("furl", "http://localhost:3000/buy-now/checkout");

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodedParams,
    };

    const url = "https://secure.payu.in/_payment";

    try {
      await axios
        .post(url, encodedParams)
        .then((response: any) => {
          if (response.status == 200) {
            return res
              .status(200)
              .send({ url: response.request.res.responseUrl });
          } else {
            return res.status(200).send("Invalid request");
          }
        })
        .catch((err) => {
          return res.status(200).send("Something went wrong");
        });
    } catch (error) {
      return res.status(500).send("Something went wrong");
    }
  }
}
