// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MoreIconIcon(props) {
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
        opacity={".8"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 20a8 8 0 100-16 8 8 0 000 16zm-3.9-6.8a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zm4 0a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zm5.1-1.1a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoreIconIcon;
/* prettier-ignore-end */
