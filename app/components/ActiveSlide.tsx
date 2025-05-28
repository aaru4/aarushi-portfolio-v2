"use client";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { UCProjectBox } from "../components/UnclickableCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ActiveSlide() {
  return (
    //Margin to the sides
    <div className="mx-6 mt-8">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000, //Changes every 5 seconds
          disableOnInteraction: true, //Autoplay stops after user interaction
        }}
        centeredSlides={true} //Makes the middle slide the center instead of the most left (can be changed)
        spaceBetween={20}
        slidesPerView={3}
        loop={true} //I Genuinly didn't know loop was an attribute and spent 30 minutes tying to hardcode this
        //These next 2 lines can be removed
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        //For Mobile and smaller screens
        //Tested points based on your text overflow or whatever
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          860: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <UCProjectBox
            title="AI Development Intern"
            org="Georgia Institute of Technology"
            date="JUNE 2025"
            desc="Computational creativity & AI-powered game generation. More details coming soon."
            color="#fbceb1"
            borderColor="#e0b594"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="STEM@GTRI Intern"
            org="Georgia Tech Research Institute"
            date="JUNE - JULY 2025"
            desc="Selected among the top 7% of 1,100+ applicants for this competitive, stipend-based program. Working in RF Communications to develop a functional radio system. More details coming soon."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="AI Development Intern"
            org="United Nations WAY"
            date="JAN 2025 - PRESENT"
            desc="Selected as 1 of 500+ applicants. Web development, technical advisor, and communication manager. More details coming soon."
            color="#6cd0d0"
            borderColor="#519e9e"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="Stanford Department of Anesthesiology"
            date="JAN 2025 - PRESENT"
            desc="Using advanced deep learning  to 1) develop a more physiologically relevant definition of perioperative hypotension and hemodynamic instability, and algorithms to: 2) predict hypotension, as well as 3) perioperative outcomes in surgical patients, leveraging the MOVER dataset."
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="Development Intern"
            org="Oracle"
            date="AUG 2024 - MAY 2025"
            desc="Designed and implemented a billing system using OCI, APEX, SQL, & PL/SQL; directed FIFO debt management, payment application, and error handling, with delinquency predictions."
            color="#fbceb1"
            borderColor="#e0b594"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="Stanford Center for Artificial Intelligence in Medicine and Imaging"
            date="JUNE - JULY 2024"
            desc="1 of 20 selected nationwide. Developed high-accuracy pulmonary diagnostic system.  RadGraph for unsupervised radiology report classifier; ResNet ultrasound analysis model."
            color="#b1ddc9"
            borderColor="#86b0a0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="Development Intern"
            org="Microsoft"
            date="JULY 2023 - APR 2024"
            desc="Utilized Swift, SQL, Dart, and JavaScript to develop JackTag, a mobile application and NFC wearable that streamlines communication of medical information between crisis victims and first responders. Presented to Microsoft/AT&T investors."
            color="#6cd0d0"
            borderColor="#519e9e"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="TSI + Cornell University"
            date="JUNE - AUG 2023"
            desc="Developed a graph neural network for binary state neuroimaging recognition. Accepted to TSI (~10% of 850), matched at Cornell University. Published paper and spoke at Talaria International Conference."
            color="#ffcbdb"
            borderColor="#fa98b6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UCProjectBox
            title="AI Research Intern"
            org="Midwestern University"
            date="AUG 2023 - APR 2024"
            desc="Developed a two-prong neural network to automate gastric point-of-care ultrasound. Segments antrum, classifies content, identifies diameters, calculates operable volume, and outputs aspiration risk."
            color="#fbceb1"
            borderColor="#e0b594"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ActiveSlide;
