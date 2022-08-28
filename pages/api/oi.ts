import { NextApiRequest, NextApiResponse } from "next";
import cheerio from 'cheerio';


let getData = async () => {
    let options = { method: "GET" , headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8'
    }};
    const res = await fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY", options)
    const data = await res.json();
    return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // getCricketWorldCupsList().then((winners) => {
    //   res.status(200).json({ winners });
    // });
    getData().then((data) => {
      res.status(200).json({ data });
    }
    )
  }
  else{
    res.status(405).json({ message: "Method not allowed" });
  }
}