import React from "react";
import { useHistory } from "react-router-dom";
import "../style/movies.css";

function Movies() {
  const history = useHistory();

  return (
    <div className="movies-container">

      <h1>Now Showing</h1>
      <div className="movie-grid">
        <MovieCard
          img="https://www.bing.com/th/id/OIP.zNDZbJ1vd_HW_D_3F1zaYgHaLH?w=162&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="Avengers"
          onClick={() => history.push("/booking")}
        />
        <MovieCard
          img="https://www.bing.com/th/id/OIP.yYW16aTZnCoLymK_gMmS-QHaJQ?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="Batman"
          onClick={() => history.push("/booking")}
        />
        <MovieCard
          img="https://www.bing.com/th/id/OIP.-utPw87WE0dxRBlZ9D-ofwHaLH?w=196&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="Lion King"
          onClick={() => history.push("/booking")}
        />
        <MovieCard
          img="https://www.bing.com/th/id/OIP.LEjM-lMumAS-Gneem43dIAHaJL?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="Moana 2"
          onClick={() => history.push("/booking")}
        />
      </div>

      <h1>Coming Soon</h1>
      <div className="movie-grid">
        <MovieCard 
          img="https://www.bing.com/th/id/OIP.ZO1yGRUyCBamNK7EDf8ZdQHaK-?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="Hoppers"
        />
        <MovieCard  
          img="https://www.bing.com/th/id/OIP.GBV9Kyjm58QOI0tiMB2IJAHaK-?w=186&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="Toy Story 5"
        />
        <MovieCard  
          img="https://www.bing.com/th/id/OIP.bU-yaN3MpPeDWQRrkbZ70QHaK-?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="Cosmic Princess Kaguya!"
        />
        <MovieCard  
          img="https://www.bing.com/th/id/OIP.vE76UrlkvAbUC3le9gkTkAHaLH?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          title="The Legend of Aang: The Last Airbender"
        />
      </div>

    </div>
  );
}

function MovieCard({ img, title, onClick }) {
  return (
    <div className="movie-card">
      {img && <img src={img} alt={title} />}
      <h3>{title}</h3>
      {onClick && <button onClick={onClick}>Book Ticket</button>}
    </div>
  );
}

export default Movies;
