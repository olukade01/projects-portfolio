import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM7.334.667h1.333v2H7.334v-2Zm0 12.666h1.333v2H7.334v-2ZM2.344 3.286l.942-.943L4.7 3.757l-.942.943-1.414-1.413v-.001Zm8.956 8.957.943-.943 1.414 1.414-.943.943-1.414-1.414Zm1.414-9.9.943.943L12.243 4.7l-.943-.943 1.414-1.414ZM3.758 11.3l.942.943-1.414 1.414-.942-.943L3.758 11.3Zm11.576-3.967v1.334h-2V7.333h2Zm-12.667 0v1.334h-2V7.333h2Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
