import { useState, useEffect, ChangeEvent, useMemo } from "react";
import Style from "./Home.module.css";
import { getBlogs } from "../../api/blog-api";
import Blog from "../../components/blog/BlogCard";
import Navbar from "../../shared/navbar/Navbar";
import { IBlog } from "../../types/types";

const Home = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");

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
    return setSearchWord(e.target.value.trim().toLowerCase());
  };

  // const filteredBlogs = <T extends Record<string, string | number>>(
  //   item: T
  // ) => {
  //   let isTrue: boolean = false;
  //   Object.keys(item).forEach((el) => {
  //     if (item[el].toString().includes(searchWorld)) {
  //       isTrue = true;
  //     }
  //   });
  //   return isTrue;
  // };

  // const filteredBlogs = (item: IBlog) => {
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

  const filteredBlogs = useMemo(() => {
    return blogs.filter(({author, content, title}) => [title, content, author].some(str => str.toLowerCase().includes(searchWord)))
  }, [blogs, searchWord])

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <section className={Style.container}>
        {loading ? (
          <h2 className={Style.loading}>Loading...</h2>
        ) : !!blogs ? (
          <section className={Style.list}>
            {filteredBlogs.map((blog) => {
              return <Blog data={blog} key={blog.id} />;
            })}
          </section>
        ) : null}
      </section>
    </div>
  );
};

export default Home;