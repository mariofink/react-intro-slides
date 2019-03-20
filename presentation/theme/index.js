import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
};

const theme = createTheme(
  colors,
  {
    primary: "Fira Sans",
    secondary: "Fira Sans",
    tertiary: "Fira Code"
  },
  {
    progress: {
      number: {
        container: {
          color: colors.quartenary
        }
      },
      pacman: {
        pacmanTop: {
          background: colors.quartenary
        },
        pacmanBottom: {
          background: colors.quartenary
        },
        point: {
          borderColor: colors.quartenary
        }
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: "4rem"
        },
        h2: {
          fontSize: "3.5rem"
        },
        h3: {
          fontSize: "3rem"
        },
        h4: {
          fontSize: "2.5rem"
        },
        h5: {
          fontSize: "2rem"
        },
        h6: {
          fontSize: "1.5rem"
        }
      },
      quote: {
        color: colors.secondary,
        fontSize: "2rem",
        lineHeight: "1.5",
        fontWeight: "normal"
      },
      list: {
        listStylePosition: "outside"
      },
      codePane: {
        fontSize: "1.5rem"
      }
    }
  }
);

console.log(theme);

export default theme;
