import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getTranstale = async (text: string) => {
  try {
    const { data } = await api.post("/promp", { text });
    return data;
  } catch (error) {
    console.log(error);
  }
};
