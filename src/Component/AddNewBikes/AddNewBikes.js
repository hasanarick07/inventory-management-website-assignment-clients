import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const AddNewBikes = () => {
  const [user] = useAuthState(auth);
  const userEmail = user?.email;
  const [emails, setEmails] = useState("");
  useEffect(() => {
    setEmails(userEmail);
  }, [userEmail]);
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const text = e.target.text.value;
    const picture = e.target.picture.value;
    const quantity = e.target.quantity.value;
    const supplier_name = e.target.supplier_name.value;
    const bike = { name, email, price, text, picture, quantity, supplier_name };
    console.log(bike);
    fetch("https://agile-bastion-62567.herokuapp.com/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bike),
    })
      .then(res => res.json())
      .then(data => {
        toast.success("User added successfully");
        e.target.reset();
      });
  };
  return (
    <div>
      <div className="text-slate-100">
        <h1>Add New Bike</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="text-gray-900 mt-3 rounded w-72 h-10"
            type="text"
            name="name"
            placeholder="Bike Name"
            required
          />
          <br />
          <input
            className="text-gray-900 mt-3 rounded w-72 h-10"
            type="email"
            name="email"
            value={emails}
            required
          />
          <br />
          <input
            className="text-gray-900 mt-3 rounded w-72 h-10"
            type="number"
            name="price"
            placeholder="Price"
            required
          />
          <br />
          <input
            className="text-gray-900 mt-3 rounded w-72 h-10"
            type="text"
            name="text"
            placeholder="Description"
            required
          />
          <br />
          <input
            className="text-gray-900 mt-3 rounded w-72 h-10"
            type="text"
            name="picture"
            placeholder="Picture URL"
            required
          />
          <br />
          <input
            className="text-gray-900 mt-3 rounded w-72 h-10"
            type="number"
            name="quantity"
            placeholder="Quantity"
            required
          />
          <br />
          <input
            className="text-gray-900 mt-3 rounded w-72 h-10"
            type="text"
            name="supplier_name"
            placeholder="Supplier Name"
            required
          />
          <br />

          <input
            className="p-3 mt-5 rounded-3xl  mx-auto bg-indigo-500 text-gray-100 inline-block rounded-br-3xl border-b-4 border-indigo-800 hover:font-bold hover:text-xl hover:bg-indigo-600 hover:shadow-inner	shadow-2xl"
            type="submit"
            value="Add New Bikes"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewBikes;
