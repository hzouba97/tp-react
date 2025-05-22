import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function CardComponent({ articleInfo }) {

    const navigate = useNavigate();
    let image = articleInfo.urlToImage;
    const defaultImage = 'https://cdn-icons-png.flaticon.com/512/8634/8634777.png';

    if (articleInfo.urlToImage == null) {
        image = 'https://cdn-icons-png.flaticon.com/512/8634/8634777.png'
    }

    const goToNewsDetails = () => {
        navigate(`/news/${articleInfo.source.name}`, { state: articleInfo });
        console.log("function goToNewsDetails OK")
    };



    return (
        <Card border="primary" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} /> */}
            <Card.Img
                variant="top"
                src={image}
                onError={(e) => {
                    e.target.onerror = null; // empêche la boucle infinie si l’image par défaut échoue aussi
                    e.target.src = defaultImage;
                }}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{articleInfo.title}</Card.Title>
                <Card.Text>
                    <a href={articleInfo.url} target="_blank" rel="noopener noreferrer">
                        Source : {articleInfo.source.name}
                    </a>
                </Card.Text>
                <Button variant="primary" onClick={goToNewsDetails} > Article complet</Button>
            </Card.Body>
        </Card >
    );
}

export default CardComponent;