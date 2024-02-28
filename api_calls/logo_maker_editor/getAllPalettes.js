import { httpGet } from "..";

export async function getAllPalettes(page) {

    try {
      const res = httpGet(
        `/palettes?pagination[page]=${page}`,
        true,
        localStorage.getItem("token"),
      );
      console.log('res',res);
      return res;
    } catch (error) {
      throw error;
    }
}