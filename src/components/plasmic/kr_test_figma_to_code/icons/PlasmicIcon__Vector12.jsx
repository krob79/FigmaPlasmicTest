// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector12Icon(props) {
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
          "M5.98 14.71c.184 1.06 1.07 1.83 2.103 1.83l-.001-.002h.002l10.68-.012c.941 0 1.772-.644 2.043-1.582L23.07 7.13c.34-1.176-.299-2.418-1.429-2.773-1.128-.354-2.32.312-2.66 1.489l-1.805 6.231-7.31.008-1.613-9.297C8.07 1.729 7.183.959 6.15.959H2.975C1.795.96.84 1.957.84 3.186c0 1.23.956 2.226 2.136 2.226h1.391l1.615 9.3zM9.59 24c1.388 0 2.514-1.172 2.514-2.618s-1.126-2.619-2.513-2.619c-1.388 0-2.513 1.173-2.513 2.619C7.078 22.828 8.203 24 9.59 24zm7.916 0c1.388 0 2.514-1.172 2.514-2.618s-1.126-2.619-2.514-2.619c-1.387 0-2.512 1.173-2.512 2.619 0 1.446 1.125 2.618 2.512 2.618z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
