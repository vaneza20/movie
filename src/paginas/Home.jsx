import { useEffect, useState } from "react";
import client from "../services/client";

import FilmeCartao from "../components/Filme";
import "./Home.css";

const apiKey = "7cc580ec884f302a3cdc282d4a1afe5f";

const Home = () => {
  const [topFilmes, setTopFfilmes] = useState([]);

  const getPopularFilmes= async (url) => {
    const res = await client.get(`movie/popular?api_key=${apiKey}`);
    setTopFfilmes(res.data.results);
  };

  useEffect(() => {
    getPopularFilmes();
  }, []);

  console.log(topFilmes);
[{},{}]
  return (
    <div className="container">
      <h2 className="titulo">Melhores filmes:</h2>
      <div className="filmes-container">
        {topFilmes.length > 0 &&
          topFilmes.map((movie) => <FilmeCartao key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;