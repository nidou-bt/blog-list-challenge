import React, { useState, useEffect } from "react";
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
      <section>
        {loading ? (
          <h2>Lading...</h2>
        ) : !loading && !!blogs ? (
          blogs.map((blog) => {
            return <Blog data={blog} key={blog.id} />;
          })
        ) : null}
      </section>
    </div>
  );
};

export default Home;
