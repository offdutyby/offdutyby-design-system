const colorPalette = {
  // PRIMARY
  "primary-10": "#FFFACC",
  "primary-20": "#FFF599",
  "primary-30": "#FFF066",
  "primary-40": "#FFEB33",
  "primary-50": "#FFE500",
  "primary-60": "#E2CC06",
  "primary-70": "#998A00",
  "primary-80": "#665C00",
  "primary-90": "#191919",

  // NEUTRAL
  "neutral-0": "#FFFFFF",
  "neutral-10": "#F5F5F5",
  "neutral-20": "#F2F2F2",
  "neutral-30": "#E9E9E9",
  "neutral-40": "#DCDCDC",
  "neutral-50": "#CCCCCC",
  "neutral-60": "#A9A9A9",
  "neutral-70": "#888888",
  "neutral-80": "#777777",
  "neutral-90": "#191919",
  "neutral-100": "#191919",

  // SECONDARY
  "secondary-10": "#CCE8FF",
  "secondary-20": "#99D1FF",
  "secondary-30": "#66BBFF",
  "secondary-40": "#33A4FF",
  "secondary-50": "#008DFF",
  "secondary-60": "#0071CC",
  "secondary-70": "#005599",
  "secondary-80": "#003866",
  "secondary-90": "#001C33",

  // TERTIARY
  "tertiary-10": "#FFE7CC",
  "tertiary-20": "#FFD099",
  "tertiary-30": "#FFB866",
  "tertiary-40": "#FFA133",
  "tertiary-50": "#FF8900",
  "tertiary-60": "#CC6E00",
  "tertiary-70": "#995200",
  "tertiary-80": "#663700",
  "tertiary-90": "#331B00",

  // ERROR
  "error-10": "#FAD3D1",
  "error-20": "#F5A7A3",
  "error-30": "#F07B75",
  "error-40": "#EB4E46",
  "error-50": "#E62319",
  "error-60": "#B81C14",
  "error-70": "#8A150F",
  "error-80": "#5C0E0A",
  "error-90": "#2E0705",

  // TRANSPARENT
  "transparent-10": "#FFFFFF0D",
  "transparent-20": "#0000001A",
  "transparent-30": "#00000042",
  "transparent-40": "#0000005C",
  "transparent-50": "#00000080",
  "transparent-60": "#00000099",
  "transparent-70": "#000000B2",
  "transparent-80": "#000000CC",
  "transparent-90": "#000000E5",

  // SEMANTIC
  // Background
  "background-default": "#FFFFFF",
  "background-alterative": "#F5F5F5",

  // Surface
  "surface-primary": "#FFFFFF",
  "surface-secondary": "#F5F5F5",
  "surface-tertiary": "#E9E9E9",
  "surface-inactive": "#CCCCCC",
  "surface-active": "#191919",

  // Dimmer
  "dimmer-default": "#0000005C",
  "dimmer-strong": "#000000B2",

  // Text
  "text-primary": "#191919",
  "text-secondary": "#777777",
  "text-tertiary": "#CCCCCC",
  "text-absolute_white": "#FFFFFF",
  "text-absolute_black": "#191919",

  // Button
  "button-primary_default": "#FFE500",
  "button-primary_pressed": "#E2CC06",
  "button-primary_disabled": "#FFFACC",
  "button-secondary_default": "#E9E9E9",
  "button-secondary_pressed": "#CCCCCC",
  "button-secondary_disabled": "#F6F6F6",

  // Common
  "common-primary": "#FFE500",
  "common-secondary": "#008DFF",
  "common-tertiary": "#E3F3FF",
  "common-error": "#EB4E46",

  // Stroke
  "stroke-primary": "#191919",
  "stroke-secondary": "#CCCCCCCC",
  "stroke-tertiary": "#E9E9E9",
};

export type ColorType = keyof typeof colorPalette;

export function getColor(color: ColorType | string) {
  return colorPalette[color as ColorType] ? `var(--color-${color})` : color;
}

export default colorPalette;
