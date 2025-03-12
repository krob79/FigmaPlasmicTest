// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group13Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.66.667H4.138a.674.674 0 00-.476.197L.864 3.663a.673.673 0 000 .951l2.52 2.52a.673.673 0 00.951 0L7.13 4.339a.672.672 0 00.197-.474l.006-2.523A.672.672 0 006.66.667zm-.984 2.251a.671.671 0 110-1.342.671.671 0 010 1.342z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
