// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
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
          "M5.466 8.874l6.743-6.741a1.592 1.592 0 112.25 2.251L8.844 10l5.617 5.616a1.592 1.592 0 11-2.251 2.251l-6.743-6.741a1.591 1.591 0 010-2.252z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
