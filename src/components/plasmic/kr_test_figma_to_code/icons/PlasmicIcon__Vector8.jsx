// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.474 9.862c-.394 2.485-2.786 4.259-5.954 4.259C2.46 14.12 0 11.416 0 7.119S2.498 0 6.403 0c3.906 0 6.232 2.666 6.232 6.794v.96H2.867v.168c0 2.367 1.446 3.934 3.72 3.934 1.618 0 2.813-.803 3.195-1.994h2.695-.003zM2.877 5.798h6.915c-.065-2.084-1.407-3.546-3.391-3.546S3.023 3.74 2.877 5.798z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
