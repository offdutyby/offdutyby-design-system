import { forwardRef } from "react";
import clsx from "clsx";
import type { IconName } from "@/types/icon";
import sprite from "@/assets/sprite/sprite.svg"; // sprite 파일 import

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
  fill?: string;
  /**
   * @description sprite 파일 경로를 직접 지정할 경우 사용
   */
  url?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    { name, className, width = "44px", height = "44px", style, url, ...props },
    ref
  ) => {
    return (
      <svg
        fill={props.fill}
        stroke="white"
        ref={ref}
        className={clsx(className)}
        width={width}
        height={height}
        color="white"
        style={style}
        {...props}
      >
        <use href={url ? url : `${sprite}#icon-${name}`} />
      </svg>
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
