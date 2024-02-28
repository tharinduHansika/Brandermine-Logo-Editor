import { httpGet } from "..";

export async function getAllShapes(page) {
    // try {
    //   const response = await fetch(`https://branderminedev.infozenit.com/api/shapes`);
    //   const objectData = await response.json();
    //   return objectData;
    // } catch (error) {
    //   console.log(error);
    //   return [];
    // }

    try {
      const res = httpGet(
        `/shapes?pagination[page]=${page}`,
        true,
        localStorage.getItem("token"),
      );
      console.log('res',res);
  
      return res;
    } catch (error) {
      throw error;
    }
}