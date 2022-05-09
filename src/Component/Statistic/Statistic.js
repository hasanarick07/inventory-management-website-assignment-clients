import React, { useEffect, useState } from "react";

const Statistic = () => {
  const [bikes, setBikes] = useState([]);
  // console.log(bikes[0]);
  useEffect(() => {
    fetch("https://agile-bastion-62567.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        setBikes(data);
      });
  }, []);
  return (
    <div>
      <div className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-100">
                You can’t be sad while riding a bike
              </h1>
              <div className="leading-relaxed">
                Bike to work, bike to play, bike tomorrow, bike today!
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                2.7K
              </h2>
              <p className="leading-relaxed">Total Sold</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                2.5K
              </h2>
              <p className="leading-relaxed">Happy Customer</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                35
              </h2>
              <p className="leading-relaxed">Stock</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-100">
                {bikes.length}
              </h2>
              <p className="leading-relaxed">variety of Bike</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-374971,resizemode-1,msid-68423006/magazines/panache/yamaha-motor-unveils-155-cc-bike-mt-15-at-rs-1-36-lakh.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
