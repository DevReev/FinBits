import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Link from "next/link";
import Blog from "../components/Blog";
import cheerio from "cheerio";

const Home: NextPage = ({ data, recData }) => {
  // console.log(data);

  return (
    <div className="flex min-h-screen flex-col py-5 px-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main className="flex min-h-screen w-full flex-1 flex-col py-5 px-20 text-center rounded-md my-5">
        <div class="hero min-h-16 bg-base-200 rounded-lg">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://d3jlwjv6gmyigl.cloudfront.net/images/tesla_400.png"
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-5xl font-bold">Investing Made Simple!</h1>
              <p class="py-6 text-xl text-slate-500">
                Get your daily dose of the latest, most important Financial
                developments delivered in plain English. In less than 3 minutes
              </p>
              {/* <button class="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>

        {/* <div className="flex align-middle items-center"> */}
        <div class="divider mt-12 "></div>
        {/* </div> */}

        <div className="w-full mt-20 mb-7 mx-auto bg-base-200 rounded-xl p-5">
          <Link href="/decodingmarket">
            <h1 className="text-3xl hover:scale-105 ease-in duration-100 hover:underline hover:cursor-pointer font-bold">
              Decoding The Market
            </h1>
          </Link>
          <p className="text-xl">
            Decoding the market using data used by the largest players made
            simple.
          </p>
          <p className="text-xl">
            Learn about the likely support and resitance for the week using
            Option Chain.
          </p>
          <Link href="/decodingmarket">
            <img
              src="https://www.finra.org/sites/default/files/wp-content/uploads/2017/03/DowDeclineVocab1-1440x670.jpg"
              alt=""
              className="rounded-xl w-2/3 mx-auto h-52 mt-5 hover:scale-105 ease-in duration-200 hover:cursor-pointer"
            />
          </Link>
        </div>

        <div class="divider my-12"></div>

        <div className="w-full mt-20 mb-7 mx-auto bg-base-200 rounded-xl p-5">
          {/* <Link href="/stockideas"> */}
          <h1 className="text-3xl hover:scale-105 ease-in duration-100 hover:underline hover:cursor-pointer font-bold">
            Stock Ideas
          </h1>
          <p className="text-xl">
            Stock ideas compiled from leading brokers and institutions.
          </p>

          <div class="carousel w-full my-5">
            {recData.slice(0, 4).map((item, index) => (
              <div
                id={`slide${index + 1}`}
                className="carousel-item relative w-full"
              >
                {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
                <div class="card w-2/3 mx-auto bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src={
                        item.split(":")[0].includes("Buy")
                          ? "https://media.warriortrading.com/2020/05/05102927/shutterstock_181864331.jpg"
                          : item.split(":")[0].includes("Neutral")
                          ? "https://images.moneycontrol.com/static-mcnews/2020/10/neutral3.jpg?impolicy=website&width=1600&height=900"
                          : item.split(":")[0].includes("Hold")
                          ? "https://images.moneycontrol.com/static-mcnews/2020/10/neutral3.jpg?impolicy=website&width=1600&height=900"
                          : "data:image/jpeg;base64,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"
                      }
                      alt="Shoes"
                      className="w-full"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="text-3xl text-center">{item.split(":")[0]}</h2>
                    <p>{String(item.split(":")[1]).split("|")[0]}</p>
                    {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div> */}
                  </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={index >= 1 ? `#slide${index}` : `#slide4`}
                    class="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={index + 2 <= 4 ? `#slide${index + 2}` : `#slide1`}
                    class="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>

          <Link href="/stockideas">
            <a class="btn">More</a>
          </Link>
          {/* </Link> */}
        </div>

        <div class="divider my-12"></div>

        {/* <div className="grid grid-cols-3">
          {data["articles"].map((article) => (
            <Card article={article} />
          ))}
        </div> */}
        <h1 class="text-start text-4xl font-bold mb-5">Infographics</h1>
        {/* <div className="my-5">
          <div class="card card-compact w-1/3 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://pbs.twimg.com/media/Ee1aY7uUcAIUxfm.jpg"
                alt="Shoes"
                className="h-[45] w-96"
              />
            </figure>
          </div>
        </div> */}
        <Blog />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const options = { method: "GET" };

  const res = await fetch(
    // "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9d259e1cfd6347cfbb0d20563dfacee7",
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=9d259e1cfd6347cfbb0d20563dfacee7",
    options
  );
  // const res = await fetch(`https://.../data`);
  const data = await res.json();

  const getRawData = (URL) => {
    return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
        return data;
      });
  };

  // URL for data
  const URL = "https://www.moneycontrol.com/stocks/advice/display_more.php";

  const getCricketWorldCupsList = async () => {
    const cricketWorldCupRawData = await getRawData(URL);
    let winners = [];

    // parsing the data
    const parsedCricketWorldCupData = cheerio.load(cricketWorldCupRawData);

    parsedCricketWorldCupData("#listingn").each((i, el) => {
      // winners.push("Buy")
      var $li = parsedCricketWorldCupData(el).find("li");
      $li.each((i, el) => {
        winners.push(parsedCricketWorldCupData(el).text());
      });
      // $div.each((i, el) => {})
      // winners.push($div.find('a').text(),);
    });

    return winners;
  };

  // const recResult = await fetch(
  //   "http://localhost:3000/api/recommendations",
  //   options
  // );
  // const recData = await recResult.json();
  const recData = await getCricketWorldCupsList();

  // Pass data to the page via props
  return { props: { data, recData } };
}

export default Home;
