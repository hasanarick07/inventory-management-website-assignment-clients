import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import MyBike from "../MyBike/MyBike";

const MyBikes = () => {
  const [user, loading] = useAuthState(auth);
  const [bikes, setBikes] = useState([]);
  const email = user?.email;
  console.log(email);
  const url = `https://agile-bastion-62567.herokuapp.com/myProducts?email=${email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBikes(data);
        console.log(url);
      });
  }, [url]);
  if (loading) {
    <Loading />;
  }
  return (
    <div>
      <h2 className="p-3 inline-block  text-4xl font-semibold	mb-3 text-gray-100">
        My Bikes
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {bikes.map(bike => (
          <MyBike key={bike.id} bike={bike}></MyBike>
        ))}
      </div>
    </div>
  );
};

export default MyBikes;
