/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 66"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"3.047"}
        d={
          "M5.34 26.444 5.02 64.21h9.14M1.211 31.456 23.301 2.51l18.282 23.934m3.809 5.012-3.81-5.012m0 0V64.21h-9.14m-18.282 0h18.282m-18.282 0v-25.9h18.282v25.9"
        }
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
