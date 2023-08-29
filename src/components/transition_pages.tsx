import { useState } from "react";
import HomePage from "../page_components/homepage";
import WorkExperience from "../page_components/work_experience";
import Navbar from "./navbar";
import CopiedMessage from "./copied_message";

enum CurrentPage {
  HOMEPAGE,
  WORK_EXPERIENCE,
}

interface TransitionPagesProps {
  onButtonHover: (isHovering: boolean) => void;
}

export default function TransitionPages({
  onButtonHover,
}: TransitionPagesProps) {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.HOMEPAGE
  );

  function changeToHome() {
    setCurrentPage(CurrentPage.HOMEPAGE);
  }

  function changeToWorkExperience() {
    setCurrentPage(CurrentPage.WORK_EXPERIENCE);
  }

  function changeToAcademics() {

  }

  const [showMessage, setShowMessage] = useState(false);

  const showMessageForSeconds = (seconds: number) => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, seconds * 1000);
  };

  function showMessageComponent() {
    showMessageForSeconds(3);
  }

  return (
    <div>
      <Navbar showCopyMessage={showMessageComponent} onHover={onButtonHover}></Navbar>
      <div className={`${currentPage === CurrentPage.HOMEPAGE ? "opacity-100" : "opacity-0"} transition-all`}>
        <HomePage
          onButtonHover={onButtonHover}
          workExperienceClick={changeToWorkExperience}
          academicsClick={() => console.log("academics")}
        ></HomePage>
      </div>
      <div className={`${currentPage === CurrentPage.WORK_EXPERIENCE ? "opacity-100" : "opacity-0"} transition-all`}>
        <WorkExperience onHover={onButtonHover} returnHome={changeToHome}></WorkExperience>
      </div>
      <CopiedMessage copied="danielgwilcox@gmail.com" showMessage={showMessage}></CopiedMessage>
    </div>
  );
}
