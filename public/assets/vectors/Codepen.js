import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 8.202 7.303 10 10 11.798 12.697 10 10 8.202Zm4.5.596L17.197 7 11 2.869v3.596l3.5 2.333Zm3.5.07L16.303 10 18 11.131V8.868Zm-3.5 2.334L11 13.535v3.596L17.197 13 14.5 11.202ZM9 6.465V2.869L2.803 7 5.5 8.798 9 6.465ZM2.803 13 9 17.131v-3.596l-3.5-2.333L2.803 13Zm.894-3L2 8.869v2.262L3.697 10ZM0 7a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 20 7v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 0 13V7Z"
      fill="#1F2937"
    />
  </svg>
);

export default SvgComponent;
