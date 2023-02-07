import { Route, Routes } from "react-router-dom";
import AddBlog from "./pages/add-blog/AddBlog";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/:id" element={<Home />} />
    </Routes>
  );
}

export default App;
