import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageGalleryProps {
  images: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  settings: any;
  maxHeightSetting: string;
}

function ImageGallery({images, settings, maxHeightSetting}: ImageGalleryProps) {

  return (
    <div className="w-full max-w-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="p-2">
            <img src={imageUrl} alt={`Image ${index}`} className={`h-auto rounded-lg ${maxHeightSetting}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageGallery;
