import axios from "axios"
import { CountInstance } from "../models/CountInstance";

export const getHumansPerTime = () => {
    const instance = axios.create({
        baseURL: "http://localhost:3000/",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST',
          "Content-Type": 'application/json',
          }
      });
    return instance.get("humansPerTime").then((res) => (res.data as CountInstance[]));

}