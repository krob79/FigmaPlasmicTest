// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmallArrowDownIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.205 10.205a.7.7 0 01.99 0L5.7 12.71l2.505-2.505a.7.7 0 01.99.99l-3 3a.7.7 0 01-.99 0l-3-3a.7.7 0 010-.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmallArrowDownIcon;
/* prettier-ignore-end */
