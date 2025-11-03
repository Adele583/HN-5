/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 58"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"2.667"}
        d={
          "m4.673 23.143-.28 33.054h8M1.06 27.53 20.393 2.198l16 20.946m3.334 4.387-3.334-4.387m0 0v33.054h-8m-16 0h16m-16 0V33.531h16v22.666"
        }
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
