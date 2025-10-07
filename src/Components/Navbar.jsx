import React, { useState } from "react";
import { Link } from "react-router";
import logoImg from "/logo.png";
import { GithubIcon, Menu } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const link = (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allApps">Apps</Link>
        </li>
        <li>
          <Link to="/installedApps">Installation</Link>
        </li>
      </ul>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="lg:hidden">
            <div className="mr-3" onClick={() => setMenu(!menu)}>
              <Menu />
            </div>

            <ul
              className={`menu menu-sm bg-base-100 rounded-box z-1 mt-3 absolute ${
                menu ? "top-13" : "-top-30"
              } duration-1000 w-52 p-2 shadow`}
            >
              {link}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-8" src={logoImg} alt="" />
            <Link to="/" className="text-xl font-semibold text-violet-600">
              HERO.IO
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">{link}</div>
        <div className="navbar-end">
          <Link
            to="https://github.com/swapnachari-marjuk"
            target="_blank"
            className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
          >
            <GithubIcon /> Contributes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
