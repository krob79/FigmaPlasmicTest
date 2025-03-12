// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group32Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.563 7.23l3.37-3.371a.796.796 0 10-1.125-1.126L5 5.542 2.192 2.733A.796.796 0 101.067 3.86l3.37 3.37a.796.796 0 001.126 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group32Icon;
/* prettier-ignore-end */
