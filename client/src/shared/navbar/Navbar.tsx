import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Style from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("")
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: any) => {
    e.preventDefault();
    console.log("search", search);
  };

  const onAdd = () => {
    navigate("/addblog");
  };

  return (
    <div className={Style.container}>
      <h2 className={Style.title}>Blogs</h2>
      <form className={Style.form} >
        <input type="text" onChange={onChange} className={Style.input} />
        <button className={Style.button} onClick={onSearch} >
          search
        </button>
      </form>
      <button
        className={Style.button}
        style={{ marginRight: "2em" }}
        onClick={onAdd}
      >
        add new
      </button>
    </div>
  );
};

export default Navbar;
