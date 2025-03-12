// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.436 4.89c-1.693-.123-3.13.93-3.929.93-.8 0-2.067-.904-3.394-.879-1.745.026-3.352 1-4.253 2.539-1.813 3.095-.462 7.684 1.303 10.196.865 1.227 1.893 2.613 3.246 2.562 1.301-.051 1.794-.828 3.368-.828 1.574 0 2.018.828 3.394.805 1.402-.026 2.29-1.253 3.147-2.488.992-1.426 1.4-2.804 1.423-2.878-.031-.013-2.732-1.033-2.758-4.095-.023-2.561 2.125-3.79 2.22-3.852-1.22-1.77-3.102-1.963-3.765-2.012h-.002zM11.39 3.231c.719-.856 1.202-2.047 1.07-3.231-1.034.04-2.286.677-3.029 1.534-.664.756-1.249 1.97-1.09 3.131 1.153.087 2.33-.578 3.048-1.431V3.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
