// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.003.233H2.71V2.51h.065C3.526.956 4.999 0 7.128 0c3.05 0 4.799 1.915 4.799 5.033v8.814H9.073v-8.27c0-2.044-.974-3.169-2.945-3.169-1.97 0-3.287 1.398-3.287 3.507v7.935H0V.233h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
