// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group22Icon(props) {
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
          "M12.044 22.007a1.089 1.089 0 01-1.087-1.069v-.43l-.4-.081c-1.947-.39-3.44-1.476-3.8-2.765a1.091 1.091 0 011.046-1.383c.476 0 .906.32 1.04.778l.017.053.029.052c.232.4 1.301 1.237 3.149 1.237 1.737 0 3.149-1.173 3.149-2.614 0-1.226-1.168-2.138-3.376-2.643l-.029-.006h-.006c-1.9-.448-5.054-1.656-5.054-4.758 0-2.133 1.592-4.032 3.875-4.613l.424-.11-.052-.436c-.006-.053-.012-.1-.012-.134 0-.598.488-1.086 1.087-1.086.598 0 1.086.488 1.086 1.086 0 .035 0 .064-.006.099l-.04.453.441.087c2.33.447 3.37 1.929 3.707 2.545a1.088 1.088 0 11-1.906 1.051c-.32-.58-1.168-1.551-3.282-1.551-1.738 0-3.15 1.174-3.15 2.614 0 1.61 2.115 2.348 3.382 2.644l.018.006c1.893.43 5.071 1.626 5.071 4.764 0 2.126-1.591 4.026-3.863 4.607l-.39.099.018.4v.035-.006c0 .587-.488 1.075-1.086 1.075z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
