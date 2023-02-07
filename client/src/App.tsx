import { Route, Routes } from "react-router-dom";
import AddBlog from "./pages/add-blog/AddBlog";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
}

export default App;
