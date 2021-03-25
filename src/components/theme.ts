

// export const BACKGROUND_COLOR = "#e0e0e0";

export type DefaultThemeProps = {
  BACKGROUND_COLOR:  string,

  NEU_SHADOW_PDARK:  string,
  NEU_SHADOW_PLIGHT: string,
}

export const DefaultThemeLight: DefaultThemeProps = {
  BACKGROUND_COLOR: "#e9edf0",
  // BACKGROUND_COLOR_D: "#e6e9ef",

  NEU_SHADOW_PDARK:  "#d3dbe6",
  NEU_SHADOW_PLIGHT: "#ffffff",
}

export const DefaultThemeDark: DefaultThemeProps = {
  BACKGROUND_COLOR: "#2a2d32",

  NEU_SHADOW_PDARK: "#24262b",
  NEU_SHADOW_PLIGHT: "#30343a",
}

export type ThemeType = "light" | "dark"

export const DefaultTheme = (type: ThemeType): DefaultThemeProps => (
  type === "light" ? {...DefaultThemeLight} : {...DefaultThemeDark}
)