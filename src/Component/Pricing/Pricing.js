import React, { useEffect, useState } from "react";
import Price from "../Price/Price";

const Pricing = () => {
  const [price, setPrice] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then(res => res.json())
      .then(data => setPrice(data));
  }, []);
  return (
    <div className="">
      <h2 className="p-3 inline-block  text-4xl font-semibold	mb-3 text-gray-100">
        Bikes
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {price.map(price => (
          <Price key={price.id} price={price}></Price>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
