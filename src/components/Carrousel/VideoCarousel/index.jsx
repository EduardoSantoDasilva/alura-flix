
import VideoCard from "../VideoCard";
import { videos, categories } from "../../../data/db";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


// eslint-disable-next-line react/prop-types
export default function VideoCarousel({ categoria }) {

  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={4}
    modules={[Navigation, A11y]}
    navigation = {true}
    >
      {videos.map((video) => {
        if (video.categoryName === categoria) {
          return (
            <SwiperSlide>
              <VideoCard
                key={video.id}
                categoryColor={
                  categories.find(
                    (category) => category.categoryName === categoria
                  ) === undefined
                    ? "#fff"
                    : categories.find(
                        (category) => category.categoryName === categoria
                      ).categoryColor
                }
                videoCover={video.videoImgLink}
                videoLink={video.videoLink}
              />
            </SwiperSlide>
            
          );
        }
      })}
    </Swiper>
  );
}
