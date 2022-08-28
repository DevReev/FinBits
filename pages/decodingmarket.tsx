import Link from "next/link";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
// import GaugeChart from "react-gauge-chart";
import cheerio from "cheerio";
// import fetch from "node-fetch";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import Nav from "../components/Nav";

ChartJS.register(
  CategoryScale,
  BarController,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function decodingmarket({ data, mmi }) {
  // console.log(PE);
  //   console.log(data);
  //  log type of data
  // convert strikes to an array
  // console.log(`MMI: ${mmi}`);
  const chartStyle = {
    height: 50,
  };

  let strikes = [];
  let PE = [];
  let CE = [];

  for (let i = 0; i < data.filtered.data.length; i++) {
    strikes.push(data.filtered.data[i]["strikePrice"]);
    PE.push(data.filtered.data[i]["PE"]["openInterest"]);
    CE.push(data.filtered.data[i]["CE"]["openInterest"]);
  }
  // console.log(CE);

  // console.log(typeof strikes);
  return (
    <div className="flex min-h-screen flex-col py-5 px-5">
      <Nav />

      <div className="w-2/3 mx-auto mt-7 mb-28">
        {/* <h1
          className={`text-2xl font-bold ${
            mmi > 50 ? "text-red-500" : "text-green"
          }`}
        >
          {mmi > 50
            ?

            "Markets seem overbought. It is suggested investors should avoid opening fresh positions as markets are overbought and likely to turn downwards"
            : "Low"}{" "}
          MMI
        </h1> */}
        {mmi > 50 ? (
          <>
            <h1 className="text-red-500 text-2xl font-bold text-center">
              Markets seem overbought
            </h1>

            <h1 className="text-center">
              It is suggested investors should avoid opening fresh positions as
              markets are overbought and likely to turn downwards
            </h1>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="mb-36 mx-5">
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: strikes.splice(40, 45),
            // labels: { strikes },
            datasets: [
              {
                // Label for bars
                label: "PE",
                // Data or value of your each variable
                data: PE.splice(40, 45),
                // Color of each bar
                backgroundColor: ["green"],
                // Border color of each bar
                // borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 1,
              },
              {
                // Label for bars
                label: "CE",
                // Data or value of your each variable
                data: CE.splice(40, 45),
                // Color of each bar
                backgroundColor: ["red"],
                // Border color of each bar
                // borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
        />
      </div>

      {/* <div class="h-1"> */}
      {/* <div className="w-1/2 mx-auto">
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={4}
          percent={0.74}
          style={chartStyle}
          // className="h-10"
        />
      </div> */}
      {/* <Doughnut
        className="w-1/2"
        data={{
          labels: ["MMI"],
          datasets: [
            {
              data: [77, 33],
              backgroundColor: ["red", "white"],
            },
          ],
        }}
        height={1}
      ></Doughnut> */}
      {/* </div> */}

      {/* <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: strikes.splice(40, 45),
          // labels: { strikes },
          datasets: [
            {
              // Label for bars
              label: "total count/value",
              // Data or value of your each variable
              data: PE.splice(40, 45),
              // Color of each bar
              backgroundColor: ["red"],
              // Border color of each bar
              // borderColor: ["aqua", "green", "red", "yellow"],
              borderWidth: 0.5,
            },
          ],
        }}
        // Height of graph
      /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const options = { method: "GET" };

  let getData = async () => {
    let options = {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
      },
    };
    const res = await fetch(
      "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY",
      options
    );
    const data = await res.json();
    return data;
  };

  // const res = await fetch(`https://.../data`);
  const data = await getData();

  const getRawData = (URL: string) => {
    return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
        return data;
      });
  };

  // URL for data
  const URL = "https://www.tickertape.in/market-mood-index";

  const getMMI = async () => {
    const rawData = await getRawData(URL);
    const parsedData = cheerio.load(rawData);

    // console.log("Lol");
    // console.log(parsedData(".jsx-1637443598.jsx-143243304.mmi-value"));
    // console.log(parsedData(".mmi-value .number").text());
    let mmi = parsedData(".mmi-value .number").text();
    // const data = JSON.parse(rawData);
    // return data;
    return mmi;
  };

  // Pass data to the page via props
  const mmi = await getMMI();
  // console.log(mmi);

  return { props: { data, mmi } };
}

export default decodingmarket;
