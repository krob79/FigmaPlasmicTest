// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group14Icon(props) {
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
          "M11.568 7.1L6.174 1.706a1.273 1.273 0 10-1.8 1.801L8.865 8l-4.493 4.492a1.273 1.273 0 101.801 1.8L11.568 8.9a1.273 1.273 0 000-1.801z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
