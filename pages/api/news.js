import axios from "axios";

export default function handler(req,res){
    if (req.method === "GET") {
        const options = {
          method: "GET",
          url: "https://gaming-news.p.rapidapi.com/news",
          headers: {
            "x-rapidapi-host": "gaming-news.p.rapidapi.com",
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          },
        };
    
        axios
          .request(options)
          .then(function (response) {
            res.status(200).json(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        res.status(400);
      }
}

