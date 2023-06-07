import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import fetch from "node-fetch";

let target_url: string = 'https://api.mockaroo.com/api/generate.json?key=02d1cc90&count=';
/* sample endpoint data:
REQ BODY: 
  [
    {
    "name":"stocks",
    "type":"Stock Name"
    },
    {
    "name":"username",
    "type":"Username"
    }
]

RES BODY:
[
    {
        "stocks": "Verizon Communications Inc.",
        "username": "bhabbes0"
    },
    {
        "stocks": "Bioptix, Inc",
        "username": "lsprigings1"
    },
    {
        "stocks": "American Tower Corporation (REIT)",
        "username": "lpicard2"
    },
    {
        "stocks": "Jupai Holdings Limited",
        "username": "vchettoe3"
    },
    {
        "stocks": "Insight Select Income Fund",
        "username": "malennikov4"
    }
]
*/

const mockarooReqBody: any[] = ['test'];

const mockController = {
  
    // route to POST to API, to retrieve mock data
    // will need to format POST data 
    // assume we receive from client a list of names & types, need to construct req.body for our API call
  fetchMockData: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const { data, count } = req.body;
      
      target_url = target_url.concat(count);

      console.log(`request recieved, making call to mockaroo API for a count of ${count} with data: `, data);
      
      // fetch to mockaroo API
      const mockarooRes = await fetch(target_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const mockarooData = await mockarooRes.json();
      if (mockarooData) {
        console.log('data returned from mockaroo API, ', mockarooData);
        res.locals.responseData = mockarooData;
        return next();
      } else {
        return next({
          log: `No data rerturned from Mockaroo API`,
          message: { err: 'No data rerturned from Mockaroo API' },
        });
      }
      
    } catch (err: any | unknown) {
        return next({
            log: `Error in mockController.fetchMockData: ${err}`,
            message: { err: 'Error making a reqest to Moackaroo' },
          });
    }
  }
  
  
  
}

export default mockController;