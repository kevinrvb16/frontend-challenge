import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/client";
import "./style.css";
const Rocket = (props) => {
  const { id } = useParams();
  const [rocket, setRocket] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await api.get(`/rockets/${id}`);
    setRocket(data);
  };
  return (
    <div>
      <h1 className="mt-2 mb-2">Rocket {rocket.name}</h1>
      <div className="card bg-dark width-64 mt-5">
        <h5>Description: {rocket.description}</h5>
        <h4>Height: {rocket.height?.meters}m</h4>
        <h4>Diameter: {rocket.diameter?.meters}m</h4>
        <h4>Mass: {rocket.mass?.kg}kg</h4>
      </div>
      <div className="images width-70">
        {rocket.flickr_images?.map((img, i) => (
          <img key={i} src={img} alt="Falcon 1" />
        ))}
      </div>
    </div>
  );
};

export default Rocket;