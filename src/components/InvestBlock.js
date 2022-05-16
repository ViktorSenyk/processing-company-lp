import React from 'react';
import styled from "styled-components";

const InvestBlock = () => {
    return (
        <Container>
            <LeftText>
                <h2>Invest property for better <span>business</span></h2>
                <p>We are committed to processing the information in order to contact you and talk about your project. We are committed to processing the information.</p>
                <button>LEARN MORE</button>
            </LeftText>
            <InvestImg/>
        </Container>
    );
};

export default InvestBlock;

const Container = styled.section`
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 10px;
    text-align: center;
  }
  width: 1036px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const LeftText = styled.div`
  @media (max-width: 720px) {
    width: 100%;
  }
  width: 470px;
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 42px;
    color: #99EFD0;
    span {
      color: #F2994A;
    }
  }
  p {
    margin: 32px 0 46px;
    font-family: 'Gilroy', sans-serif;
    font-size: 15px;
    letter-spacing: 0.5px;
    line-height: 28px;
  }
  button {
    width: 155px;
    height: 54px;
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
  }
`

const InvestImg = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    margin: 50px auto -50px;
  }
  width: 450px;
  height: 414px;
  background: url("/images/InvestImg.png") no-repeat center;
`