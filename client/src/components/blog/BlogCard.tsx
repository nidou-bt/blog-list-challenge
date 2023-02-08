import React from "react";
import Style from "./Blog.module.css";
import { IBlog } from "../../types/types";
import { useNavigate } from "react-router-dom";

type Props = {
  data: IBlog;
};

const BlogCard = ({ data }: Props) => {
  const navigate = useNavigate();
  const onMore = () => {
    console.log("more");
    navigate(`/blog/${data.id}`);
  };

  return (
    <div
      className={Style.container}
      style={
        data.downVote > data.upVote
          ? { border: "2px solid red" }
          : { border: "2px solid green" }
      }
      role="button" onClick={onMore}
    >
      <h4 className={Style.title}>{data.title}</h4>
      <p className={Style.author}>{data.author}</p>
      <p className={Style.content} >
        {data.content}
      </p>
    </div>
  );
};

export default BlogCard;
