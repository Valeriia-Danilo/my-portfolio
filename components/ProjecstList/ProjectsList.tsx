'use client';

import ProjectCard from '../ProjectCard/ProjectCard';
import { Project } from '@/types/types';
import css from './ProgectList.module.css';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <div className={css.swiperWrapper}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        centeredSlides={true}
        loop={true}
        speed={600}
        navigation
        grabCursor={true}
        allowTouchMove={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        mousewheel={{
          thresholdDelta: 50,
          sensitivity: 1,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsList;
