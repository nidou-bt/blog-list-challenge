import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBlog, updateBlog } from "../../api/blog-api";
import { IBlog } from "../../types/types";
import Style from "./Blog.module.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog>({} as IBlog);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGet = async () => {
    setLoading(true);
    const props = await getBlog({ id: id! });
    if (!!props!.data) {
      setBlog(props!.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleGet();
  }, []);

  const onVote = ({value}: {value:"upVote" | "downVote"}) => {
    if(value === "upVote") {
      return updateBlog({...blog, upVote: blog.upVote+1})
    }
    return updateBlog({...blog, downVote: blog.downVote+1})
  }

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className={Style.container}>
      <div className={Style.body}>
        <h4 className={Style.title}>{blog.title}</h4>
        <p className={Style.author}>{blog.author}</p>
        <p className={Style.content}>{blog.content}</p>
        <div className={Style.buttons}>
          <button className={Style.button} onClick={()=>onVote({value:"upVote"})}>Up Vote</button>
          <button className={Style.button} onClick={()=>onVote({value:"downVote"})}>Down Vote</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
