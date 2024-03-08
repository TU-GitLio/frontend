export type IconNames = "MoonIcon" | "SunIcon";

export type IconOptions = {
  [K in IconNames]: React.ComponentType;
};
