// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 138 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M132.367.8c2.362 0 4.277 1.879 4.277 4.198v29.988c0 2.319-1.915 4.198-4.277 4.198H5.091c-2.362 0-4.276-1.88-4.276-4.198V4.998C.815 2.678 2.729.8 5.09.8h127.276zm0-.8H5.091C2.291 0 0 2.25 0 4.998v29.988c0 2.749 2.291 4.998 5.091 4.998h127.276c2.8 0 5.091-2.25 5.091-4.998V4.998c0-2.749-2.291-4.998-5.091-4.998z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
