import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { IBook } from "../interfaces/IBook";
// interface IBook {
//   id: number;
//   title: string;
//   price: string;
//   imageUrl: string;
//   description: string;
// }

const FetchComponent = () => {
  // "https://striveschool-api.herokuapp.com/food-books"

  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/food-books");
    if (resp.ok) {
      const arrOfBooks: IBook[] = await resp.json();

      setBooks(arrOfBooks);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Row>
            {books.map(book => (
              <SingleBook book={book} another={true} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FetchComponent;
