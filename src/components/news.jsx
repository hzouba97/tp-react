import axios from 'axios';
import React, { useEffect, useState } from 'react'

function News() {

  //state (état, données)
  const [news,setNews] = useState([]);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-03-24&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    //.then((res) => setNews(res.data.articles))
    .then((res) => {
      console.log("Réponse complète :", res); // Affiche toute la réponse
      console.log("Articles :", res.data.articles); // Affiche juste les articles
      setNews(res.data.articles);
    })

    .catch((err) => console.error("Erreur :", err));
    console.log("ok")
  }, [] );

  //comportements
  //setNews(news);


  return (
    <div>
      {/* {news.map((nouvelle) => (
        nouvelle
      ))} */}
    </div>
  )
}

export default News;

