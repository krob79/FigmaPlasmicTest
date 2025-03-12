// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group25Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.297 3.5l1.955-1.955a.563.563 0 10-.797-.797L3.5 2.703 1.545.748a.563.563 0 10-.797.797L2.703 3.5.748 5.455a.563.563 0 10.797.797L3.5 4.297 5.455 6.25a.562.562 0 00.797 0 .563.563 0 000-.797L4.297 3.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
