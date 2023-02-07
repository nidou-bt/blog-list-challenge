import React, { useState, useEffect } from "react";
import Style from './Home.module.css';
import { getBlogs } from "../../api/blog-api";
import Blog from "../../components/blog/Blog";
import Navbar from "../../shared/navbar/Navbar";
import { IBlog } from "../../types/types";

const Home = () => {
  const [blogs, setBlogs] = useState([] as IBlog[]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGet = async () => {
    setLoading(true);
    const props = await getBlogs();
    if (!!props!.data) {
      setLoading(false);
      setBlogs(props!.data);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div>
      <Navbar />
      <section className={Style.container}>
        {loading ? (
          <h2 className={Style.loading}>Lading...</h2>
        ) : !loading && !!blogs ? (
          <section className={Style.list}>
            {blogs.map((blog) => {
              return <Blog data={blog} key={blog.id} />;
            })}
          </section>
        ) : null}
      </section>
    </div>
  );
};

export default Home;
