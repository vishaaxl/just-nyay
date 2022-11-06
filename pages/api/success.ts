import { NextApiRequest, NextApiResponse } from "next";
var crypto = require("crypto");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      } = req.body;

      const generated_signature = crypto
        .createHmac("sha256", process.env.NEXT_PUBLIC_RAZOR_PAY_SECRET)
        .update(razorpayOrderId + "|" + razorpayPaymentId)
        .digest("hex");

      if (generated_signature != razorpaySignature) {
        return res.status(400).json({ msg: "Transaction not legit!" });
      }

      // THE PAYMENT IS LEGIT & VERIFIED
      // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

      res.status(200).json({
        msg: "success",
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
