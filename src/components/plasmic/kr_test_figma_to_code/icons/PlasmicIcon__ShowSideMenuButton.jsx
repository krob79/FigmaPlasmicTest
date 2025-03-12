// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ShowSideMenuButtonIcon(props) {
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
          "M5.432 7.8a.6.6 0 000 1.2h1.155a.6.6 0 000-1.2H5.433zm-.6 2.6a.6.6 0 01.6-.6h1.155a.6.6 0 110 1.2H5.433a.6.6 0 01-.6-.6zm.6 1.4a.6.6 0 100 1.2h1.155a.6.6 0 100-1.2H5.433z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.218 6.092C3 6.52 3 7.08 3 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 19 5.08 19 6.2 19h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 17.48 21 16.92 21 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874zM17.8 6.2H9.2v11.6h8.6c.58 0 .943 0 1.216-.023.26-.021.33-.056.347-.064a.8.8 0 00.35-.35c.008-.016.043-.088.064-.347.022-.273.023-.636.023-1.216V8.2c0-.58 0-.943-.023-1.216-.021-.26-.056-.33-.064-.347a.8.8 0 00-.35-.35c-.016-.008-.088-.043-.347-.064-.273-.022-.636-.023-1.216-.023zm-11.6 0H8v11.6H6.2c-.58 0-.943 0-1.216-.023-.26-.021-.33-.056-.347-.064a.8.8 0 01-.35-.35c-.008-.016-.043-.088-.064-.347-.022-.273-.023-.636-.023-1.216V8.2c0-.58 0-.943.023-1.216.021-.26.056-.33.064-.347a.8.8 0 01.35-.35c.016-.008.088-.043.347-.064.273-.022.636-.023 1.216-.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShowSideMenuButtonIcon;
/* prettier-ignore-end */
