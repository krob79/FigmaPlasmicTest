// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group16Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 138 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M132.367 39.984H5.091c-2.8 0-5.091-2.25-5.091-4.998V4.998C0 2.249 2.291 0 5.091 0h127.276c2.8 0 5.091 2.25 5.091 4.998v29.988c0 2.749-2.291 4.998-5.091 4.998z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group16Icon;
/* prettier-ignore-end */
