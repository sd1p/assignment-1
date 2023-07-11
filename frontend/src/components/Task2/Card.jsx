import React from "react";
import { useNavigate } from "react-router-dom";
// ID, Full Name, Avatar and title
const Card = ({ user, index }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/task3/${index}`)}>
      <img src={`${user.avatar}`} alt="" />
      <div className="details">
        <p className="id">
          <span>ID: </span>
          {user.id}
        </p>
        <p className="name">
          <span></span>
          {`${user.first_name} ${user.last_name} `}
        </p>
        <p className="title">
          <span></span>
          {user.employment.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
