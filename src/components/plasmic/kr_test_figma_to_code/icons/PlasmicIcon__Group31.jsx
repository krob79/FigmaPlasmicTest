// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group31Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.99 4.411a3.077 3.077 0 11-6.154 0 3.077 3.077 0 016.153 0zM7.875 8.78a5.275 5.275 0 015.195 4.4c.13.782-.489 1.488-1.28 1.488H3.96c-.807 0-1.412-.73-1.274-1.527A5.264 5.264 0 017.875 8.78z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group31Icon;
/* prettier-ignore-end */
