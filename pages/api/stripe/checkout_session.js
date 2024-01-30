// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(
  "sk_test_51LweLZGkhNex33X7iQUDEQQprPtGNcwNsj1ky1L7wLlJ8EevCvXW8rc8fvNmFgQRh18hHtMimmtcRJt7OjDu3PBn00mSh6e04L",
);
// const YOUR_DOMAIN = 'https://demo.brandermine.com';
const YOUR_DOMAIN = "http://localhost:3000";

export default async function checkout_session(req, res) {
  const {
    user_token,
    package_id,
    payment_type,
    order_id,
    brand_name,
    slogan,
    package_name,
    price,
    customer_email,
  } = req.query;

  let surl =
    payment_type == "prem"
      ? `/premium/sample?order_id=${order_id}`
      : `/generate/download?lid=${order_id}&brand_name=${brand_name}&slogan=${slogan}`;
  let curl =
    payment_type == "prem"
      ? `/premium?order_id=` + order_id
      : "/generate/download?lid=" + order_id;

  const session = await stripe.checkout.sessions.create({
    client_reference_id: "rarara",
    customer_email,
    metadata: { user_token, package_id, payment_type, order_id },
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: package_name,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}` + surl,
    cancel_url: `${YOUR_DOMAIN}` + curl,
  });

  res.redirect(303, session.url);
}
