import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./task2.css";
import Card from "./Card";
import { fetchUsers } from "../../redux/usersSlice";
const Task2 = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector((state) => state.colors);
  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers(colors.length));
  }, []);

  return (
    users.length > 0 &&
    !loading && (
      <div className="cont">
        <div className="grid-box">
          {users.map((user, index) => (
            <Card key={user.id} user={user} index={index} />
          ))}
        </div>
      </div>
    )
  );
};

export default Task2;
