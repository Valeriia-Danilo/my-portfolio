'use client';

import ProjectCard from '../ProjectCard/ProjectCard';
import { Project } from '@/types/types';
import css from './ProgectList.module.css';
import {
  EffectCoverflow,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <section className={css.projects}>
      <h2 className={css.projectsTitle}>My Projects</h2>
      <Swiper
        modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard]}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        speed={600}
        navigation
        grabCursor={true}
        allowTouchMove={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
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
        keyboard={{
          enabled: true,
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsList;
