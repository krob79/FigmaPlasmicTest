// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group8Icon(props) {
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
          "M14.667 8c0-.399-.184-.754-.47-.988L8.89 1.706a1.273 1.273 0 10-1.8 1.801l3.22 3.22H2.606a1.273 1.273 0 100 2.546h7.722l-3.22 3.22a1.273 1.273 0 101.801 1.8l5.384-5.383c.239-.239.373-.562.373-.9V8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
