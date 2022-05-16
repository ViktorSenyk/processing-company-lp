import React from 'react';
import styled from "styled-components";

const CreateBlock = () => {
    return (
        <Container>
            <div>
                <h2>Create your <span>next project</span> with startup framework</h2>
                <GetStartedBtn>GET STARTED</GetStartedBtn>
            </div>
            <GetStartedImg/>
        </Container>
    );
};

export default CreateBlock;

const Container = styled.section`
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 10px;
    margin: 50px auto 0;
  }
  width: 1203px;
  margin: 169px auto 96px;
  overflow: visible;
  div:nth-child(1) {
    @media (max-width: 720px) {
      width: 100%;
    }
    width: 770px;
    margin: 0 auto;
    text-align: center;
    h2 {
      font-family: 'Inter', sans-serif;
      font-size: 42px;
      color: #99EFD0;
      span {
        color: #F2994A;
      }
    }
  }
`

const GetStartedBtn = styled.button`
  width: 164px;
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
  margin-top: 46px;
  :hover {
    box-shadow: 0 0 20px rgba(242, 153, 74, 0.46);
    transform: scale(1.1);
  }
`

const GetStartedImg = styled.div`
  width: 100%;
  height: 492px;
  background: url("/images/GetStartedImg.png") no-repeat center;
  overflow: visible;
  margin-top: -140px;
`