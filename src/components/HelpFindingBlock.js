import React from 'react';
import styled from "styled-components";

const HelpFindingBlock = () => {
    return (
        <Container>
            <HelpFindingImg/>
            <RightText>
                <h4>Help Finding Information Online</h4>
                <p>Fully customizable and neatly organized components<br/>will help you work faster without limiting creative freedom.</p>
                <Wrap>
                    <div>
                        <h6>Feature One</h6>
                        <p>Fully customizable and neatly organized components will help you work faster </p>
                    </div>
                    <div>
                        <h6>Feature Two</h6>
                        <p>Fully customizable and neatly organized components will help you work faster </p>
                    </div>
                </Wrap>
            </RightText>
        </Container>
    );
};

export default HelpFindingBlock;

const Container = styled.section`
  @media (max-width: 720px) {
    width: 100%;
    margin: 50px 0;
    padding: 0 10px;
  }
  width: 1091px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 167px auto 196px;
`

const HelpFindingImg = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    background-size: contain;
  }
  width: 500px;
  height: 446px;
  background: url("/images/HelpFindingImg.png") no-repeat center;
`

const RightText = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    text-align: center;
  }
  width: 512px;
  h4 {
    font-family: 'Inter', sans-serif;
    font-size: 26px;
    letter-spacing: 0.32px;
    color: #99EFD0;
    margin-bottom: 32px;
  }
  p {
    font-family: 'Gilroy', sans-serif;
    font-size: 15px;
    letter-spacing: 0.2px;
    line-height: 20px;
  }
`

const Wrap = styled.div`
  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  div {
    position: relative;
    width: 224px;
    padding-top: 52px;
    ::before {
      @media (max-width: 720px) {
        top: 10px;
        left: 93px;
      }
      content: '';
      width: 36px;
      height: 36px;
      position: absolute;
      top: 0;
      left: 0;
    }
    :nth-child(1)::before {
      background: url("/images/SwissKnife.svg") no-repeat center;
    }
    :nth-child(2)::before {
      background: url("/images/LTE.svg") no-repeat center;
      background-size: contain;
    }
    h6 {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      letter-spacing: 0.2px;
      color: #99EFD0;
      line-height: 18.15px;
      margin-bottom: 8px;
    }
  }
`