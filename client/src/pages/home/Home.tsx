import { useState, useEffect, ChangeEvent } from "react";
import Style from "./Home.module.css";
import { getBlogs } from "../../api/blog-api";
import Blog from "../../components/blog/BlogCard";
import Navbar from "../../shared/navbar/Navbar";
import { IBlog } from "../../types/types";

const Home = () => {
  const [blogs, setBlogs] = useState([] as IBlog[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchWorld, setsearchWorld] = useState<string>("");

  const handleGet = async () => {
    setLoading(true);
    const props = await getBlogs();
    if (!!props!.data) {
      setBlogs(props!.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGet();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    return setsearchWorld(e.target.value.trim());
  };

  const onSearchWorld = <T extends Record<string, string | number>>(
    item: T
  ) => {
    let isTrue: boolean = false;
    Object.keys(item).forEach((el) => {
      if (item[el].toString().includes(searchWorld)) {
        isTrue = true;
      }
    });
    return isTrue;
  };

  // const onSearchWorld = (item: IBlog) => {
  //   let isTrue: boolean = false;
  //   Object.keys(item).forEach((el) => {
  //     if (
  //       el !== "id" &&
  //       item[el as keyof IBlog].toString().includes(searchWorld)
  //     ) {
  //       isTrue = true;
  //     }
  //   });
  //   return isTrue;
  // };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <section className={Style.container}>
        {loading ? (
          <h2 className={Style.loading}>Loading...</h2>
        ) : !loading && !!blogs ? (
          <section className={Style.list}>
            {blogs.filter((item) => onSearchWorld<IBlog>(item)).map((blog) => {
              return <Blog data={blog} key={blog.id} />;
            })}
          </section>
        ) : null}
      </section>
    </div>
  );
};

export default Home;
