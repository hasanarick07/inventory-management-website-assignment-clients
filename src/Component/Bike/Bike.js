import React from "react";
import { useNavigate } from "react-router-dom";

const Bike = props => {
  const { _id, name, price, text, picture, quantity, supplier_name } = props.bike;
  const navigate = useNavigate();
  const stockUpdateButton = (id) => {
    navigate(`/bikes/${id}`);
  };
  return (
    <div className="w-3/4 md:w-11/12 h-full mx-auto p-7 shadow-inner shadow-gray-900	rounded-2xl text-gray-300 font-medium text-lg bg-gray-600 hover:bg-gray-700">
      <img className="h-60 w-full rounded-lg" src={picture} alt="" />
      <h2 className="text-2xl my-1 p-3 inline-block ">{name}</h2>
      <h4 className="my-1">Price : {price} TK.</h4>
      <h4 className="my-1">Quantity : {quantity}</h4>
      <h4 className="my-1">Supplier Name : {supplier_name} </h4>
      <h4 className="mb-10">{text.slice(0, 200)}</h4>
      <button
        onClick={()=>stockUpdateButton(_id)}
        className="p-3 mt-auto rounded-3xl w-3/4 mx-auto bg-indigo-500 text-gray-100 inline-block rounded-br-3xl border-b-4 border-indigo-800 hover:font-bold hover:text-xl hover:bg-indigo-600 hover:shadow-inner	shadow-2xl"
      >
        Stock Update
      </button>
    </div>
  );
};

export default Bike;
