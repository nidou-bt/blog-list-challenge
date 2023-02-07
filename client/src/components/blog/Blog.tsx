import React from "react";
import Style from "./Blog.module.css";
import { IBlog } from "../../types/types";

type Props = {
  data: IBlog;
};

const Blog = ({ data }: Props) => {
  return (
    <div
      className={Style.container}
      style={
        data.downVote > data.upVote
          ? { border: "1px solid red" }
          : { border: "1px solid green" }
      }
    >
      <h4 className={Style.title}>{data.title}</h4>
      <p className={Style.author}>{data.author}</p>
      <p className={Style.content}>{data.content}</p>
      <div className={Style.buttons}>
        <button className={Style.button}>Up Vote</button>
        <button className={Style.button}>Down Vote</button>
      </div>
    </div>
  );
};

export default Blog;
