
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const apiKey = "7cc580ec884f302a3cdc282d4a1afe5f";
import client from "../services/client";

import "./Home.css";
import FilmeCartao from "../components/Filme";

const Buusca = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getBuscaFilmes = async () => {
    const res = await client.get(`search/movie?api_key=${apiKey}&query=${query}`);
    console.log(res);
    setMovies(res.data.results);
  };

  useEffect(() => {
   // const urlBusca = `${searchURL}?api_key=${apiKey}&query=${query}`;
    getBuscaFilmes();
  }, [query]);

  return (
    <div className="container">
      <h2 className="tiitulo">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="filmes-container">
        {movies.length > 0 &&
          movies.map((movie) => <FilmeCartao key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Buusca;