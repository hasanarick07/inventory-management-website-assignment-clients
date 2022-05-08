import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("https://agile-bastion-62567.herokuapp.com/products")
      .then(res => res.json())
      .then(data => setBikes(data));
  }, []);
  return (
    <div>
      <Link to="/addNewBikes">
        <button className="p-3 mt-auto rounded-3xl  mx-auto bg-indigo-500 text-gray-100 inline-block rounded-br-3xl border-b-4 border-indigo-800 hover:font-bold hover:text-xl hover:bg-indigo-600 hover:shadow-inner	shadow-2xl">
          Add New Bikes
        </button>
      </Link>
      <br />
      <h2 className="p-3 inline-block  text-4xl font-semibold	mb-3 text-gray-100">
        Manage Bikes Inventories
      </h2>
      <div className="grid md:grid-cols-1 gap-4">
        {bikes.map(bike => (
          <ManageInventory key={bike.id} bike={bike}></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
