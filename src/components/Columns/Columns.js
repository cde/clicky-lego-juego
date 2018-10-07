import React from "react";
import "./Columns.css";

const Columns = props => (
    <section className="section">

    <div className="container">
        <div className="columns">
            <div className="column is-11 is-12-widescreen">
                <div className="columns is-multiline">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    </section>
);

export default Columns;
