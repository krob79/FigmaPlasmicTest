// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LockIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.367 13.542h6.631c.916 0 1.367-.451 1.367-1.45v-5.12c0-.902-.369-1.36-1.135-1.435V3.85C8.23 1.25 6.501 0 4.683 0 2.864 0 1.135 1.251 1.135 3.849v1.709C.424 5.667 0 6.118 0 6.973v5.12c0 .998.451 1.449 1.367 1.449zm1.08-9.816c0-1.593 1.012-2.468 2.236-2.468 1.216 0 2.235.875 2.235 2.468v1.797l-4.47.007V3.726z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockIcon;
/* prettier-ignore-end */
