import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import FilmeCartao from "../components/Filme";

import client from "../services/client";
import "./Filme.css";

const apiKey = "7cc580ec884f302a3cdc282d4a1afe5f";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const res = await client.get(`movie/${id}?api_key=${apiKey}`);
    setMovie(res.data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="filme-pagina">
      {movie && (
        <>
          <FilmeCartao movie={movie} showLink={false} />
          {/* <p className="tagline">{movie.tagline}</p> */}
          <div  className="info">
          <div >
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div >
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div >
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div >
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
          </div>
         
        </>
      )
    }
    </div>
  );
};

export default Movie;