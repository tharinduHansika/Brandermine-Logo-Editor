import { httpGet } from "..";

export async function getAllLayouts(){

    try{
        const res = httpGet(
            `/layouts`,
            true,
            localStorage.getItem("token"),
        );
        return res;
    }catch(error){
        throw error;
    }
}