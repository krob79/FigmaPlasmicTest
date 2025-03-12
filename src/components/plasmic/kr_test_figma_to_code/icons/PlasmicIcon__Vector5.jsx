// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.003 0h2.812v7.339h.065c.763-1.593 2.274-2.51 4.378-2.51 3.038 0 4.85 1.994 4.85 5.074v8.775H9.255v-8.23c0-2.007-1.026-3.211-3.023-3.211-2.103 0-3.391 1.424-3.391 3.57v7.869H0V0h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
