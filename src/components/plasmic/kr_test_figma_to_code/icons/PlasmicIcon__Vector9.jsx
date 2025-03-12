// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 9.951C0 3.701 2.812 0 7.559 0c3.391 0 6.009 1.953 6.572 4.893h-2.957c-.512-1.555-1.829-2.46-3.641-2.46-3.01 0-4.666 2.718-4.705 7.365h.052c.763-1.695 2.682-3.016 5.258-3.016 3.627 0 6.245 2.615 6.245 6.147 0 3.753-2.919 6.47-6.928 6.47C3.445 19.4 0 16.72 0 9.951zm11.451 3.08c0-2.264-1.67-3.895-3.996-3.895-2.327 0-4.048 1.618-4.048 3.832 0 2.213 1.76 3.985 4.01 3.985 2.248 0 4.034-1.733 4.034-3.921z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
