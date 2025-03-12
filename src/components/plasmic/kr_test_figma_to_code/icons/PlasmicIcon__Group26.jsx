// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group26Icon(props) {
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
          "M21.41 18.567l-4.637-4.637a7.887 7.887 0 001.063-4.603c-.292-3.92-3.475-7.064-7.397-7.31-4.773-.298-8.723 3.651-8.422 8.425.247 3.922 3.39 7.103 7.31 7.397a7.897 7.897 0 004.601-1.063l4.637 4.637a2.012 2.012 0 102.846-2.845v-.001zm-11.48-4.73a3.91 3.91 0 01-3.906-3.906A3.91 3.91 0 019.93 6.026a3.91 3.91 0 013.906 3.905 3.91 3.91 0 01-3.906 3.906z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
