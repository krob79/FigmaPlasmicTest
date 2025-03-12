// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.373 7.1l5.394-5.394a1.273 1.273 0 111.8 1.801L7.075 8l4.494 4.493a1.273 1.273 0 11-1.801 1.8L4.373 8.9a1.273 1.273 0 010-1.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
