import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComponent from './card';

function News() {

  /// state (état, données) ///

  const [news, setNews] = useState([]); // Déclare un tableau d’articles initialement vide


  /// comportements ///

  // Récupère les données à l'affichage initial du composant (une seule fois grâce au tableau vide)
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-04-22&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((res) => {
        setNews(res.data.articles) // Stocke les articles dans le state
        console.log("résultat API", res.data.articles);
      })
      .catch((err) => console.error("Erreur :", err)); // Affiche une erreur en cas d'échec
    //console.log("news", news)
  }, []);


  /// affichage (render) ///

  return (
    <div>
      {news.map((article) => (
        <CardComponent
          articleInfo={article}
          key={article.url} //utilisation de article.url et pas article.id car les articles n'ont pas d'id
        />
      ))}
    </div>
  );
}

export default News;