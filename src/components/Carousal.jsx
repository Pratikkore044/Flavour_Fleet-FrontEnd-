import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Carousel() {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" id="carousel">
        
        <div className="carousel-caption" style={{ zIndex: "5" }}>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success text-white my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(40%)", objectFit: "cotain" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=0&k=20&c=gsS00tWuoGp0_PQNEIIRII-qsCr42TSRujwBzP7P3Ls="
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(40%)", objectFit: "contain" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=0&k=20&c=ze1ngBM0LY4w9aqWx_tGe2vTAr4uf36elveTDZ83fgw="
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(40%)", objectFit: "contain" }}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
