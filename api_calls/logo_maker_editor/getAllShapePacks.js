import { httpGet } from "..";

export async function getAllShapePacks() {
    // try {
    //   const response = await fetch(`https://branderminedev.infozenit.com/api/shape-packs`);
    //   const objectData = await response.json();
    //   return objectData;
    // } catch (error) {
    //   console.log(error);
    //   return [];
    // }

    try {
      const res = httpGet(
        `/shape-packs`,
        true,
        localStorage.getItem("token"),
      );
  
      return res;
    } catch (error) {
      throw error;
    }
}