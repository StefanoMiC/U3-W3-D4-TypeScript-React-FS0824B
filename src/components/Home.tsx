import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => (
  <Container>
    <Alert variant="warning">Benvenuto</Alert>
    <Row className="justify-content-center text-center">
      <Col xs={12}>
        <h2>Welcome in our TypeScript App</h2>
      </Col>
      <Col xs={12} md={8}>
        <Link to="/class">vai al class component</Link>
      </Col>
      <Col xs={12} md={8}>
        <Link to="/functional">vai al functional component</Link>
      </Col>
      <Col xs={12} md={8}>
        <Link to="/dynamic/12.8982/20.299182">vai al component dinamico</Link>
      </Col>
      <Col xs={12} md={8}>
        <Link to="/form">vai al form component</Link>
      </Col>
      <Col xs={12} md={8}>
        <Link to="/fetch">vai al fetch component</Link>
      </Col>
    </Row>
  </Container>
);

export default Home;
