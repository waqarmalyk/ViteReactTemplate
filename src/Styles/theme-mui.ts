import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary?: PaletteColor;
  }

  interface PaletteOptions {
    type: string;
    tertiary?: PaletteColorOptions;
  }

  interface Theme {
    Styles: {
      lightBlack: string;
      darkGreenHover: string;
      darkGreenDesaturated: string;
      lightGray: string;
      darkGreenLightest: string;
      darkGreenLight: string;
      greenLinearGradient: string;
      blueMain: string;
      grayLinearGradient: string;
    };
  }

  interface ThemeOptions {
    Styles: {
      lightBlack: string;
      darkGreenHover: string;
      darkGreenDesaturated: string;
      lightGray: string;
      darkGreenLightest: string;
      darkGreenLight: string;
      greenLinearGradient: string;
      blueMain: string;
      grayLinearGradient: string;
    };
  }

  // interface TypographyVariants {
  //     // body3: React.CSSProperties;
  // }

  // // allow configuration using `createTheme`
  // interface TypographyVariantsOptions {
  //     // body3?: React.CSSProperties;
  // }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h5: false;
    h6: false;
    // body3: true;
  }
}

// A custom theme for this app
const theme = createTheme({
  Styles: {
    lightBlack: "#0000000a",
    darkGreenHover: "#279F66",
    darkGreenDesaturated: "#57B588",
    lightGray: "#F5F8F9",
    darkGreenLightest: "#DFF8EC",
    darkGreenLight: "#B6DFCB",
    greenLinearGradient: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
    blueMain: "#2A4FD1",
    grayLinearGradient: "linear-gradient(to top bottom, #F1F2F1 , #FAFAFA)",
  },

  palette: {
    type: "light",
    primary: {
      main: "#279F66",
    },
    secondary: {
      main: "#324355",
    },
    tertiary: {
      main: "rgb(0,0,0,0.60)",
      contrastText: "#fff",
    },
    background: {
      default: "#E9EAEC",
    },
    text: {
      primary: "rgb(0,0,0,0.87)",
      secondary: "rgb(0,0,0,0.60)",
    },
  },
  typography: {
    fontFamily: [
      "Catamaran",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "1.5rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.15rem",
      fontWeight: 600,
    },
    h5: undefined,
    h6: undefined,
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "palette.text.primary",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "palette.text.primary",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      color: "rgb(0,0,0,0.87)",
    },
  },

  components: {
    // MuiTooltip: {
    //   styleOverrides: {
    //     tooltip: {
    //       backgroundColor: "#ffffff",
    //       color: "black",
    //       fontSize: 14,
    //     },
    //   },
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       textTransform: "none",
    //     },
    //   },
    // },
  },
});

export default theme;
