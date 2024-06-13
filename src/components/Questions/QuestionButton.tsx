import { createUseStyles } from "react-jss";
import { QuestionEntity } from "../../model/filePath";
import { Theme } from "../../styles/theme";
import ReactModal from "react-modal";
import { useContext, useState } from "react";
import { HearContext } from "../../context";

const useStyles = createUseStyles((theme: Theme) => ({
  button: {
    boxSizing: "border-box",
    width: "100%",
    backgroundColor: (isActive: boolean) =>
      isActive ? "#77869826" : theme.colors.button,
    fontFamily: theme.fonts.roboto,
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: theme.fonts.kind.blockButton,
    padding: [61, 66],
    borderRadius: 50,
    border: "3px solid rgba(232, 236, 243, 1)",
    boxShadow: "0px 0px 13px 0px rgba(119, 134, 152, 0.15)",
    "&:active": {
      backgroundColor: theme.colors.buttonActive,
      color: theme.colors.textActive,
    },
  },
  modalWrapper: {
    outline: "none",
    display: "flex",
    paddingTop: 173,
    paddingLeft: 262,
  },
  modal: {
    width: 1396,
    height: 1080 - 195,
    outline: "none",
    borderRadius: 50,
    backgroundColor: "white",
    fontFamily: theme.fonts.roboto,
    fontWeight: 600,
    fontStyle: "normal",
    boxSizing: "border-box",
  },
  scrollBox: {
    width: 1396 + 29,
    height: 1080 - 195,
    overflowY: "auto",
    overflowX: "hidden",
    boxSizing: "border-box",
  },
  content: {
    width: 1396,
    padding: [81, 126],
    boxSizing: "border-box",
  },
  modalHeading: {
    fontSize: theme.fonts.kind.questionButton,
  },
  modalText: {
    fontSize: theme.fonts.kind.questionText,
    fontWeight: 500,
    lineHeight: "54px",
    marginTop: 46,
    whiteSpace: "pre-line",
  },
  closeButton: {
    borderRadius: 50,
    backgroundColor: "white",
    width: 100,
    height: 100,
    marginLeft: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

type Props = {
  question: QuestionEntity;
  index: number;
  isActive: boolean;
  makeActive: React.Dispatch<React.SetStateAction<[boolean, number]>>;
};

const onQuestionClick = (path: string) => {
  exposedApi.sendVideoToSecondScreen(path);
};

const constructPath = (question: QuestionEntity, index: number) => {
  if (question.videoFilePath.subCategory) {
    console.log(
      `..\\dist\\Content\\${question.videoFilePath.category}\\${
        question.videoFilePath.subCategory
      }\\${question.videoFilePath.category}_${
        question.videoFilePath.subCategory
      }_${index + 1}.mp4`,
    );
    return `..\\dist\\Content\\${question.videoFilePath.category}\\${
      question.videoFilePath.subCategory
    }\\${question.videoFilePath.category}_${
      question.videoFilePath.subCategory
    }_${index + 1}.mp4`;
  }
  console.log(
    `..\\dist\\Content\\${question.videoFilePath.category}\\${
      question.videoFilePath.category
    }_${index + 1}.mp4`,
  );
  return `..\\dist\\Content\\${question.videoFilePath.category}\\${
    question.videoFilePath.category
  }_${index + 1}.mp4`;
};
export const QuestionButton = ({
  question,
  index,
  isActive,
  makeActive,
}: Props) => {
  const classes = useStyles(isActive);
  const [isOpen, setIsOpen] = useState(false);
  const [hearState] = useContext(HearContext);

  const handleClick = () => {
    onQuestionClick(constructPath(question, index));
    if (hearState) {
      setIsOpen(hearState);
    } else {
      makeActive([true, index]);
    }
  };

  return (
    <>
      <button className={classes.button} onClick={handleClick}>
        {question.content.label}
      </button>
      <ReactModal
        className={classes.modalWrapper}
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <div className={classes.modal}>
          <div className={classes.scrollBox}>
            <div className={classes.content}>
              <h1 className={classes.modalHeading}>{question.content.label}</h1>
              <p className={classes.modalText}>{question.content.value}</p>
            </div>
          </div>
        </div>
        <button
          className={classes.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <img src="../dist/X.png" />
        </button>
      </ReactModal>
    </>
  );
};
