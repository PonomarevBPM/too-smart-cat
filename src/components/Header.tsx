import { createUseStyles } from "react-jss";
import { Theme } from "../styles/theme";
import { DEFAULT_VIDEO } from "../Screen";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles((theme: Theme) => ({
  img: {
    height: 100,
    width: "auto",
  },
  logosContainer: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row-reverse",
    padding: [68, 53, 0, 53],
    height: 170,
    maxHeight: 170,
  },

  headerContainer: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    justifyContent: "space-between",
    padding: [68, 53, 0, 63],
    height: 170,
    maxHeight: 170,
  },
  controlContainer: {
    display: "flex",
    gap: 30,
    fontFamily: theme.fonts.roboto,
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: theme.fonts.kind.pageHeader,
    width: "75%",
  },
  title: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "pre-line",
    marginLeft: 30,
  },
  backbutton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 285,
    height: 87,
    backgroundColor: theme.colors.button,
    borderRadius: 50,
    border: "3px solid rgba(232, 236, 243, 1)",
    boxShadow: "0px 0px 13px 0px rgba(119, 134, 152, 0.15)",
    "&:active": {
      backgroundColor: theme.colors.buttonActive,
      color: theme.colors.textActive,
    },
  },
}));

type Props = {
  title?: string;
  isControllable: boolean;
  isBackable?: boolean;
  onBackClick?: () => void;
};

export const Header = ({
  isControllable,
  title,
  onBackClick,
  isBackable,
}: Props) => {
  const classes = useStyles();
  const naviagte = useNavigate();

  const onHomeClick = () => {
    if (onBackClick) {
      exposedApi.sendVideoToSecondScreen(DEFAULT_VIDEO);
      naviagte("/");
    }
  };

  if (!isControllable) {
    return (
      <div className={classes.logosContainer}>
        <img className={classes.img} src="..\dist\Сенеж пнг.png" />
        <img className={classes.img} src="..\dist\RSV_transparent_bg.png" />
      </div>
    );
  } else {
    return (
      <div className={classes.headerContainer}>
        <div className={classes.controlContainer}>
          {isBackable && (
            <button
              className={classes.backbutton}
              onClick={onHomeClick}
              style={{ width: 175 }}
            >
              Стоп
            </button>
          )}
          <button className={classes.backbutton} onClick={onBackClick}>
            {" "}
            ← Назад
          </button>
          <div className={classes.title}>{title}</div>
        </div>
        <div>
          <img className={classes.img} src="..\dist\RSV_transparent_bg.png" />
          <img className={classes.img} src="..\dist\Сенеж пнг.png" />
        </div>
      </div>
    );
  }
};
