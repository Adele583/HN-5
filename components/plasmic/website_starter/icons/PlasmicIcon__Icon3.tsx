/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
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
        fill={"currentColor"}
        d={
          "m13.953 1.517-1.692 8.892 6.13.02-8.344 12.054 1.692-9.782-6.13-.021zm.002-1.5q-.062 0-.121.004c-.265.022-.44.11-.649.25a1.5 1.5 0 0 0-.39.38L4.388 11.775a1.49 1.49 0 0 0-.125 1.557c.254.502.77.82 1.334.824l4.33.031-1.362 8.02a1.498 1.498 0 0 0 1.48 1.776c.472 0 .859-.22 1.15-.619L19.61 11.31c.332-.455.38-1.056.126-1.557a1.51 1.51 0 0 0-1.334-.824l-4.33-.007L15.42 1.87A1.502 1.502 0 0 0 14.008.018z"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
