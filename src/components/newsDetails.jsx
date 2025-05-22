import React from 'react'
import { useLocation } from 'react-router-dom';

function NewsDetails() {

    const { state: article } = useLocation(); // récupération de l'article passé via navigate()
    return (
        <div style={{ padding: '20px' }}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt="illustration" style={{ width: '100%', maxWidth: '600px' }} />
            <p><strong>Source :</strong> {article.source.name}</p>
            <p><strong>Auteur :</strong> {article.author}</p>
            <p><strong>Description :</strong> {article.description}</p>
            <p><strong>Contenu :</strong> {article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Lire l'article complet</a>
        </div>
    )
}

export default NewsDetails
