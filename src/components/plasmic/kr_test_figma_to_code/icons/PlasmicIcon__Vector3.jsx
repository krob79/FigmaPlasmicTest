// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 1.605C0 .713.735 0 1.644 0c.909 0 1.643.713 1.643 1.605s-.734 1.606-1.643 1.606C.734 3.21 0 2.487 0 1.605zm.223 3.597h2.841v13.614H.224V5.203z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
