'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UCProjectBox } from './UnclickableCard';

export default function ExperienceCarousel() {
  return (
    <div className="px-4 py-6">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
        <UCProjectBox
                title="AI Development Intern"
                org="Georgia Institute of Technology"
                date="AUG 2025"
                desc="Computational creativity & AI-powered game generation. More coming soon."
                color="#fbceb1"
              />
            <UCProjectBox
                title="STEM@GTRI Intern"
                org="Georgia Tech Research Institute"
                date="JUNE - JULY 2025"
                desc="Details coming soon."
                color="#b1ddc9"
              />
          <UCProjectBox
            title="AI Development Intern"
            org="United Nations"
            date="JAN 2025 - PRESENT"
            desc="Coordinating AI development across 140+ youth-led international NGOs."
            color="#fbceb1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="Stanford Department of Anesthesiology"
            date="JAN 2025 - PRESENT"
            desc="Predicting hypotension from arterial blood waveforms using deep learning."
            color="#b1ddc9"
          />
        </SwiperSlide>

        <SwiperSlide>
          <UCProjectBox
            title="Development Intern"
            org="Oracle"
            date="AUG 2024 - PRESENT"
            desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions."
            color="#6cd0d0"
          />
        </SwiperSlide>

        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="Stanford Center for AIMI"
            date="JUNE - JULY 2024"
            desc="1 of 20 selected nationwide. Developed high-accuracy pulmonary diagnostic system. RadGraph for unsupervised radiology report classifier; ResNet ultrasound analysis model."
            color="#ffcbdb"
          />
        </SwiperSlide>

        <SwiperSlide>
          <UCProjectBox
            title="Development Intern"
            org="Microsoft"
            date="JULY 2023 - APR 2024"
            desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a mobile application and NFC wearable that streamlines communication of medical information between crisis victims and first responders."
            color="#fbceb1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="TSI + Cornell University"
            date="JUNE - AUG 2023"
            desc="Developed a graph neural network for binary state neuroimaging recognition. Accepted to TSI (~10% of 850), matched at Cornell University. Published paper and spoke at Talaria International Conference."
            color="#b1ddc9"
          />
        </SwiperSlide>

        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="Midwestern University"
            date="AUG 2023 - APR 2024"
            desc="Developed a two-prong neural network to automate gastric point-of-care ultrasound. Segments antrum, classifies content, identifies diameters, calculates operable volume, and outputs aspiration risk."
            color="#6cd0d0"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}