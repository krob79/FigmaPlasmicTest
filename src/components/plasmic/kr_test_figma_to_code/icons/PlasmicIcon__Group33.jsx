// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group33Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.92 7.987l6.068-6.067a1.432 1.432 0 112.026 2.026L7.959 9l5.055 5.054a1.432 1.432 0 11-2.026 2.026L4.92 10.013a1.432 1.432 0 010-2.026z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group33Icon;
/* prettier-ignore-end */
