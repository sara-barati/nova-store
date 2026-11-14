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
    header: string;
    card: string;
    input: string;
    muted: string;
  };
}

export const lightTheme: AppTheme = {
  mode: "light",

  colors: {
    background: "#F6F7FB",
    surface: "#FFFFFF",
    text: "#172B4D",
    secondaryText: "#738096",
    primary: "#F47B35",
    border: "#E7EAF0",
    danger: "#E5484D",
    header: "#10233F",
    card: "#FFFFFF",
    input: "#FFFFFF",
    muted: "#F0F2F6",
  },
};

export const darkTheme: AppTheme = {
  mode: "dark",

  colors: {
    background: "#101827",
    surface: "#192638",
    text: "#F1F5F9",
    secondaryText: "#A7B2C4",
    primary: "#FF914D",
    border: "#344256",
    danger: "#FF686D",
    header: "#0B1422",
    card: "#1B293B",
    input: "#202F43",
    muted: "#26364B",
  },
};
