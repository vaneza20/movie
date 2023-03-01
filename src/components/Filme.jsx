import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
const imagesURL = "https://image.tmdb.org/t/p/w200";


const FilmeCartao = ({ movie, showLink = true }) => {
  console.log(movie)
  return (
    <div>
      <img src={imagesURL + movie?.poster_path} alt={movie?.title}  />
      <h2>{movie?.title}</h2>
      <p>
        <FaStar /> média de votos   {movie?.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie?.id}`}>Detalhes</Link>}
    </div>
  );
};

export default FilmeCartao;