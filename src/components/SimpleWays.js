import React from 'react';
import styled from "styled-components";

const SimpleWays = () => {
    return (
        <Container>
            <h2>3 Simple Ways To <span>Save</span> A Bunch<br/>Of <span>Money</span> When Buying A New Computer</h2>
            <p>Fully customizable and neatly organized components<br/>will help you work faster without limiting creative freedom.</p>
            <Wrap>
                <div>
                    <h2>100+</h2>
                    <p>5 Reasons To Purchase<br/>Desktop Computers</p>
                </div>
                <div>
                    <h2>43,000+</h2>
                    <p>3 Simple Ways To Save A Bunch Of<br/>Money When Buying A New Computer</p>
                </div>
                <div>
                    <h2>30+</h2>
                    <p>A Discount Toner Cartridge<br/>Is Better Than Ever And You<br/>Will Save 50 Or More</p>
                </div>
            </Wrap>
        </Container>
    );
};

export default SimpleWays;

const Container = styled.section`
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 10px;
  }
  width: 1091px;
  margin: 0 auto;
  text-align: center;
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 36px;
    color: #99EFD0;
    span {
      color: #F2994A;
    }
  }
  p {
    margin: 32px 0 48px;
    font-family: 'Gilroy', sans-serif;
    font-size: 15px;
    letter-spacing: 0.2px;
  }
`

const Wrap = styled.div`
  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: center;
    height: 400px;
  }
  width: 100%;
  height: 118px;
  display: flex;
  justify-content: space-between;
  div {
    @media (max-width: 720px) {
      height: unset;
    }
    width: 291px;
    height: 100%;
    p {
      margin: 16px 0 0;
    }
  }
`