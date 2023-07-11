import "./task3.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Task3 = () => {
  let { id } = useParams();
  console.log(id);
  const user = useSelector((state) => state.users.users[id]);
  console.log(user);
  return (
    user && (
      <div className="profileContainer">
        <div className="leftContainer">
          <h1 className="heading">User Profile</h1>
          <img
            className="profile-pic"
            src={user.avatar}
            alt={user.first_name}
          />
        </div>

        <div className="rightContainer">
          <div>
            <h4>Full Name</h4>
            <p>{user.first_name + " " + user.last_name}</p>
          </div>
          <div>
            <h4>User ID</h4>
            <p>{user.id}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user?.email}</p>
          </div>
          <div>
            <h4>User Name</h4>
            <p>{user.username}</p>
          </div>
          <div>
            <h4>Phone Number</h4>
            <p>{user.phone_number}</p>
          </div>
          <div>
            <h4>Date of Dirth</h4>
            <p>{user.date_of_birth}</p>
          </div>
          <div>
            <h4>Title</h4>
            <p>{user.employment.title}</p>
          </div>
          <div>
            <h4>Key Skill</h4>
            <p>{user.employment.key_skill}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Task3;
