import axios from 'axios';
import React, { useEffect, useState } from 'react';

function News() {

/// state (état, données) ///

  const [news, setNews] = useState([]); // Déclare un tableau d’articles initialement vide


/// comportements ///

  // Récupère les données à l'affichage initial du composant (une seule fois grâce au tableau vide)
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-03-24&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((res) => setNews(res.data.articles)) // Stocke les articles dans le state
      .catch((err) => console.error("Erreur :", err)); // Affiche une erreur en cas d'échec
  }, []);


/// affichage (render) ///

  return (
    <div>
      {news.map((nouvelle, index) => (
        <div key={index}>
          <h3>{nouvelle.title}</h3>
          <p>{nouvelle.content}</p>
        </div>
      ))}
    </div>
  );
}

export default News;