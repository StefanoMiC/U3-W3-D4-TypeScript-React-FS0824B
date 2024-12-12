import { useNavigate, useParams } from "react-router-dom";

const Dynamic = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")}>
      <h4>Parametro caricato:</h4>
      <p>
        Lat:{params.lat}, Lon:{params.lon}
      </p>
    </div>
  );
};
export default Dynamic;
