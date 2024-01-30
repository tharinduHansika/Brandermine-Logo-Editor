import { httpPost } from "..";

export async function getOrderById(payload) {
  try {
    const res = httpPost(
      `/custom-orders/order-by-id`,
      payload,
      true,
      localStorage.getItem("token"),
    );

    return res;
  } catch (error) {
    throw error;
  }
}
