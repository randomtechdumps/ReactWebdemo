import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ title, imageUrl, body }) {
  /*let navigate = useNavigate();
  const routeChange = () => {
    let path = `users`;
    navigate(path);
  };
  */
  const navigate = useNavigate();

  let navigateurl = "/" + title.toString().toLowerCase();
  console.log(navigateurl);

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-body">
        <p className="card-text">{body}</p>
        <button onClick={() => navigate(navigateurl)}>{title}</button>
      </div>
    </div>
  );
}
