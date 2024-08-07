import React from "react";
import Footer from "./sharedComponents/footer";
import Header from "./sharedComponents/header";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Admin() {
  const [food, setFood] = useState([]);

  let fetchFood = async () => {
    let result = await fetch("http://localhost:4000/api/food/list");
    let data = await result.json();
    setFood(data.data);
  };

  useEffect(() => {
    fetchFood();
  }, []);
  return (
    <div>
      <Header />
      <div className="page-container">
        <Button>New Item</Button>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {food.map(() => (
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
