import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createFruit } from "../reducers/fruitReducer";

const Form = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    // push api 200
    dispatch(
      createFruit({
        id: Math.floor(Math.random() * 100),
        name: name,
        color: color,
        price: price,
      })
    );
    nav("/");
  };
  return (
    <>
      <div>Form</div>
      <form>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          required
        />
        <input
          onChange={(event) => setColor(event.target.value)}
          type="text"
          required
        />
        <input
          onChange={(event) => setPrice(event.target.value)}
          type="number"
        />
        <button onClick={onSubmit} type="submit">
          Simpan
        </button>
      </form>
    </>
  );
};

export default Form;
