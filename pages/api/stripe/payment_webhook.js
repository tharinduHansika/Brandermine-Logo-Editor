import { buffer } from "micro";

const stripe = require('stripe')('sk_test_51LweLZGkhNex33X7iQUDEQQprPtGNcwNsj1ky1L7wLlJ8EevCvXW8rc8fvNmFgQRh18hHtMimmtcRJt7OjDu3PBn00mSh6e04L');
var endpointSecret = 'whsec_d62b75387187a49a4cac74568703ae29a616cca89448d95d83e055c1ae0a26e1'

export const config = {
  api: {
    bodyParser: false,
  }
}
export default async function payment_webhook(req, res) {
  const buf = await buffer(req);
  let event = req.body;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse

  if (endpointSecret) {
    // Get the signature sent by Stripe1
    const signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        buf,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.status(400);
    }
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutIntent = event.data.object;
      console.log(`checkoutIntent  was successful!`);
      console.log(checkoutIntent)
      // Then define and call a method to handle the successful payment intent.
      // handlecheckoutIntentSucceeded(checkoutIntent);
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      console.log(paymentIntent)
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }

  // Return a 200 res to acknowledge receipt of the event
  res.send();
}