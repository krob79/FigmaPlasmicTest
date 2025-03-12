// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.78 14.796c-.262 0-.53-.099-.732-.296L.329 9.043a1.058 1.058 0 01-.035-1.5 1.058 1.058 0 011.5-.034l4.8 4.585c.099.093.25.093.348 0L19.012.303a1.058 1.058 0 011.5.017 1.06 1.06 0 01-.018 1.5L7.518 14.494a1.05 1.05 0 01-.744.302h.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
