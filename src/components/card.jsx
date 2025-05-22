import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function CardComponent({ articleInfo }) {

    const navigate = useNavigate();

    const goToNewsDetails = () => {
        navigate(`/news/${articleInfo.source.name}`, { state: articleInfo });
        console.log("function goToNewsDetails OK")
    };

    return (
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={articleInfo.urlToImage} style={{ height: '200px', objectFit: 'cover' }} />
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