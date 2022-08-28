import Link from "next/link";
import React from "react";
import Card from "../components/Card";

export default function news({ data }) {
  //   console.log(data);
  return (
    <div className="flex min-h-screen flex-col py-5 px-5">
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
                  <a>Item 1</a>
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
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a>
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div class="navbar-end">
            <a class="btn">Get started</a>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-3">
        {data["articles"].map((article) => (
          <Card article={article} />
        ))}
      </div>
    </div>
  );
}

// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9d259e1cfd6347cfbb0d20563dfacee7

export async function getServerSideProps() {
  let rawData = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9d259e1cfd6347cfbb0d20563dfacee7"
  );
  const data = await rawData.json();

  return { props: { data } };
}
