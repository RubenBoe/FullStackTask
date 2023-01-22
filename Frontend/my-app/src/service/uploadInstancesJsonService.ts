import axios, { AxiosRequestConfig } from "axios"

export const uploadInstancesJsonService = (jsonData: string) => {
    const instance = axios.create({
        baseURL: "http://localhost:3000/",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST',
          "Content-Type": 'application/json',
          }
      });
    return instance.put("instances", jsonData).then((res) => (res.data as boolean));

}