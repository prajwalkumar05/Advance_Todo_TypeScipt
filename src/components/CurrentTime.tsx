import React from "react";

const CurrentTime = () => {
  const date = new Date();
  

  return <div>
    <h2>{date.getHours()} - {date.getMinutes()} </h2>
  </div>;
};

export default CurrentTime;
