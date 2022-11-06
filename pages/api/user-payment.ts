import { NextApiRequest, NextApiResponse } from "next";
const shortid = require("shortid");
const Razorpay = require("razorpay");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZOR_PAY_ID,
      key_secret: process.env.NEXT_PUBLIC_RAZOR_PAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const options = {
      amount: 499,
      payment_capture: 1,
      currency: "INR",
      receipt: shortid.generate(),
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
