import React from "react";
import "../Cards/cards.style.css";
const Types = ({ data }) => {
  return (
    <>
      {data &&
        data?.types?.map(({ type, slot }) => (
          <div
            key={slot}
            className={` ${type?.name} type-item ${
              data.types.length === 1 && "w-100"
            }`}
          >
            <p className="mb-0 text-uppercase">{type?.name}</p>
          </div>
        ))}
    </>
  );
};

export default Types;
