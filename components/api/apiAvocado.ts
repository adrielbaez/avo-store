import axios from "axios";

export const apiAvocado = axios.create({
  baseURL: "https://platzi-avo.vercel.app/api",
});
