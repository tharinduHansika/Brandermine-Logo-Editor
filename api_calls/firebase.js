import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref } from "firebase/database";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { handleUpload } from "./firebase_storage";

const firebaseConfig = {
    apiKey: "AIzaSyAFb27KzcZyJNhzMy-BN7uGNmwzmPXNbP4",
    authDomain: "brander-mine.firebaseapp.com",
    databaseURL: "https://brander-mine-default-rtdb.firebaseio.com",
    projectId: "brander-mine",
    storageBucket: "brander-mine.appspot.com",
    messagingSenderId: "1013299111351",
    appId: "1:1013299111351:web:2b4625134cc1f98bc37432",
    measurementId: "G-XER1PE0J3X"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export async function createFirebaseLogo(logo_id, state) {
    const db = getDatabase(app);
    const path = 'draft_logos/' + getUID() + '/' + logo_id
    console.log(state)
    set(ref(db, path), state);
}
export async function createPremiumLogoRequest(data) {
    const id = Date.now()
    var d = { ...data, id: id }
    d = await uploadPremiumFiles(d)
    d['uid'] = getUID();
    d['status'] = 'PENDING'

    const db = getFirestore(app);
    await setDoc(doc(db, "orders", id.toString()), JSON.parse(JSON.stringify(d)));
    return id
}
export async function createOrder(data) {
    const id = Date.now()
    var d = { ...data, id: id }
    d['uid'] = getUID();
    d['status'] = 'PAYMENT_PENDING'

    const db = getFirestore(app);
    await setDoc(doc(db, "orders", id.toString()), JSON.parse(JSON.stringify(d)));
    return id
}

// export async function createPremiumLogoRequest(data) {
//     const id = Date.now()
//     var d = {...data,id:id}
//     const db = getDatabase(app);
//     d = await uploadPremiumFiles(d)
//     d['uid'] = getUID();
//     const path = 'orders/' + id
//     await set(ref(db, path), d);
//     return id
// }


export const getUID = () => {
    let uid = Date.now()
    if (typeof window !== 'undefined') {
        uid = localStorage.getItem('uid');
    }
    if (uid == null) {
        localStorage.setItem('uid', uid);
        return uid
    }
    return uid
}


async function uploadPremiumFiles(data) {
    if (data.color_file) {
        data.color_file = await handleUpload('premium_logo/' + data.id, data.color_file)
    }
    if (data.font_file) {
        data.font_file = await handleUpload('premium_logo/' + data.id, data.font_file)
    }
    if (data.scketch_file) {
        data.scketch_file = await handleUpload('premium_logo/' + data.id, data.scketch_file)
    }
    return data
}