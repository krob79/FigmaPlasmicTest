// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group24Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.675 8.676L10.72 4.63a.955.955 0 10-1.35-1.35L6 6.65 2.63 3.28a.955.955 0 10-1.35 1.35l4.045 4.046a.955.955 0 001.35 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
