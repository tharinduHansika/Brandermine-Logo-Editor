import { httpGet } from "..";

export async function getPackages(type) {
  try {
    const res = httpGet(
      `/packages/list/${type}`,
      true,
      localStorage.getItem("token"),
    );

    return res;
  } catch (error) {
    throw error;
  }
}
