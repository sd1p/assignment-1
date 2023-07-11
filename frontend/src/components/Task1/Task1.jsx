import Box from "./Box";
import "./task1.css";
import { useSelector } from "react-redux";
const Task1 = () => {
  const { colors } = useSelector((state) => state.colors);
  console.log(colors);
  return (
    <div className="container">
      <div className="sub-container">
        {colors.map((color, index) => (
          <Box key={index + color} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Task1;
