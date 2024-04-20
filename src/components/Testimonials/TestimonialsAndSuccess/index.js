import { Component } from "react";

import Slider from "../Slider/index";

import { MainContainer } from "./styledComponents";

import { SliderCon } from "./styledComponents";





import { TestContainer } from "./styledComponents";

import { Heading } from "./styledComponents";

class Testimonials extends Component {
  render() {
    return (
      <MainContainer>
        <TestContainer>
          <Heading>
           Stories from our valued customers!
          </Heading>
        </TestContainer>
        <SliderCon>
          <Slider />
        </SliderCon>
      </MainContainer>
    );
  }
}

export default Testimonials;
