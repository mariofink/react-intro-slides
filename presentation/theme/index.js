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
      text: {
        marginBottom: "1.5rem",
        textAlign: "left"
      },
      listItem: {
        marginBottom: "1.5rem"
      },
      heading: {
        h1: {
          fontSize: "6rem",
          marginBottom: "2rem"
        },
        h2: {
          fontSize: "3.5rem",
          marginBottom: "2rem"
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
        fontWeight: "normal",
        borderLeft: "0.5rem solid " + colors.tertiary
      },
      link: {
        color: colors.tertiary
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
