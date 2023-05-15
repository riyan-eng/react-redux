import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Form from "./Form";

const Home = () => {
  var fruits = useSelector((state) => state.fruits);
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </div>
      <div>
        <Form />
      </div>
      <table>
        <tbody>
          {fruits.length < 1
            ? "Tidak ada data"
            : fruits.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
