import { verifyTokenForPage } from "@/utils/verifyToken";
import { cookies } from "next/headers";
import Link from "next/link";
import { SiAudiotechnica } from "react-icons/si";

import Logout from "./HeaderWrpper";

const Header: React.FC = () => {
  const token = cookies().get("JwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  return (
    <div className="bg-blue-100 fixed top-0 left-0 w-full shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto p-1">
        <div className="navbar bg-blue-100">
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-blue-100 rounded-sm z-[1] mt-3 w-64 p-2 shadow"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/articles?pageNumber=1">Articles</Link>
                </li>
                {payload?.isAdmin && (
                  <li>
                    <Link href="/admin">Admin</Link>
                  </li>
                )}
              </ul>
            </div>
            <Link href="/">
              <span className="flex justify-center md:text-3xl items-center">
                Cloud Hosting
                <SiAudiotechnica className="ml-2" />
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
              {payload?.isAdmin && (
                <li>
                  <Link href="/admin">Admin</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            {payload ? (
              <div className="flex items-center gap-4">
                <strong>{payload.username}</strong>
                <Logout />
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-700 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-500 text-white p-2 rounded-sm ml-2 hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
