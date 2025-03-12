// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 7.053C0 2.679 2.617 0 6.56 0c3.94 0 6.558 2.679 6.558 7.053 0 4.373-2.601 7.065-6.559 7.065C2.602 14.118 0 11.44 0 7.053zm10.226 0c0-3.017-1.447-4.75-3.667-4.75-2.22 0-3.669 1.733-3.669 4.75 0 3.016 1.446 4.762 3.67 4.762 2.222 0 3.666-1.733 3.666-4.762z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
