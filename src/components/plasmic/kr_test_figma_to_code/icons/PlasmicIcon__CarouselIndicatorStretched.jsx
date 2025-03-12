// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CarouselIndicatorStretchedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"48"}
        cy={"4"}
        r={"4"}
        fill={"currentColor"}
        fillOpacity={".3"}
      ></circle>

      <circle
        cx={"32"}
        cy={"4"}
        r={"4"}
        fill={"currentColor"}
        fillOpacity={".3"}
      ></circle>

      <circle
        cx={"4"}
        cy={"4"}
        r={"4"}
        fill={"currentColor"}
        fillOpacity={".3"}
      ></circle>

      <path
        d={"M0 4a4 4 0 014-4h12a4 4 0 010 8H4a4 4 0 01-4-4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CarouselIndicatorStretchedIcon;
/* prettier-ignore-end */
