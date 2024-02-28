import { httpGet } from "..";

export async function getAllFontCategories() {
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
        `/font-categories`,
        true,
        localStorage.getItem("token"),
    );
  
      return res;
    } catch (error) {
      throw error;
    }
}