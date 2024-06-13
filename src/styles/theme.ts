export type Theme = {
  colors: {
    backgrond: string;
    button: string;
    buttonActive: string;
    hearButton: string;
    text: string;
    textActive: string;
  };
  fonts: {
    roboto: string;
    kind: {
      blockButton: number;
      questionButton: number;
      questionText: number;
      pageHeader: number;
    };
  };
};

export const theme: Theme = {
  colors: {
    backgrond: "#FFFFFFF",
    button: "#FFFFFF",
    buttonActive: "rgba(232, 236, 243, 0.3)",
    text: "#000000",
    textActive: "#000000",
    hearButton: "#BEC8DC",
  },
  fonts: {
    roboto: "Roboto",
    kind: {
      blockButton: 46,
      questionButton: 42,
      questionText: 34,
      pageHeader: 30,
    },
  },
};
