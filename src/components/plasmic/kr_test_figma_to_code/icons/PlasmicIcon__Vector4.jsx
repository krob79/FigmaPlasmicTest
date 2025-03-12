// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.112 0c3.682 0 6.245 2.497 6.245 6.135 0 3.637-2.615 6.16-6.336 6.16H2.945v6.38H0V0h7.112zM2.945 9.862h3.378c2.563 0 4.022-1.36 4.022-3.714 0-2.355-1.46-3.702-4.01-3.702h-3.39v7.416z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
