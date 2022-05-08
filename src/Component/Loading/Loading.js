import React from "react";
import LoadingSpin from "react-loading-spin";

const Loading = () => {
  return (
    <div>
      <button type="button" class="bg-green-900 ..." disabled>
        <LoadingSpin
          duration="2s"
          width="5px"
          size="200px"
          timingFunction="ease-in-out"
        ></LoadingSpin>
      </button>
    </div>
  );
};

export default Loading;
