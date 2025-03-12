// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.45 5.022c-1.83-.127-3.383.956-4.25.956-.879 0-2.234-.929-3.671-.903A5.505 5.505 0 00.93 7.68c-1.96 3.18-.5 7.892 1.409 10.473.933 1.261 2.047 2.682 3.51 2.63 1.408-.051 1.94-.85 3.643-.85 1.7 0 2.18.85 3.67.825 1.515-.026 2.475-1.287 3.402-2.555 1.073-1.464 1.513-2.881 1.54-2.956-.034-.012-2.955-1.06-2.984-4.205-.026-2.63 2.296-3.895 2.402-3.956-1.319-1.815-3.355-2.015-4.072-2.065zm-1.13-1.704c.778-.878 1.301-2.101 1.157-3.318-1.119.041-2.472.697-3.274 1.575-.72.777-1.35 2.023-1.179 3.214 1.247.09 2.52-.592 3.297-1.47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
