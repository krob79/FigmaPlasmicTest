// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VerticalDividerIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".2"}
        stroke={"currentColor"}
        strokeWidth={".5"}
        strokeLinecap={"round"}
        d={"M.25.75h15.5"}
      ></path>
    </svg>
  );
}

export default VerticalDividerIcon;
/* prettier-ignore-end */
