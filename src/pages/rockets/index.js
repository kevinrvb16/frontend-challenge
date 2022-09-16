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
      <h1>Rockets</h1>
      <h5>Work on progress...</h5>
      <div className="box">
        {rockets.map((rocket, i) => (
            <div key={i}>
                <div key={rocket.id}>{rocket.name}</div>
                <img className="flickr_img" src={rocket.flickr_images[0]} alt="Falcon 1"></img>
                <Link to="/rocket">
                    <button className="button">
                        Veja mais
                    </button>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
