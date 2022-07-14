import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="container">
      <div className="details__main">
        <div className="details__main-right">
          <img
            className="details__main-right-img"
            src="https://img.nauticexpo.ru/images_ne/photo-g/22164-10523609.jpg"
            alt="image"
          />
        </div>
        <div className="details__main-left">
          <h2 className="details__main-left-title">Title of details</h2>
          <div className="details__main-border"></div>
          <div className="details__main-left-text">
            <div className="details__main-left-right-border"></div>
            <div>
              <h3 className="details__main-left-h3">title</h3>
              <h3 className="details__main-left-h3">title</h3>
              <h3 className="details__main-left-h3">title</h3>
              <h3 className="details__main-left-h3">title</h3>
            </div>
          </div>
          <div className="details__main-border"></div>
          <h3 className="details__main-left-price">Цена : $200.00</h3>
        </div>
      </div>
      <div className="details__desc">
        <div className="details__desc-1">Описание</div>
        <div className="details__desc-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          temporibus, sequi modi, laborum exercitationem totam dicta, aperiam
          amet eveniet eligendi laudantium quod excepturi necessitatibus odit
          cum fuga qui. Officia, eos!*30
        </div>
      </div>
    </div>
  );
};

export default Details;
