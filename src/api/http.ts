import axios from "axios";

const getToken = () => {
  return JSON.parse(localStorage.getItem("token") ?? "")?.state?.token;
};

export const instance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getToken(),
  },
});

class Https {
  static get(url: string) {
    return instance.get(url).then((res) => res.data);
  }

  static post(url: string, data: unknown) {
    return instance.post(url, data);
  }

  static delete(url: string) {
    return instance.delete(url);
  }

  static patch(url: string, data: unknown) {
    return instance.patch(url, data);
  }

  static put(url: string, data: unknown) {
    return instance.put(url, data);
  }
}

export default Https;
