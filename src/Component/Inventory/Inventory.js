import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [bike, setBike] = useState({});
  console.log(bike);
  const url = `https://agile-bastion-62567.herokuapp.com/product/${id}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBike(data));
  }, [url]);

  //   delete quantity

  const deleteQuantity = e => {
    // console.log(bike?.quantity);
    e.preventDefault();
    const previousQuantity = parseFloat(bike?.quantity);
    // console.log(previousQuantity);
    let quantity = previousQuantity - 1;
    const deleteBikeQuantity = { quantity };
    // console.log(deleteBikeQuantity);
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(deleteBikeQuantity),
    })
      .then(res => res.json())
      .then(data => {
        toast.success("User updated successfully, Please reload to see update");
      });
  };

  //   add quantity

  const addQuantity = e => {
    e.preventDefault();
    const previousQuantity = parseFloat(bike?.quantity);
    const getQuantity = parseFloat(e.target.quantity.value);
    // console.log(getQuantity);
    let quantity = previousQuantity + getQuantity;
    const addBikeQuantity = { quantity };

    // console.log(addBikeQuantity);
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addBikeQuantity),
    })
      .then(res => res.json())
      .then(data => {
        console.log("paisi new", data);
        toast.success("User updated successfully");
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="md:flex items-center justify-center w-screen	 md:w-11/12 h-full mx-auto p-7 shadow-inner shadow-gray-900	rounded-2xl text-gray-300 font-medium text-lg bg-gray-600 hover:bg-gray-700">
        <img className="h-60 w-full rounded-xl" src={bike?.picture} alt="" />
        <div className="p-7 text-left	">
          <h2 className="text-2xl my-1 ">ID : {bike?._id}</h2>
          <h2 className="text-2xl my-1  ">{bike?.name}</h2>
          <h4 className="my-1">Price : {bike?.price} TK.</h4>
          {bike?.quantity === 0 ? (
            <h4>Sold Out</h4>
          ) : (
            <h4 className="my-1">Quantity : {bike?.quantity}</h4>
          )}
          <h4 className="my-1">Supplier Name : {bike?.supplier_name} </h4>
          <h4 className="mb-10">{bike?.text}</h4>
          <button
            onClick={deleteQuantity}
            className="p-3 mt-auto rounded-3xl w-3/4 mx-auto bg-indigo-500 text-gray-100 inline-block rounded-br-3xl border-b-4 border-indigo-800 hover:font-bold hover:text-xl hover:bg-indigo-600 hover:shadow-inner	shadow-2xl"
          >
            Delivered
          </button>
          <div className="mt-2">
            <h1 className="text-3xl">Restock The Bikes</h1>
            <form onSubmit={addQuantity}>
              <input
                className="rounded text-gray-900"
                type="number"
                name="quantity"
                id=""
              />
              <input
                className="p-3 mt-auto rounded-xl  ml-3 bg-indigo-500 text-gray-100 inline-block  border-indigo-800 hover:font-bold hover:text-xl hover:bg-indigo-600 hover:shadow-inner shadow-2xl"
                type="submit"
                value="ADD"
              />
            </form>
          </div>
          <Link to="/manageInventories">
            <button className="p-3 mt-7 rounded-3xl  mx-auto bg-indigo-500 text-gray-100 inline-block rounded-br-3xl border-b-4 border-indigo-800 hover:font-bold hover:text-xl hover:bg-indigo-600 hover:shadow-inner	shadow-2xl">
              Manage Inventories
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
