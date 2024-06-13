import { useContext } from "react";
import { HearContext } from "../context";
import { createUseStyles } from "react-jss";
import { Theme } from "../styles/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  hearButton: {
    position: "fixed",
    left: 63,
    top: 54,
    width: 91,
    aspectRatio: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    border: (hearState: boolean) =>
      hearState ? null : "3px solid rgba(232, 236, 243, 1)",
    boxShadow: "0px 0px 13px 0px rgba(119, 134, 152, 0.15)",
    backgroundColor: (hearState: boolean) =>
      hearState ? theme.colors.hearButton : theme.colors.button,
  },
}));

export const HearButton = () => {
  const [hearState, setHearState] = useContext(HearContext);
  const classes = useStyles(hearState);

  return (
    <button
      className={classes.hearButton}
      onClick={() => setHearState(!hearState)}
    >
      {!hearState && <img src="../dist/hearBlack.png" />}
      {hearState && <img src="../dist/hearWhite.png" />}
    </button>
  );
};
