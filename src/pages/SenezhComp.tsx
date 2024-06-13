import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { createUseStyles } from "react-jss";
import { Theme } from "../styles/theme";
import { MainMenuBack } from "../components/MainMenuRollback";

const useStyles = createUseStyles((theme: Theme) => ({
  buttounsGroup: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoRows: "1fr 1fr",
    ridColumnGap: 63,
    gridRowGap: 61,
    margin: [25, 63, 0, 63],
    overflowY: "auto",
    height: () => window.innerHeight - 215,
  },
  blockButton: {
    display: "flex",
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: theme.colors.button,
    fontFamily: theme.fonts.roboto,
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: theme.fonts.kind.blockButton,
    width: 865,
    maxWidth: 865,
    height: 212,
    maxHeight: 373,
    borderRadius: 50,
    border: "3px solid rgba(232, 236, 243, 1)",
    boxShadow: "0px 0px 13px 0px rgba(119, 134, 152, 0.15)",
    padding: [71, 59, 0, 69],
    "&:active": {
      backgroundColor: theme.colors.buttonActive,
      color: theme.colors.textActive,
    },
  },
  arrow: {
    position: "absolute",
    bottom: 35,
    right: 50,
    color: "rgba(207, 222, 247, 1)",
  },
  bigBunda: {
    height: 312,
  },
}));

export const SenezhComp = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleBackClick = () => navigate("/");

  return (
    <>
      <MainMenuBack />
      <Header
        isControllable
        onBackClick={handleBackClick}
        title="О компетенциях Мастерской управления «Сенеж»"
      />
      \
      <div className={classes.buttounsGroup}>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/mngmnt")}
        >
          Управление<p className={classes.arrow}>→</p>
        </button>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/efficency")}
        >
          Эффективность<p className={classes.arrow}>→</p>
        </button>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/team")}
        >
          Управление командой<p className={classes.arrow}>→</p>
        </button>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/mentor")}
        >
          Наставничество<p className={classes.arrow}>→</p>
        </button>
        <button
          className={`${classes.blockButton} ${classes.bigBunda}`}
          onClick={() => navigate("/human")}
        >
          Человекоцентричность<p className={classes.arrow}>→</p>
        </button>
        <button
          className={`${classes.blockButton} ${classes.bigBunda}`}
          onClick={() => navigate("/goverment")}
        >
          Надпрофессиональные компетенции государственного управления
          <p className={classes.arrow}>→</p>
        </button>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/media")}
        >
          Медиалидерство<p className={classes.arrow}>→</p>
        </button>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/design")}
        >
          Госдизайн<p className={classes.arrow}>→</p>
        </button>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/capital")}
        >
          Человеческий капитал<p className={classes.arrow}>→</p>
        </button>
        <button
          className={classes.blockButton}
          onClick={() => navigate("/communication")}
        >
          Международная коммуникация<p className={classes.arrow}>→</p>
        </button>
      </div>
    </>
  );
};
