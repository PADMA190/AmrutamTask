import React, { useState, useEffect } from "react";
import Styled from "styled-components";
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
      title:'Consulted for hair',
      stars: "⭐⭐⭐⭐⭐",
      para1: "“One of a kind service”",
      para2:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      name: "Sophie Moore",
      role: "Chennai ",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      title:'Consulted for hair',
      stars: "⭐⭐⭐⭐⭐",
      para1: "“One of a kind service”",
      para2:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      name: "Sophie Moore",
      role: "Chennai ",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      title:'Consulted for hair',
      stars: "⭐⭐⭐⭐⭐",
      para1: "“One of a kind service”",
      para2:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      name: "Sophie Moore",
      role: "Chennai ",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      title:'Consulted for hair',
      stars: "⭐⭐⭐⭐⭐",
      para1: "“One of a kind service”",
      para2:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      name: "Sophie Moore",
      role: "Chennai ",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      title:'Consulted for hair',
      stars: "⭐⭐⭐⭐⭐",
      para1: "“One of a kind service”",
      para2:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      name: "Sophie Moore",
      role: "Chennai ",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      title:'Consulted for hair',
      stars: "⭐⭐⭐⭐⭐",
      para1: "“One of a kind service”",
      para2:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      name: "Sophie Moore",
      role: "Chennai ",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      title:'Consulted for hair',
      stars: "⭐⭐⭐⭐⭐",
      para1: "“One of a kind service”",
      para2:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      name: "Sophie Moore",
      role: "Chennai ",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
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
              <CardTitle>{comment.title}</CardTitle>
              <ProfileCon>
                  <Image src={comment.image} />
                  <Details>
                    <Name>{comment.name}</Name>
                    <Role>{comment.role}</Role>
                  </Details>
                </ProfileCon>
                <Stars>{comment.stars}</Stars>
                <Para1 active={activeindex === index}>{comment.para1}</Para1>
                <Para2>{comment.para2}</Para2>
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
background-color:white;
border-radius:15px;
display:flex;
flex-direction:column;
border:0px;
height: 400px;
width:400px;
justify-content:space-between;
box-shadow: 0px 4px 4px 0px #00000040;
margin-bottom:10px;
@media screen and (max-width:576px){
    height: 230px;
    width: 500px;
    margin-right:20px;
  }
`;
const Stars = Styled.a`
font-size:10px;

margin:5px 20px 0px 20px;
margin-top:-100px;
`;
const Para1 = Styled.p`
color:${(props) => (props.active ? "black" : "black")};
font-size: 18px;
font-weight: 700;
letter-spacing: 0px;
text-align: left;
margin:0px 20px 10px 20px;
margin-top:-100px;
@media screen and (max-width:576px){
    font-size: 12px;
    width:100%;
    margin-top:10px;
    line-height:20px;
  }
`;
const Para2 = Styled.p`
color:${(props) => (props.active ? "black" : "black")};
font-size: 18px;
font-weight: 400;

letter-spacing: 0px;
text-align: left;
margin:0px 20px 10px 20px;
margin-top:-100px;
@media screen and (max-width:576px){
    font-size: 10px;
    line-height: 18px;
    width:70%;
    margin-top:0px;
  }
`;
const ProfileCon = Styled.div`
display: flex;
flex-direction:row;
gap:20px;

margin:0px 20px 0px 20px;
margin-top:-100px;
@media screen and (max-width:576px){
    gap:10px;
    margin-top:10px;
}
`;

const Image = Styled.img`
@media screen and (max-width:576px){
    height: 20px;
    width:20px;
  }

`;
const Details = Styled.div`
display: flex;
flex-direction:column;
justify-content:end;
`;
const Name = Styled.a`
color:green;
font-size:15px;

@media screen and (max-width:576px){
    font-size:10px;
  }
`;
const Role = Styled.a`
color:black;
font-size:12px;
@media screen and (max-width:576px){
    font-size:10px;


  }`;
