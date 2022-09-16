import "./style.css";
import { api } from "../../api/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await api.get("/rockets");
    setRockets(data);
  };
  return (
    <div className="container">
      <h1 className="mt-2 mb-1">Rockets</h1>
      <h6>Work is in progress...</h6>
      <div className="box">
        {rockets.map((rocket, i) => (
          <div className="card bg-dark item-card" key={i}>
            <img  src={rocket.flickr_images[1]} alt="Falcon 1" className="card-img-top"/>
            <div className="card-body">
              <h6 className="card-title">{rocket.name}</h6>
              <p className="card-text">{rocket.description}</p>
              <Link to={`/rocket/${rocket.id}`}>
                <button type="button" className="btn btn-secondary">ABOUT</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
