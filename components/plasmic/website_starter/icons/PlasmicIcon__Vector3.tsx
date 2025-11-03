/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={
          "m3.505 17.358-.21 24.79h6m-8.5-21.5 14.5-19 12 15.71m2.5 3.29-2.5-3.29m0 0v24.79h-6m-12 0h12m-12 0v-17h12v17"
        }
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
