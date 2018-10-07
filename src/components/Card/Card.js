import React from "react";
import "./Card.css";

const Card = props => (
    <div className="column is-3">
        <div className="card">
            <div className="card-image" onClick={props.handleOnClick} data-name={props.name}>
                <figure className="image is-4by3">
                        <img src={props.image} alt={props.name} />
                </figure>
            </div>
        </div>
    </div>
);
export default Card;
