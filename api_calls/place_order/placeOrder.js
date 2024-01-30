import { useSelector } from "react-redux";
import { httpPost } from "..";

export const placeOrder = async (payload) => {
  try {
    const res = httpPost(
      "/custom-orders/create",
      payload,
      true,
      localStorage.getItem("token"),
    );

    return res;
  } catch (error) {
    throw error;
  }
};
