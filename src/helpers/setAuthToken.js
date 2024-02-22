import axios from "axios";
import { jwtDecode } from "jwt-decode";

const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    const decoded =
      localStorage.token &&
      jwtDecode(localStorage.token);

    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios.defaults.headers.common["user_id"] = parseInt(decoded.uid);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers.common["user_id"];
    localStorage.removeItem("Authorization");
  }
};

export default setAuthToken;
