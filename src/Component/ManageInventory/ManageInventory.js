import React from "react";
import toast from "react-hot-toast";

const ManageInventory = props => {
  const { _id, name, picture, quantity } = props.bike;
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
    <div>
      <div
        className="w-full md:w-11/12 h-full mx-auto p-7 shadow-inner shadow-gray-900
      	rounded-2xl text-gray-300 font-medium text-lg bg-gray-600 hover:bg-gray-700
           justify-between flex items-center"
      >
        <img
          className="h-16 w-16 rounded-md inline-block"
          src={picture}
          alt=""
        />
        <span className="text-2xl my-1  inline-block ">{name}</span>
        <span className="my-1"> {quantity} PC</span>

        <button
          onClick={() => deleteButton(_id)}
          className="px-3 py-1 mt-2 rounded-3xl   bg-indigo-500 text-gray-100
         inline-block rounded-br-3xl border-b-4 border-indigo-800 hover:font-bold
          hover:text-xl hover:bg-indigo-600 hover:shadow-inner	shadow-2xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
