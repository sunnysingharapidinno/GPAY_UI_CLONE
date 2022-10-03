type AppColorsType = {
  white: string;
  black: string;
};

export const appColors: AppColorsType = {
  white: `#fff`,
  black: `#000`,
};

type ThemeType = {
  dark: string;
  light: string;
};

export const defaultTheme: ThemeType = {
  dark: appColors.black,
  light: appColors.white,
};

export const darkTheme: ThemeType = {
  dark: appColors.white,
  light: appColors.black,
};
