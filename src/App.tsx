import MouseFollowAnimation from "./components/mouse_follow_animation"
import { useState } from "react"
import TransitionPages from "./components/transition_pages";

export default function App() {
  const [hovering, setHovering] = useState(true);

  function handleHover(isHovering: boolean) {
    setHovering(!isHovering);
  }

  const [currentBackground, setCurrentBackground] = useState("/backgrounds/homepage.jpg");
  

  return (
    <div className="bg-cover bg-center bg-fixed transition-all" style={{backgroundImage: `linear-gradient(to bottom, rgba(102, 278, 255, 0.52), rgba(117, 19, 93, 0.73)), url(${currentBackground})`}}>
      <TransitionPages onHover={handleHover} changeBackground={setCurrentBackground} ></TransitionPages>
      <MouseFollowAnimation hovering={hovering}></MouseFollowAnimation>
    </div>
  )
}

