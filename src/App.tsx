import Title from "./components/title"
import Navbar from "./components/navbar"
import ImageGallery from "./components/image_gallery"
import MouseFollowAnimation from "./components/mouse_follow_animation"

export default function App() {
  return (
    <>
      <MouseFollowAnimation></MouseFollowAnimation>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-cover bg-center bg-fixed" style={{backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(./background2.jpg)"}}>
        <Title></Title>
        <ImageGallery></ImageGallery>
      </div>
      
    </>
  )
}

