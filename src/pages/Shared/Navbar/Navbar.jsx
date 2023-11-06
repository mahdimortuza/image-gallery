import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../../assets/logo/logo.png'

const menu = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },
  {
    id: 3,
    path: "/documentation",
    name: "Documentation",
  },
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mx-0 sticky top-0 z-20 py-5 bg-pink-100 text-black px-5">
      <Link className="text-2xl font-semibold" to="/">
        <img className="h-10" src={logo} />
      </Link>

      <div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <span>
            {open === true ? (
              <FaTimes className="h-5 w-5 text-[#000] mr-3"></FaTimes>
            ) : (
              <FaBars className="h-5 w-5 text-[#000] mr-3"></FaBars>
            )}
          </span>
        </div>

        {/* for pc  */}

        <div className="">
          <ul className="hidden md:flex">
            {menu.map(({ path, name, id }) => (
              <li
                className="mx-2 px-2 py-1 hover:bg-pink-200 rounded"
                onClick={() => setOpen(!open)}
                key={id}
              >
                {" "}
                <Link to={path}>{name}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>

        {/* for mobile  */}
        <div className="fixed md:hidden">
          <ul
            className={`absolute text-black mt-3 ${
              open
                ? " -right-16 top-0 items-center bg-pink-100 w-60 h-screen"
                : "-right-56 hidden"
            }`}
          >
            {menu.map(({ path, name, id }) => (
              <li
                className="mx-2 mb-2 pl-5"
                onClick={() => setOpen(!open)}
                key={id}
              >
                {" "}
                <Link to={path}>{name}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
