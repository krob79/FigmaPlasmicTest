// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AddTabButtonIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.12 1.05a1.05 1.05 0 10-2.1 0V5.9H1.05a1.05 1.05 0 100 2.1h4.97v4.95a1.05 1.05 0 102.1 0V8h4.83a1.05 1.05 0 100-2.1H8.12V1.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddTabButtonIcon;
/* prettier-ignore-end */
