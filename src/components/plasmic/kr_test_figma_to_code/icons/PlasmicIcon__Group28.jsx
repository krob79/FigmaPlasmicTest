// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group28Icon(props) {
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
          "M16.484 6.617a4.615 4.615 0 11-9.23 0 4.615 4.615 0 019.23 0zm-4.672 6.553c3.913 0 7.171 2.861 7.793 6.601.194 1.172-.733 2.23-1.92 2.23H5.94a1.946 1.946 0 01-1.911-2.29 7.896 7.896 0 017.782-6.542z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
