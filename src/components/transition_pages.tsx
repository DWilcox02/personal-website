import { useEffect, useState } from "react";
import HomePage from "../page_components/homepage";
import WorkExperience from "../page_components/work_experience";
import Navbar from "./navbar";
import CopiedMessage from "./copied_message";
import Academics from "../page_components/academics";
import AboutMe from "../page_components/about_me";

enum CurrentPage {
  HOMEPAGE,
  WORK_EXPERIENCE,
  ACADEMICS,
  ABOUT_ME,
}

interface TransitionPagesProps {
  onHover: (isHovering: boolean) => void;
  changeBackground: (newBackground: string) => void;
}

export default function TransitionPages({
  onHover,
  changeBackground,
}: TransitionPagesProps) {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.HOMEPAGE
  );
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [showAcademics, setShowAcademics] = useState(false);
  const [showAboutMe, setAboutMe] = useState(false);

  function changeToHome() {
    setCurrentPage(CurrentPage.HOMEPAGE);
    changeBackground("/backgrounds/homepage.jpg");
    setShowWorkExperience(false);
    setShowAcademics(false);
    setAboutMe(false);
    onHover(false);
  }

  function changeToWorkExperience() {
    setCurrentPage(CurrentPage.WORK_EXPERIENCE);
    setTimeout(() => {
      setShowWorkExperience(true); // after 1 second
      changeBackground("/backgrounds/laptop.jpg");
    }, 150);
    
  }

  function changeToAcademics() {
    setCurrentPage(CurrentPage.ACADEMICS);
    setTimeout(() => {
      setShowAcademics(true); // after 1 second
      changeBackground("/backgrounds/pedro.jpg");
    }, 150);
  }

  function changeToAboutMe() {
    setCurrentPage(CurrentPage.ABOUT_ME);
    setTimeout(() => {
      setAboutMe(true); // after 1 second
      changeBackground("/backgrounds/kew.jpg");
    }, 150);
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

  const desktopSize = 700;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > desktopSize);

  function updateMedia() {
    setIsDesktop(window.innerWidth > desktopSize);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Navbar showCopyMessage={showMessageComponent} onHover={onHover}></Navbar>
      <div
        className={`${
          currentPage === CurrentPage.HOMEPAGE ? "" : "opacity-0"
        } transition-all w-full`}
      >
        <HomePage
          onHover={onHover}
          workExperienceClick={changeToWorkExperience}
          academicsClick={changeToAcademics}
          aboutMeClick={changeToAboutMe}
        ></HomePage>
      </div>
      <div
        className={`${
          showWorkExperience ? "" : "opacity-0"
        } transition-all fixed top-16 w-full`}
      >
        {showWorkExperience && (
          <WorkExperience
            onHover={onHover}
            returnHome={changeToHome}
            isDesktop={isDesktop}
          ></WorkExperience>
        )}
      </div>
      <div
        className={`${
          showAcademics ? "" : "opacity-0"
        } transition-all fixed top-16 w-full`}
      >
        {showAcademics && (
          <Academics
            onHover={onHover}
            returnHome={changeToHome}
            isDesktop={isDesktop}
          ></Academics>
        )}
      </div>
      <div
        className={`${
          showAboutMe ? "" : "opacity-0"
        } transition-all fixed top-16 w-full`}
      >
        {showAboutMe && (
          <AboutMe
            onHover={onHover}
            returnHome={changeToHome}
            isDesktop={isDesktop}
          ></AboutMe>
        )}
      </div>
      <CopiedMessage
        copied="danielgwilcox@gmail.com"
        showMessage={showMessage}
      ></CopiedMessage>
    </>
  );
}
