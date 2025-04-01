import { forwardRef } from "react";
import clsx from "clsx";
import type { IconName } from "@/types/icon";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
  fill?: string;
  /**
   * @description 스프라이트 파일 경로 (기본값: '/assets/sprite.svg')
   */
  spritePath?: string;
  onClick?: () => void;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      className,
      width = "44px",
      height = "44px",
      style,
      spritePath = "/assets/sprite/sprite.svg",
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        fill={props.fill}
        ref={ref}
        className={clsx(className)}
        width={width}
        height={height}
        color="white"
        style={style}
        onClick={onClick}
        {...props}
      >
        <use href={`${spritePath}#icon-${name}`} />
      </svg>
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
