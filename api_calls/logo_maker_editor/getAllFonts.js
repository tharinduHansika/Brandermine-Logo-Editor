import { httpGet } from "..";

export async function getAllFonts(page) {
    // try {
    //   const response = await fetch(`https://branderminedev.infozenit.com/api/font-categories`);
    //   const objectData = await response.json();
    //   return objectData;
    // } catch (error) {
    //   console.log(error);
    //   return [];
    // }

    try {
      const res = httpGet(
        `/fonts?pagination[page]=${page}`,
        true,
        localStorage.getItem("token"),
      );
      console.log('res',res);
      return res;
    } catch (error) {
      throw error;
    }
}