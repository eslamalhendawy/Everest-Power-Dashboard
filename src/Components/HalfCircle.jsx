import React, { useEffect, useLayoutEffect } from "react";
import "../App.css";

function HalfCircle(props) {
  const { name, precent } = props.values;
  const [percentage, setPercentage] = React.useState(-90);
  useLayoutEffect(() => {
    setPercentage(-90 + (180 / 100) * precent);
  }, [precent]);

  return (
    <div className=" flex flex-col items-center justify-end half-circle relative">
      <p
        className="
            font-bold
            text-25
            h-[128px]
            text-gray-500
            opacity-20
            absolute
            rotate-90
            origin-bottom
            mb-0
            mt-0
        "
      >
        |
      </p>
      <p
        className="
            font-bold
            text-25
            h-[128px]
            text-gray-500
            opacity-20
            absolute
            rotate-45
            origin-bottom
            mb-0
            mt-0
        "
      >
        |
      </p>
      <p
        className="
            font-bold
            text-25
            h-[128px]
            text-gray-500
            opacity-20
            absolute
            rotate-0
            origin-bottom
            mb-0
            mt-0
        "
      >
        |
      </p>
      <p
        className="
            font-bold
            text-25
            h-[128px]
            text-gray-500
            opacity-20
            absolute
            rotate-[-45deg]
            origin-bottom
            mb-0
            mt-0
        "
      >
        |
      </p>
      <p
        className="
            font-bold
            text-25
            h-[128px]
            text-gray-500
            opacity-20
            absolute
            rotate-[-89deg]
            origin-bottom
            mb-0
            mt-0
        "
      >
        |
      </p>
      <i
        className={`
            fa-solid fa-up-long
            text-25
            h-[122px]
            absolute
        arrow
            origin-bottom
        `}
        style={{
          transform: `rotate(${percentage}deg)`,
        }}
      ></i>
      <div className="text-[35px] font-bold">{precent}</div>
      <div>{name}</div>
    </div>
  );
}

export default HalfCircle;
