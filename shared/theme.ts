export interface AppTheme {
  mode: "light" | "dark";
  colors: {
    background: string;
    surface: string;
    text: string;
    secondaryText: string;
    primary: string;
    border: string;
    danger: string;
  };
}

export const lightTheme: AppTheme = {
  mode: "light",
  colors: {
    background: "#FFFFFF",
    surface: "#F5F6F8",
    text: "#20232A",
    secondaryText: "#6B7280",
    primary: "#6C63FF",
    border: "#E5E7EB",
    danger: "#E5484D",
  },
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    background: "#171923",
    surface: "#242735",
    text: "#F5F5F7",
    secondaryText: "#A5A9B8",
    primary: "#958EFF",
    border: "#393D4D",
    danger: "#FF686D",
  },
};
