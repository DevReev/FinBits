import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {/* <a>Item 1</a> */}
                <Link href="/decodingmarket">Decoding Markets</Link>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">Finbits</a>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link href="/decodingmarket">Decoding Markets</Link>
            </li>
            <li tabindex="0">
              <Link href="/stockideas">Stock Ideas</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Get started</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
