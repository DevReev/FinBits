import React from "react";

function Card({ article }) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto my-5 hover:scale-105 ease-in duration-200 hover:cursor-pointer">
      <figure class="px-10 pt-10 ">
        <img src={article.urlToImage} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{article.title}</h2>
        <div className="flex place-content-between min-w-full">
          <div>
            <p>{article.source.name}</p>
          </div>
          <div>
            <p>{article.author}</p>
          </div>
        </div>
        <div class="card-actions my-3">
          <a class="btn btn-primary" href={article.url} target="_blank">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
