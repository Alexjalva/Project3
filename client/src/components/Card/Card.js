import React from "react";
<<<<<<< HEAD
=======

>>>>>>> 2ba74ee9fed85940f33d9523f5781350f1f456d0
export const Card = (props) => (
  <div className="card">
    <div className="card-header bg-info" style={{color: '#fff'}}>
      <h5>{props.title}</h5>
    </div>
    <div className="card-body">
      {props.children}
    </div>
  </div>
);