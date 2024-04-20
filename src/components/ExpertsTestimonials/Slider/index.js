import React, { useState, useEffect } from "react";
import Styled, { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Buttons from "../Buttons/index";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CardTitle } from "./styledComponents";
export default function CommentsSection() {
  const [activeindex, setActiveindex] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // Call once to set initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveindex(swiper.activeIndex);
  };

  const comments = [
    {
      
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
      name: "Dr.Vaishali Sharma",
      role: "Ayurveda Practitioner(BAMS,MD)",
      para1: "25 years of experience",
      para2:
        "skin Specialist",
      title:'Book a session',
    },
    {
      
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
      name: "Dr.Vaishali Sharma",
      role: "Ayurveda Practitioner(BAMS,MD)",
      para1: "25 years of experience",
      para2:
        "skin Specialist",
      title:'Book a session',
    },
    {
      
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
      name: "Dr.Vaishali Sharma",
      role: "Ayurveda Practitioner(BAMS,MD)",
      para1: "25 years of experience",
      para2:
        "skin Specialist",
      title:'Book a session',
    },
    {
      
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
      name: "Dr.Vaishali Sharma",
      role: "Ayurveda Practitioner(BAMS,MD)",
      para1: "25 years of experience",
      para2:
        "skin Specialist",
      title:'Book a session',
    },
    {
      
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
      name: "Dr.Vaishali Sharma",
      role: "Ayurveda Practitioner(BAMS,MD)",
      para1: "25 years of experience",
      para2:
        "skin Specialist",
      title:'Book a session',
    },
    {
      
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
      name: "Dr.Vaishali Sharma",
      role: "Ayurveda Practitioner(BAMS,MD)",
      para1: "25 years of experience",
      para2:
        "skin Specialist",
      title:'Book a session',
    },
    {
      
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
      name: "Dr.Vaishali Sharma",
      role: "Ayurveda Practitioner(BAMS,MD)",
      para1: "25 years of experience",
      para2:
        "skin Specialist",
      title:'Book a session',
    },
  ];

  return (
    <>
      <StyledSwiper
        onSlideChange={handleSlideChange}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {comments.map((comment, index) => (
          <SwiperSlide key={index}>
            <MainContainer>
              <CardContainer active={activeindex === index} activeindex={index}>
              <ProfileCon>
                  <Image src={comment.image} />
                  <Details>
                    <Name>{comment.name}</Name>
                    <Role>{comment.role}</Role>
                  </Details>
                </ProfileCon>
                <Para1 active={activeindex === index}>{comment.para1}</Para1>
                <Para2>{comment.para2}</Para2>
              <CardTitle>{comment.title}</CardTitle>
              </CardContainer>
            </MainContainer>
          </SwiperSlide>
        ))}
        <Buttons />
      </StyledSwiper>
    </>
  );
}

const StyledSwiper = Styled(Swiper)`
    @media screen and (max-width: 576px) {
        .swiper-slide {
            width: 100%; // Set width for mobile view
        }
    }
`;

const Main = Styled.div`
position:on;
background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
`;

// const Main = Styled.div`
// position:on;
// background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
// `

// const Main = Styled.div`
// position:on;
// background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
// `

const MainContainer = Styled.div`
display: flex;
flex-direction:column;
padding: 10px;
height:450px;
margin-top:30px;
width:450px;


@media screen and (max-width: 576px) {
  width:170px; /* Adjust width for mobile view */
  height: 250px;
  margin-right:20px;
  margin-left:-20px;
}

`;

/* @media screen and (max-width:576px){
  margin-top: 10px;
    width: 350px;
    height: 250px;
    margin-right:20px;
  }
`;
 */

const CardContainer = Styled.div`
background-color:rgba(255, 247, 226, 1);
border-radius:30px;
display:flex;
flex-direction:column;
border:0px;
height: 65%;
width:400px;
box-shadow: 0px 4px 4px 0px #00000040;
margin-bottom:10px;
@media screen and (max-width:576px){
    height: 98%;
    width: 500px;
    margin-right:20px;
  }
`;

const Para1=styled.p`
text-align:center;
font-size:18px;
`;
const Para2=styled.p`
text-align:center;
font-size:18px;
backgroun-color:rgba(58, 100, 59, 0.12);
border-radius:5px;
`;
const ProfileCon=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
`;
const Image=styled.img`
width:50px;
height:50px;
align-self:center;
margin-top:20px;
`;
const Details=styled.div`
display:flex;
flex-direction:column;
`;
const Name = Styled.a`
color:green;
font-size:18px;

@media screen and (max-width:576px){
    font-size:10px;
  }
`;
const Role = Styled.a`
color:black;
font-size:14px;
@media screen and (max-width:576px){
    font-size:14px;
  }`;
