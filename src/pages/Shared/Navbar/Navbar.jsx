import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <h1>FrameFolio</h1>
      <ul className="flex gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
