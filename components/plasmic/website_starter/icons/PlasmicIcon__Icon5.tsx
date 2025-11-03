/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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
          "M12 19.9q2.425-.75 4.05-2.962A9.87 9.87 0 0 0 17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12zm0 2a2 2 0 0 1-.625-.1Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25a2.1 2.1 0 0 1 .7-.125q.35 0 .7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8a2 2 0 0 1-.625.1"
        }
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
