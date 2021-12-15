import { Card, Button } from "react-bootstrap";


const SingleBook = (props) => {
  
  
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{this.props.book.title}</Card.Title>
      <Card.Text>
        {this.props.book.price}$
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
)
}

export default SingleBook;