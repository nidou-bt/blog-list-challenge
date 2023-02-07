import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBlog } from "../../api/blog-api";
import { IBlog } from "../../types/types";
import Style from "./AddBlog.module.css";

const AddBlog = () => {
  const [blog, setBlog] = useState<IBlog>({} as IBlog);
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addBlog({ ...blog, upVote: 0, downVote: 0, id: uuid() });
    navigate("/");
  };

  return (
    <div className={Style.container}>
      <form onSubmit={onSave} className={Style.form}>
        <div className={Style.item}>
          <label htmlFor="title" className={Style.label}>
            Title
          </label>
          <input
            className={Style.input}
            type="text"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className={Style.item}>
          <label htmlFor="author" className={Style.label}>
            author
          </label>
          <input
            className={Style.input}
            type="text"
            id="author"
            name="author"
            onChange={onChange}
          />
        </div>
        <div className={Style.item}>
          <label htmlFor="content" className={Style.label}>
            content
          </label>
          <input
            className={Style.input}
            type="text"
            id="content"
            name="content"
            onChange={onChange}
          />
        </div>
        <div className={Style.buttons}>
          <button type="submit" className={Style.button}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
