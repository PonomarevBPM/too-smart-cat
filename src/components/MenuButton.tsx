import { createUseStyles } from "react-jss";
import { Theme } from "../styles/theme";
import { ReactNode } from "react";

const useStyles = createUseStyles((theme: Theme) => ({
  blockButton: {
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: theme.colors.button,
    fontFamily: theme.fonts.roboto,
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: theme.fonts.kind.blockButton,
    width: 865,
    maxWidth: 865,
    height: 373,
    maxHeight: 373,
    borderRadius: 50,
    padding: [71, 143, 0, 69],
    backgroundImage: (img: string) => `url(${img})`,
    color: "#ffffff",
    "&:active": {
      filter: "brightness(80%)",
      color: "white",
    },
  },
  arrow: {
    position: "absolute",
    bottom: 35,
    right: 50,
    color: "#ffffff",
  },
  ROZ: {
    position: "absolute",
    top: 70,
    left: 77,
  },
}));

type Props = {
  handleNavClick: () => void;
  text: ReactNode;
  isROZ?: boolean;
  img: string;
};

export const MenuButton = ({ handleNavClick, text, isROZ, img }: Props) => {
  const classes = useStyles(img);

  return (
    <button className={classes.blockButton} onClick={handleNavClick}>
      {!isROZ && text}
      <p className={classes.arrow}>→</p>
      {isROZ && <img className={classes.ROZ} src="../dist/imgs/Znanie.png" />}
    </button>
  );
};
