import { Component } from "react";

import Slider from "../Slider/index";

import { MainContainer } from "./styledComponents";

import { SliderCon } from "./styledComponents";





import { TestContainer } from "./styledComponents";

import { Heading } from "./styledComponents";

class ExpertsTestimonials extends Component {
  render() {
    return (
      <MainContainer>
        <TestContainer>
          <Heading>
           Meet Our Ayurveda Experts
          </Heading>
        </TestContainer>
        <SliderCon>
          <Slider />
        </SliderCon>
      </MainContainer>
    );
  }
}

export default ExpertsTestimonials;
