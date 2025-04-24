import Card from 'react-bootstrap/Card';

function CardComponent({articleInfo}) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={articleInfo.urlToImage} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{articleInfo.title}</Card.Title>
        <Card.Text>
            {articleInfo.source.id}
            {articleInfo.source.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;