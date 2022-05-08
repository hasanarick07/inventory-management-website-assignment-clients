import React, { useEffect, useState } from "react";
import ManageInventory from "../ManageInventory/ManageInventory";

const MyBikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("https://agile-bastion-62567.herokuapp.com/products")
      .then(res => res.json())
      .then(data => setBikes(data));
  }, []);
  return (
    <div>
      <h2 className="p-3 inline-block  text-4xl font-semibold	mb-3 text-gray-100">
        My Bikes
      </h2>
      <div className="grid md:grid-cols-1 gap-4">
        {bikes.map(bike => (
          <ManageInventory key={bike.id} bike={bike}></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default MyBikes;
