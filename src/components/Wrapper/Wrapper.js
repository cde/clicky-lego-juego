import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="main-app">
        {props.children}
    </div>
);

export default Wrapper;
