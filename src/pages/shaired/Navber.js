import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Authentication/Authcontext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [categoryNav, setCategoryNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const toggleNavForCategory = () => {
    setCategoryNav(!nav);
  };

  const closeNavForCategory = () => {
    setCategoryNav(false);
  };

  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className=" mx-auto z-50 w-full h-16 bg-white/80 backdrop-blur-xl dark:bg-black/80 md:px-8 sticky top-0">
      <div className="navbar bg-base-100 max-w-[1200px] mx-auto relative">
        <div className="navbar-start">
          <div className="w-full">
            <div onClick={toggleNav} className="md:hidden z-30 relative">
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <ul
              tabIndex={0}
              className={
                nav ? "block bg-base-100 w-full absolute z-40" : "hidden"
              }
            >
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/about"}>About</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/blog/clothing"}>clothing</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/blog/foot_wear"}>foot wear</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/blog/jewelry"}>jewelry</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/blog/lifestyle"}>lifestyle</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/blog/products"}>products</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/blog/cosmetics"}>cosmetics</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/blog/personal_care"}>
                  personal care
                </Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/writeForUs"}>Write For Us</Link>
              </li>
              <li
                className="my-2 shadow uppercase hover:font-bold text-center"
                onClick={closeNav}
              >
                <Link href={"/components/contact/contact"}>Contact</Link>
              </li>
              {user && (
                <li onClick={closeNav} className="my-2 shadow uppercase hover:font-bold text-center">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </li>
              )}
              {user ? (
                <li onClick={signOutUser} className="my-2 shadow uppercase hover:font-bold text-center">
                  <Link href={"/components/login"} onClick={closeNav}>signOutUser</Link>
                </li>
              ) : (
                <li onClick={closeNav} className="my-2 shadow uppercase hover:font-bold text-center">
                  <Link href={"/components/login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/components/about"}>About</Link>
            </li>

            <li className="">
              <details>
                <summary>Category</summary>
                <ul className="p-2 w-44">
                  <li className="">
                    <details>
                      <summary>Fashion</summary>
                      <ul className="p-2">
                        <li>
                          <Link
                            href={"/components/blog/clothing"}
                            onClick={() =>
                              (document.querySelector("details").open = false)
                            }
                          >
                            clothing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/components/blog/foot_wear"}
                            onClick={() =>
                              (document.querySelector("details").open = false)
                            }
                          >
                            foot wear
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/components/blog/jewelry"}
                            onClick={() =>
                              (document.querySelector("details").open = false)
                            }
                          >
                            jewelry
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/components/blog/lifestyle"}
                            onClick={() =>
                              (document.querySelector("details").open = false)
                            }
                          >
                            lifestyle
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/components/blog/products"}
                            onClick={() =>
                              (document.querySelector("details").open = false)
                            }
                          >
                            products
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li className="">
                    <details>
                      <summary>Beauty</summary>
                      <ul className="p-2">
                        <li>
                          <Link
                            href={"/components/blog/cosmetics"}
                            onClick={() =>
                              (document.querySelector("details").open = false)
                            }
                          >
                            cosmetics
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/components/blog/personal_care"}
                            onClick={() =>
                              (document.querySelector("details").open = false)
                            }
                          >
                            personal care
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/components/writeForUs"}>Write For Us</Link>
            </li>
            <li>
              <Link href={"/components/contact/contact"}>Contact</Link>
            </li>
            {user && (
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            {user ? (
              <li onClick={signOutUser}>
                <Link href={"/components/login"}>signOutUser</Link>
              </li>
            ) : (
              <li>
                <Link href={"/components/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Usama_Mir</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
