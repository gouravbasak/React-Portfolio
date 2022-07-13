import React from 'react'
import './Review.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import'swiper/css/pagination';
import'swiper/css';
const Review = () => {
    const clients=[
        {
       img: profilePic1,
       review:
       "He is smart, efficient, and skilled. She provided feedback for my website and helped me to make improvements to it. She is also fast in responding to my comments. Will be happy to work with her again!"
    },
        {
       img: profilePic2,
       review:
       "Outstanding performance! Ataime made sure everything worked and even did revisions. highly recommended !"
    },
        {
       img: profilePic3,
       review:
       "I really like this seller, he was always responsive for what i wanted. I recommend him for any project you wish to take him. Super professional. Thanks!"
    },
        {
       img: profilePic4,
       review:
       "Gourav was great, he brought up a lot of great ideas that we're definitely going to explore on our landing page going forward. Looking forward to working with him on other projects we have!"
    },
]
  return (
    <div className="t-wrapper"id='Review'>
        <div className="t-heading">
            <span>Client always get</span>
            <span>&nbsp;Exceptional Work&nbsp;</span>
            <span>From me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="review">
                        <img src={client.img} alt=""/>
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Review