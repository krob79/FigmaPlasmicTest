// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.32 1.334H8.277a1.35 1.35 0 00-.952.394L1.728 7.325a1.347 1.347 0 000 1.904l5.039 5.039a1.347 1.347 0 001.903 0l5.59-5.59c.252-.252.393-.592.394-.948l.013-5.046a1.346 1.346 0 00-1.346-1.35zm-1.968 4.503a1.343 1.343 0 110-2.686 1.343 1.343 0 010 2.686z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
