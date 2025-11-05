/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"4"}
        d={
          "M40 20c0 9.986-11.078 20.386-14.798 23.598a2 2 0 0 1-2.404 0C19.078 40.386 8 29.986 8 20a16 16 0 1 1 32 0"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"4"}
        d={"M24 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
