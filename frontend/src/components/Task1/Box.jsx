import { useState } from "react";
import { addColor } from "../../redux/colorSlice";
import { useDispatch, useSelector } from "react-redux";

const Box = ({ index }) => {
  const dispatch = useDispatch();
  console.log(index);
  const { colors } = useSelector((state) => state.colors);

  const [count, setCount] = useState(0);
  const [color, setColor] = useState(colors[index]);
  const changeColor = () => {
    setColor(`#${Math.random().toString(16).substr(-6)}`);
  };
  return (
    <div className="box">
      <div className="circle" style={{ backgroundColor: color }}>
        <p>{count}</p>
      </div>
      <p>{color}</p>
      <button
        className="btn"
        onClick={() => {
          console.log(colors[index], index);
          setCount(count + 1);
          changeColor();
        }}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(addColor({ index, color }));
        }}
      >
        Replicate
      </button>
    </div>
  );
};

export default Box;
