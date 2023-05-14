import React from "react";

const Props = ({ state }) => {
  const getCount = state.count;
  console.log(getCount);
  return (
    <div>
      <h1>Props is {getCount}</h1>
    </div>
  );
};

export default Props;
