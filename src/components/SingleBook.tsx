import { Card, Col } from "react-bootstrap";
import { IBook } from "../interfaces/IBook";
// interface IBook {
//   id: number;
//   title: string;
//   price: string;
//   imageUrl: string;
//   description: string;
// }

interface SingleBookProps {
  book: IBook;
  another: boolean;
}

const SingleBook = ({ book }: SingleBookProps) => {
  return (
    <Col xs={12} md={4} key={book.id} className="mb-3">
      <Card>
        <Card.Img variant="top" src={book.imageUrl} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
