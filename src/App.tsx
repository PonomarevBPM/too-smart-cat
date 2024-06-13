import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { Theme } from "./styles/theme";
import { Header } from "./components/Header";
import { MenuButton } from "./components/MenuButton";
import { HearButton } from "./components/HearButton";

const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.colors.backgrond,
  },

  bloackButtonsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoRows: "1fr 1fr",
    margin: [25, 63, 76, 63],
    gridColumnGap: 63,
    gridRowGap: 61,
  },
  arrow: {
    position: "absolute",
    bottom: 35,
    right: 50,
    color: "rgba(207, 222, 247, 1)",
  },
  ROZ: {
    position: "absolute",
    bottom: 48,
    left: 66,
  },
}));

function App() {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleNavClick = (route: string) => navigate(route);

  return (
    <div className={classes.container}>
      <Header isControllable={false} />
      <div className={classes.bloackButtonsContainer}>
        {/* <MenuButton img='../dist/imgs/Rectangle_1.png' handleNavClick={() => handleNavClick('/snezh-mngmnt')} text={'О Мастерской управления «Сенеж»'}/>
        <MenuButton img='../dist/imgs/Rectangle_11.png' handleNavClick={() => handleNavClick('/youth')} text='О возможностях для молодежи в России'/>
        <MenuButton img='../dist/imgs/Rectangle_10.png' handleNavClick={() => handleNavClick('/snezh-comp')} text='О компетенция Мастерской управления «Сенеж»'/>
        <MenuButton img='../dist/imgs/RozBg.png' handleNavClick={() => handleNavClick('/knowledge')} text='Знание.Государство ' isROZ/>  */}
        <MenuButton
          img="../dist/imgs/Rectangle_1.png"
          handleNavClick={() => handleNavClick("/snezh-mngmnt")}
          text={
            <>
              О Мастерской
              <br />
              управления
              <br />
              «Сенеж»
            </>
          }
        />
        <MenuButton
          img="../dist/imgs/Rectangle_11.png"
          handleNavClick={() => handleNavClick("/youth")}
          text={
            <>
              О возможностях
              <br />
              для молодежи
              <br />в России
            </>
          }
        />
        <MenuButton
          img="../dist/imgs/Rectangle_10.png"
          handleNavClick={() => handleNavClick("/snezh-comp")}
          text={
            <>
              О компетенциях
              <br />
              Мастерской
              <br />
              управления
              <br />
              «Сенеж»{" "}
            </>
          }
        />
        <MenuButton
          img="../dist/imgs/RozBg.png"
          handleNavClick={() => handleNavClick("/knowledge")}
          text="Знание.Государство"
          isROZ
        />
      </div>
      <HearButton />
    </div>
  );
}

export default App;
