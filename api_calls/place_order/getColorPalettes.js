import { httpGet } from "..";

export async function getColorPalettes() {
  try {
    const res = httpGet(
      `/color-palettes/get-list`,
      true,
      localStorage.getItem("token"),
    );

    return res;
  } catch (error) {
    throw error;
  }
}
