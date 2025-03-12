// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group7Icon(props) {
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
          "M18.326 12c0 .303-.126.589-.349.789l-10.52 9.474a1.06 1.06 0 01-1.503-.08 1.06 1.06 0 01.08-1.503l9.606-8.651c.023-.018.023-.058 0-.075L6.034 3.303a1.07 1.07 0 01-.08-1.503 1.07 1.07 0 011.503-.08l10.52 9.474c.217.217.349.503.349.806z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
