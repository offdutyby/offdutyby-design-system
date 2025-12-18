/// <reference types="vite/client" />

declare module "*.svg" {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
