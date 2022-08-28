import type { NextApiRequest, NextApiResponse } from 'next'
import cheerio from 'cheerio';
import fetch from 'node-fetch';

// const fetch = require("node-fetch");
// const cheerio = require("cheerio");

// function to get the raw data
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

   parsedCricketWorldCupData('#listingn').each((i, el) => {
    // winners.push("Buy")
    var $li = parsedCricketWorldCupData(el).find('li');
    $li.each((i, el) => {
        
        winners.push(parsedCricketWorldCupData(el).text());
    })
    // $div.each((i, el) => {})
    // winners.push($div.find('a').text(),);
   })

   return winners;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    getCricketWorldCupsList().then((winners) => {
      res.status(200).json({ winners });
    });
  }
  else{
    res.status(405).json({ message: "Method not allowed" });
  }
}