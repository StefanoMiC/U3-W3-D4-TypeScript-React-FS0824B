import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FunctionalComponentProps {
  subtitle: string;
  color?: string;
}

interface MovieObject {
  title: string;
  year: number;
}

// const FunctionalComponent = (props: FunctionalComponentProps) => {
const FunctionalComponent = ({ subtitle, color }: FunctionalComponentProps) => {
  // non è obbligatorio specificare PER FORZA il parametro di tipo nel caso di valori primitivi, tipo questo true.
  // se vogliamo rispettare le best practices di TS, bisognerà lasciare che il tipo venga inferito in automatico, laddove possibile. in questo caso
  // sarebbe meglio lasciare che lo gestisca autonomamente
  // in alternativa si può utilizzare il parametro di tipo usando le parentesi angolari tra il nome della funzione e le sue parentesi tonde
  // useState<boolean>(true)
  const [isLoading, setIsLoading] = useState(true);

  // in questo particolare frangente, abbiamo l'esigenza comunqe di inizializzare uno stato per movieObj come null, ma non possiamo permettere a TS
  // di decidere in autonomia il valore di tipo da assegnare (per sempre) ai nostri dati (movieObj, setMovieObj)
  // piuttosto, andremo ad esplicitare un'unione di due tipi, usando questa unione come parametro di tipo del generic di useState.
  // a questo punto a tutti i livelli verrà conosciuta la possibilità di accettare SIA null inizialmente come valore di tipo,
  // SIA l'effettiva descrizione del nostro oggetto
  const [movieObj, setMovieObj] = useState<null | MovieObject>(null);

  return (
    <div onClick={() => setIsLoading(!isLoading)}>
      <h2 style={{ color }}>Componente a Funzione{isLoading ? "..." : ""}</h2>
      <p>{subtitle}</p>

      <Button variant="info" onClick={() => setMovieObj({ title: "Batman", year: 2009 })}>
        Create Object
      </Button>

      {/* questo controllo chiaramente prevede che il valore di movieObj sia null inizialmente, e solo quando diventa oggetto 
sbloccherà la renderizzazione del codice interno */}
      {movieObj && (
        <div>
          <h4>{movieObj.title}</h4>
          <p>{movieObj.year}</p>
        </div>
      )}

      <div>
        <Link to="/class">Vai al class component</Link>
      </div>
    </div>
  );
};
export default FunctionalComponent;
