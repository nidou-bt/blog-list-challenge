import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Navbar.module.css";

type Props = {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Navbar = ({ handleSearch }: Props) => {
  const navigate = useNavigate();

  const onAdd = () => {
    navigate("/addblog");
  };

  const onHome = () => {
    navigate("/");
  };

  return (
    <div className={Style.container}>
      <h2 className={Style.title} onClick={onHome}>
        Blogs
      </h2>
      <form className={Style.form}>
        <label className={Style.label} htmlFor="search">
          Search
        </label>
        <input type="text" onChange={handleSearch} className={Style.input} />
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
