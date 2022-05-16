import React from 'react';
import styled from "styled-components";

const LearnMoreBlock = () => {
    return (
        <Container>
            <LeftText>
                <h2>Increase your business <span>traffic</span></h2>
                <p>We are committed to processing the information in order to contact you and talk about your project. </p>
                <LearnMoreBtn>LEARN MORE</LearnMoreBtn>
            </LeftText>
            <RightImg/>
        </Container>
    );
};

export default LearnMoreBlock;

const Container = styled.section`
  @media (max-width: 720px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  width: 969px;
  margin: 0 auto 196px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const LeftText = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
  }
  width: 470px;
  height: 279px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 42px;
    color: #99EFD0;
    span {
      color: #F2994A;
    }
  }
  p {
    font-family: 'Gilroy', sans-serif;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.5px;
  }
`

const LearnMoreBtn = styled.button`
  width: 155px;
  height: 48px;
  border: 1px solid #F2994A;
  border-radius: 4px;
  color: white;
  background-color: #F2994A;
  cursor: pointer;
  transition-duration: 0.1s;
  font-size: 12px;
  letter-spacing: 2px;
  font-family: 'Rubik', sans-serif;
  :hover {
    box-shadow: 0 0 20px rgba(242, 153, 74, 0.46);
    transform: scale(1.1);
  }
`

const RightImg = styled.div`
  @media (max-width: 720px) {
   width: 100%;
    background-size: contain;
    margin-top: 20px;
  }
  width: 440px;
  height: 460px;
  background: url("/images/LearnMoreImg.png") no-repeat center;
  overflow: visible;
  margin-top: -60px;
`