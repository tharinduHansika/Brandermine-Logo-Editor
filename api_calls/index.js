const { default: axios } = require("axios");
const { authState, errorState } = require("../store/authstore");

const BASE_URL = "https://api.brandermine.com";
// const BASE_URL = "http://localhost:9000";

export async function httpGet(path, auth = false, token = null) {
  try {
    if (token != null) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    if (auth) {
      if (checkAuth()) {
        return await axios.get(BASE_URL + path);
      } else {
        return null;
      }
    }
    return await axios.get(BASE_URL + path);
  } catch (error) {
    throw handleError(error);
  }
}
export async function httpPost(path, data, auth = false, token = null) {
  try {
    if (token != null) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    if (auth) {
      if (checkAuth()) {
        return await axios.post(BASE_URL + path, data);
      } else {
        return null;
      }
    } else {
      return await axios.post(BASE_URL + path, data);
    }
  } catch (error) {
    throw handleError(error);
  }
}

export async function checkAuth() {
  if (!authState.get().isAuthenticated) return false;
  if (!authState.get().authToken) {
    const token = localStorage.getItem("token");
    if (token == null) return false;
    if (token) {
      try {
        const resp = await axios.get(BASE_URL + "/account/me");
        if (resp.data) {
          authState.set({
            ...authState.get(),
            isAuthenticated: true,
            authProfile: resp,
            token: token,
          });
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          return true;
        } else {
          alert("Login");
        }
      } catch (error) {
        alert("Login");
      }
      return false;
    }
  }
  return true;
}

function handleError(err) {
  if (err.response && err.response.data && err.response.data.message) {
    if (typeof err.response.data.message == "string") {
      errorState.set({
        ...errorState.get(),
        authErrors: [err.response.data.message],
      });
    } else {
      errorState.set({
        ...errorState.get(),
        authErrors: err.response.data.message,
      });
    }
  }
  switch (err.response.status) {
    case 200:
      return err.response;
    case 400:
      console.log(err.response.data.message);
      return err.response;
    case 401:
      console.log(err.response.data.message);
      return err.response;
    // authState.errors.set(err.response.data.message)

    default:
      return null;
  }
}
