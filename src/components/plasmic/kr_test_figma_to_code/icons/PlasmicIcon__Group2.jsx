// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.46 8.874L7.718 2.133a1.592 1.592 0 10-2.252 2.251L11.083 10l-5.617 5.615a1.592 1.592 0 102.252 2.251l6.742-6.741a1.591 1.591 0 000-2.252v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
