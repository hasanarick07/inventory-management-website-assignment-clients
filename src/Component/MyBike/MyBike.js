import React from "react";
import toast from "react-hot-toast";

const MyBike = props => {
  const { _id, name, price, text, picture, quantity, supplier_name } =
    props.bike;
  const deleteButton = id => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://agile-bastion-62567.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success("User Deleted Successfully");
          }
        });
    }
  };
  return (
    <div >
      <div className="w-3/4 md:w-11/12 h-full mx-auto p-7 shadow-inner shadow-gray-900	rounded-2xl text-gray-300 font-medium text-lg bg-gray-600 hover:bg-gray-700">
        <img className="h-60 w-full rounded-lg" src={picture} alt="" />
        <h2 className="text-2xl my-1 p-3 inline-block ">{name}</h2>
        <h4 className="my-1">Price : {price} TK.</h4>
        <h4 className="my-1">Quantity : {quantity}</h4>
        <h4 className="my-1">Supplier Name : {supplier_name} </h4>
        <h4 className="mb-10">{text.slice(0, 200)}</h4>
        <button
          onClick={() => deleteButton(_id)}
          className="p-3 mt-auto rounded-3xl  mx-auto bg-indigo-500 text-gray-100 inline-block rounded-br-3xl border-b-4 border-indigo-800 hover:font-bold hover:text-xl hover:bg-indigo-600 hover:shadow-inner	shadow-2xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyBike;
