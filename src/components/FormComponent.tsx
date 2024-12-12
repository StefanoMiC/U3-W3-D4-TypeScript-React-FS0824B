import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [check, setCheck] = useState(false);

  //   function handleChange<T>(setState: Dispatch<SetStateAction<T>>, targetData: T) {
  //     setState(targetData);
  //   }

  type HandleChangeType = <T>(x: Dispatch<SetStateAction<T>>, y: T) => void;

  const handleChange: HandleChangeType = (setState, targetData) => {
    setState(targetData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //   console.log("name", name);
    //   console.log("surname", surname);
    //   console.log("check", check);

    console.table({ name, surname, check });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8}>
          <Form
            onSubmit={handleSubmit}
            // onSubmit={e => {
            //   e.preventDefault();

            //   //   console.log("name", name);
            //   //   console.log("surname", surname);
            //   //   console.log("check", check);

            //   console.table({ name, surname, check });
            // }}
          >
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Inserisci il tuo nome" value={name} onChange={e => handleChange(setName, e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSurname">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                value={surname}
                onChange={e => handleChange(setSurname, e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" id="formCheck" label="Check me out" checked={check} onChange={e => handleChange(setCheck, e.target.checked)} />
            </Form.Group>
            <Button type="submit" variant="primary">
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
