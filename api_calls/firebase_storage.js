import { ref, getDownloadURL, getStorage,uploadBytes } from "firebase/storage";

export async function handleUpload(type,file) {
    let storage = getStorage()
    console.log('Uploading')
    const path = `/${type}/${file.name}`;
    const storageRef = ref(storage, path);
    const resp = await uploadBytes(storageRef, file)
    // const ref = storage.ref(path);
    // const resp = await ref.put(file);
    const url = await getDownloadURL(resp.ref);
    console.log(url)
    return url
};

export function download(url) {
    if (typeof window !== "undefined") {
      window.open(url, '_blank').focus();
    }
  }