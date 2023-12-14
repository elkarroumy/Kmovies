import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key:"c3e7b8215f6e02efc76d0c884a7295d8",
  },
});

export default instance;
