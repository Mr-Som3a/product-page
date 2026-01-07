import { useState } from "react";
import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";
export default function HeroSection() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  interface ImageType {
    id:number,
    url:string,
    alt:string
  }
  const images = [
    { id: 1, url: img1, alt: "image1" },
    { id: 2, url: img2, alt: "image2" },
    { id: 3, url: img3, alt: "image3" },
    { id: 4, url: img4, alt: "image4" },
  ];

  const [Img, setImg] = useState(images[0]);

  const handleImageChange = (image:ImageType ) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setImg(image);
      setIsTransitioning(false);
    }, 300);
  };
  const handlePrv=()=>{
    if (isTransitioning) return;
    setIsTransitioning(true);
    const prevId = Img.id === 1 ? 4 : Img.id - 1;
    setTimeout(() => {
      setImg(images.find(img => img.id === prevId) || images[0]);
      setIsTransitioning(false);
    }, 300);
  };
  const handleNext=()=>{
    if (isTransitioning) return;
    setIsTransitioning(true);
    const nextId = Img.id === 4 ? 1 : Img.id + 1;
    setTimeout(() => {
      setImg(images.find(img => img.id === nextId) || images[0]);
      setIsTransitioning(false);
    }, 300);
  };
  return (
    <>
      <div className="relative md:w-[80%] mx-auto space-y-4">
        
        <div className="">
          <img className={`md:rounded-xl transition-all duration-300 ease-in-out transform ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`} src={Img.url} />
        </div>

        {/* Mobile slider */}
        <div className="absolute md:hidden top-[45%] flex justify-between w-full px-4  ">
          <button onClick={handlePrv} className="flex justify-center items-center w-10 h-10 rounded-full  bg-white">
            <img src="src/assets/icon-previous.svg" alt="" />
          </button>
          <button onClick={handleNext} className="flex justify-center items-center w-10 h-10 rounded-full  bg-white">
            <img src="src/assets/icon-next.svg" alt="" />
          </button>
        </div>

        {/* desktop gallary image */}
        <div className="hidden md:flex flex-wrap space-y-2  justify-between ">
          {images.map((image) => (
            <div key={image.id} className="relative ">
              <img
                onClick={() => handleImageChange(image)}
                className=" cursor-pointer w-12 xl:w-20 rounded-lg"
                src={image.url}
                alt={image.alt}
              />
              {Img.url === image.url ? (
                <div className="absolute w-full h-full rounded-lg top-0 bg-[rgba(255,255,255,0.6)]"></div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
