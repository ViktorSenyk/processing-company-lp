import React from 'react';
import styled from "styled-components";
import {Fade} from "react-reveal";

const HomeBlock = () => {
    return (
        <Container>
            <LeftInfo>
                <h2>Many reasons to get up and start to get back in the business</h2>
                <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                <LearnMoreBtn>LEARN MORE</LearnMoreBtn>
                <DemoBtn>DEMO</DemoBtn>
                <PreviewBlock>
                    <WatchBtn/>
                    <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <p>Watch preview</p>
                </PreviewBlock>
            </LeftInfo>
            <Fade right>
                <RightImg/>
            </Fade>
            <LogoList>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
                <a href="#"/>
            </LogoList>
        </Container>
    );
};

export default HomeBlock;

const Container = styled.section`
  @media (max-width: 720px) {
    padding: 200px 10px 0;
    overflow-x: hidden;
  }
  @media (max-width: 550px) {
    text-align: center;
  }
  padding-top: 253px;
  width: 100%;
  position: relative;
`

const LeftInfo = styled.div`
  @media (max-width: 550px) {
    width: 100%;
  }
  width: 540px;
  h2 {
    color: #99EFD0;
    font-size: 44px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 40px;
  }
  p {
    color: #8476AA;
    font-size: 18px;
    font-family: 'Gilroy', sans-serif;
    line-height: 22px;
  }
`

const LearnMoreBtn = styled.button`
  width: 157px;
  height: 46px;
  border: 1px solid #F2994A;
  border-radius: 4px;
  color: white;
  background-color: #F2994A;
  cursor: pointer;
  transition-duration: 0.1s;
  margin: 40px 0 60px;
  font-size: 12px;
  letter-spacing: 2px;
  font-family: 'Rubik', sans-serif;
  :hover {
    box-shadow: 0 0 20px rgba(242, 153, 74, 0.46);
    transform: scale(1.1);
  }
`

const DemoBtn = styled(LearnMoreBtn)`
  color: #F2994A;
  background-color: rgba(255, 255, 255, 0);
  margin-left: 20px;
`

const PreviewBlock = styled.div`
  @media (max-width: 550px) {
    width: 100%;
    margin-bottom: 200px;
  }
  width: 540px;
  height: 80px;
  margin-bottom: 103px;
  p {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }
  p:nth-child(2) {
    font-size: 16px;
    margin-bottom: 6px;
  }
  p:nth-child(3) {
    font-size: 14px;
    line-height: 22px;
    color: #6D6D78;
    cursor: pointer;
    :hover {
      color: #F2994A;
    }
  }
`

const WatchBtn = styled.button`
  @media (max-width: 550px) {
    width: 100%;
    height: 120px;
    margin-bottom: 25px;
  }
  width: 140px;
  height: 80px;
  background: #361C5D url("/images/Play.svg") center no-repeat;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  float: left;
  margin-right: 20px;
  transition-duration: 0.5s;
  :hover {
    transform: scale(1.2);
    outline: 2px solid #F2994A;
  }
`

const RightImg = styled.div`
  @media (max-width: 550px) {
    width: 100%;
    height: 35vh;
    background-size: cover;
    right: -160px;
    top: -685px;
  }
  width: 724px;
  height: 589px;
  position: absolute;
  //top: 200px;
  top: -600px;
  right: -151px;
  background: url("/images/Frame.svg") center no-repeat;
`

const LogoList = styled.div`
  @media (max-width: 550px) {
    height: 90px;
    flex-wrap: wrap;
    margin-top: 80px;
  }
  width: 100%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    display: block;
    width: 117px;
    height: 25px;
    transition-duration: 0.5s;
    opacity: .3;
    :hover {
      opacity: .9;
    }
  }

  a:nth-child(1) {
    background: url("/images/Frame1.svg") no-repeat center;
  }

  a:nth-child(2) {
    background: url("/images/Frame2.svg") no-repeat center;
  }

  a:nth-child(3) {
    background: url("/images/Frame3.svg") no-repeat center;
  }

  a:nth-child(4) {
    background: url("/images/Frame4.svg") no-repeat center;
  }

  a:nth-child(5) {
    background: url("/images/Frame5.svg") no-repeat center;
  }

  a:nth-child(6) {
    background: url("/images/Frame6.svg") no-repeat center;
  }
`