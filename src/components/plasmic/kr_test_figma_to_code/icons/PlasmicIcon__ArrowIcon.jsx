// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowIconIcon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.896 5.148a.7.7 0 01-.028.99L9.635 12.03l6.23 5.83a.7.7 0 01-.956 1.021l-6.774-6.337a.7.7 0 01-.003-1.02l6.774-6.405a.7.7 0 01.99.028z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowIconIcon;
/* prettier-ignore-end */
