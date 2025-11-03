/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MdiUserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MdiUserIcon(props: MdiUserIconProps) {
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
        fill={"currentColor"}
        d={
          "M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333m0 6.666c2.947 0 5.333 1.194 5.333 2.667v1.333H2.667V12c0-1.473 2.386-2.667 5.333-2.667"
        }
      ></path>
    </svg>
  );
}

export default MdiUserIcon;
/* prettier-ignore-end */
