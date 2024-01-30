import { httpGet } from "..";

export async function getSampleLogos() {
  try {
    const res = httpGet("/sample-logos/get-all");

    return res;
  } catch (error) {
    throw error;
  }
}
