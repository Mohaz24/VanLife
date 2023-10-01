// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite"

// const firebaseConfig = {
//   apiKey: "AIzaSyD5DcoRn-65uW5sdCZ6eXe0a7sYykslS0M",
//   authDomain: "vanlife-2bab2.firebaseapp.com",
//   projectId: "vanlife-2bab2",
//   storageBucket: "vanlife-2bab2.appspot.com",
//   messagingSenderId: "998376518286",
//   appId: "1:998376518286:web:e21273e45dc336da58cfdf"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)




export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
