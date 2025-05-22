import React from 'react'
import { useLocation } from 'react-router-dom';

function NewsDetails() {

    const { state: article } = useLocation(); // récupération de l'article passé via navigate()
    const defaultImage = 'https://cdn-icons-png.flaticon.com/512/8634/8634777.png';

    return (
        <div style={{ padding: '20px' }}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage}
                onError={(e) => {
                    e.target.onerror = null; // empêche la boucle infinie si l’image par défaut échoue aussi
                    e.target.src = defaultImage;
                }}
                alt="illustration" style={{ width: '100%', maxWidth: '600px' }} />
            <p><strong>Source :</strong> {article.source.name}</p>
            <p><strong>Auteur :</strong> {article.author}</p>
            <p><strong>Description :</strong> {article.description}</p>
            <p><strong>Contenu :</strong> {article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Lire l'article complet</a>
        </div>
    )
}

export default NewsDetails
