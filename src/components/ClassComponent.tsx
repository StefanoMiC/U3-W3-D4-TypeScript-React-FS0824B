import { Component } from "react";
import { Link } from "react-router-dom";
// creiamo un'interfaccia per le props di questo componente
// siccome è un'interfaccia specifica di questo componente la creeremo qui dentro
interface ClassComponentProps {
  subtitle: string; // prop obbligatoria per tutte le istanze di questo componente
  color?: string; // prop opzionale, definita per casi saltuari, ma non obbligatoria da avere su ogni istanza
}

// definire l'interfaccia di stato in una classe lo si fa nella stessa maniera
interface ClassComponentState {
  isLoading: boolean;
}

// Per configurare un componente a Classe in TypeScript dovremo fornire un'interfaccia per ogni parametro (props e stato)
// il primo definito come P, il secondo definito come S
// Sfrutteremo quindi il concetto dei Generics passando quindi le NOSTRE definizioni per le props e per lo stato
// Così facendo il componente non riceverà come valore di tipo per entrambi {}, ma sarà una definizione che corrisponderà effettivamente ai
//  valori passati come props e ai valori di stato

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state = {
    isLoading: true
  };

  render() {
    return (
      <div onClick={() => this.setState({ isLoading: false })}>
        <h2 style={{ color: this.props.color }}>Componente a Classe{this.state.isLoading ? "..." : ""}</h2>
        <p>{this.props.subtitle}</p>
        <p>ENV-SECRET-KEY: {import.meta.env.VITE_SECRET_KEY}</p>
        <Link to="/functional">Vai al functional component</Link>
      </div>
    );
  }
}

export default ClassComponent;
