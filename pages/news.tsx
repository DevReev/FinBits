import Link from "next/link";
import React from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";

export default function news({ data }) {
  //   console.log(data);
  return (
    <div className="flex min-h-screen flex-col py-5 px-5">
      <Nav></Nav>
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
