import { useState, useRef, useEffect } from "react";

export const Slide = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [swiperCurrentPosition, setSwiperCurrentPosition] = useState(0);
  const [loop, setLoop] = useState<any>();

  const imageData = axios.get("");

  useEffect(() => {
    swiperRef.current.style.width = imageData?.data
      ? `${imageData.data.length}00vw`
      : "0";
  }, [imageData]);

  useEffect(() => {
    if (!imageData?.data) return;
    const swiperLoop = setTimeout(() => {
      setSwiperCurrentPosition((prev) => {
        if (prev < imageData.data.length - 1) {
          return prev + 1;
        } else return 0;
      });
    }, 3000);

    setLoop(swiperLoop);
    return clearTimeout(loop);
  }, [imageData?.data, setSwiperCurrentPosition, swiperCurrentPosition]);

  useEffect(() => {
    swiperRef.current.style.transform =
      swiperCurrentPosition === 0
        ? `translate(000vw)`
        : `translate(-${swiperCurrentPosition}00vw)`;
  }, [swiperCurrentPosition]);}

  return (
    <>
      <div className="none-scroll">
        <div ref={swiperRef} className="swiper-container-main">
          <div className="swiper-inner">
            {imageData?.data &&
              image.data.map((item: imageDataInterface) => (
                <SlideItem
                  key={item.htmlTemplateId}
                  imageURL={item.previewImagePath}
                  templateTitle={item.categoryName}
                  templateCategory={item.name}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
