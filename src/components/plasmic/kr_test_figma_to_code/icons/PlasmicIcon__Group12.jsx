// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.56 10.65l8.09-8.09a1.91 1.91 0 112.702 2.701L10.612 12l6.74 6.739a1.91 1.91 0 11-2.702 2.701l-8.09-8.09a1.91 1.91 0 010-2.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
