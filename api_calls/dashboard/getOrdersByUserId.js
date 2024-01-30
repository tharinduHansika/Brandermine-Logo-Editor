import { httpPost } from "..";

export async function geyOrdersByUserId(payload) {
  try {
    const res = httpPost(
      `/custom-orders/order-by-user-id`,
      payload,
      true,
      localStorage.getItem("token"),
    );

    return res;
  } catch (error) {
    throw error;
  }
}
