import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageGallery: React.FC = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    slidesToShow: 5, // Number of images to show at once
    slidesToScroll: 1,
    arrows: false
  };

  // Array of image URLs
  const images = [
    "languages/c.png",
    "languages/haskell.png",
    "languages/java.png",
    "languages/kotlin.png",
    "languages/javascript.png",
    "languages/typescript.png",
    "languages/python.png",
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="p-2">
            <img src={imageUrl} alt={`Image ${index}`} className="h-auto max-h-16 rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
