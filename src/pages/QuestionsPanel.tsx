import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { createUseStyles } from "react-jss";
import { Theme } from "../styles/theme";
import { QuestionEntity } from "../model/filePath";
import { Questions } from "../components/Questions/Questions";
import { MainMenuBack } from "../components/MainMenuRollback";

const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.colors.backgrond,
    height: "100vh",
  },
}));

type Props = {
  questions: QuestionEntity[];
  title: string;
  backToSubCategory?: boolean;
};

export const QuestionsPanel = ({
  questions,
  title,
  backToSubCategory,
}: Props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleBackClick = (backToSubCategory: boolean | undefined) =>
    backToSubCategory ? navigate("/snezh-comp") : navigate("/");

  return (
    <div className={classes.container}>
      <MainMenuBack />
      <Header
        isControllable={true}
        onBackClick={() => handleBackClick(backToSubCategory)}
        title={title}
        isBackable={true}
      />
      <Questions questions={questions} />
    </div>
  );
};
