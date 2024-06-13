import { useCallback, useEffect } from "react";
import { Router, Route } from "electron-router-dom";
import App from "./App";
import { Screen } from "./Screen";
import { QuestionsPanel, SenezhComp } from "./pages";
import {
  knowledgeQuestions,
  senezhQuestions,
  youthQuestions,
} from "./model/filePath";
import { HearContext } from "./context";
import { useState } from "react";
import {
  capitalQuestions,
  communicationQuestions,
  designQuestions,
  efficencyQuestions,
  govermentQuestions,
  humanQuestions,
  mediaQuestions,
  mentorQuestions,
  mngmntQuestions,
  teamQuestions,
} from "./model/compSenezh";

export function AppRoutes() {
  let timeout: any = setTimeout(() => {
    setHearState(false);
  }, 180000);
  const [hearState, setHearState] = useState(false);

  const handleAnyClick = useCallback(() => {
    while (timeout--) {
      window.clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setHearState(false);
    }, 180000);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleAnyClick);
  }, [handleAnyClick]);

  return (
    <HearContext.Provider value={[hearState, setHearState]}>
      <Router
        main={
          <>
            <Route path="/" element={<App />} />
            <Route
              path="/knowledge"
              element={
                <QuestionsPanel
                  questions={knowledgeQuestions}
                  title="Знание.Государство"
                />
              }
            />
            <Route path="/snezh-comp" element={<SenezhComp />} />
            <Route
              path="/snezh-mngmnt"
              element={
                <QuestionsPanel
                  questions={senezhQuestions}
                  title="Мастерской управления «Сенеж»"
                />
              }
            />
            <Route
              path="/youth"
              element={
                <QuestionsPanel
                  questions={youthQuestions}
                  title="О возможностях для молодежи в России"
                />
              }
            />

            <Route
              path="/mngmnt"
              element={
                <QuestionsPanel
                  questions={mngmntQuestions}
                  title="Компетенция «Управление»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/efficency"
              element={
                <QuestionsPanel
                  questions={efficencyQuestions}
                  title="Компетенция «Эффективность»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/team"
              element={
                <QuestionsPanel
                  questions={teamQuestions}
                  title="Компетенция «Управление командой»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/mentor"
              element={
                <QuestionsPanel
                  questions={mentorQuestions}
                  title="Компетенция «Наставничество»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/human"
              element={
                <QuestionsPanel
                  questions={humanQuestions}
                  title="Компетенция «Человекоцентричность"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/goverment"
              element={
                <QuestionsPanel
                  questions={govermentQuestions}
                  title="Компетенция «Надпрофессиональные компетенции государственного управления»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/media"
              element={
                <QuestionsPanel
                  questions={mediaQuestions}
                  title="Компетенция «Медиалидерство»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/design"
              element={
                <QuestionsPanel
                  questions={designQuestions}
                  title="Компетенция «Госдизайн»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/capital"
              element={
                <QuestionsPanel
                  questions={capitalQuestions}
                  title="Компетенция «Человеческий капитал»"
                  backToSubCategory
                />
              }
            />
            <Route
              path="/communication"
              element={
                <QuestionsPanel
                  questions={communicationQuestions}
                  title="Компетенция «Международная коммуникация»"
                  backToSubCategory
                />
              }
            />
          </>
        }
        screen={<Route path="/" element={<Screen />} />}
      />
    </HearContext.Provider>
  );
}
