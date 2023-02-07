import axios from "axios";
import { IBlog } from "../types/types";

const blogAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getBlogs = async (): Promise<
  | {
      data: IBlog[];
    }
  | undefined
> => {
  try {
    const { data } = await blogAxios.get("/blogs");
    console.log("data", data);
    return { data };
  } catch (err) {
    console.log("error", err);
  }
};

export const addBlog = async (body: IBlog) => {
  try {
    const data = await blogAxios.post("/blogs", body);
    return data;
  } catch (err) {
    console.log("error", err);
  }
};
