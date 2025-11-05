/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VideoIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VideoIconIcon(props: VideoIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M91.667 8.333H8.333v83.334h83.334zM69.792 50 36.458 68.75v-37.5z"}
      ></path>
    </svg>
  );
}

export default VideoIconIcon;
/* prettier-ignore-end */
