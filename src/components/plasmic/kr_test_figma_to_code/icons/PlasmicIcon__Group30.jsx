// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group30Icon(props) {
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
          "M8 1.334a6.667 6.667 0 100 13.334A6.667 6.667 0 008 1.334zM7.839 13.38a1.063 1.063 0 110-2.126 1.063 1.063 0 010 2.126zm2.96-7.49c-.082 1.373-.804 2.003-1.33 2.462-.365.319-.545.487-.641.835a1.061 1.061 0 11-2.045-.565c.27-.978.86-1.493 1.291-1.869.409-.357.578-.504.607-.99a.714.714 0 00-.207-.538.969.969 0 00-.693-.298.902.902 0 00-.815.52 1.061 1.061 0 01-1.923-.895 3.031 3.031 0 012.738-1.746c.844 0 1.66.352 2.237.965a2.82 2.82 0 01.78 2.118z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group30Icon;
/* prettier-ignore-end */
