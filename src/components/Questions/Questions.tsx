import { ReactNode, useState } from "react";
import { QuestionEntity } from "../../model/filePath";
import { QuestionButton } from "./QuestionButton";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  buttounsGroup: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 50,
    height: () => window.innerHeight - 195,
  },
  scrollbox: {
    margin: [25, 262, 36],
    paddingRight: 30,
    overflowY: "auto",
  },
}));

type Props = {
  questions: QuestionEntity[];
};

export const Questions = ({ questions }: Props) => {
  const [active, setActive] = useState<[boolean, number]>([false, -1]);

  const classes = useStyles();

  const buttons: ReactNode[] = questions.map((question, index) => {
    return (
      <QuestionButton
        question={question}
        index={index}
        key={index}
        isActive={index === active[1]}
        makeActive={setActive}
      />
    );
  });

  return (
    <div className={classes.scrollbox}>
      <div className={classes.buttounsGroup}>{buttons}</div>
    </div>
  );
};
