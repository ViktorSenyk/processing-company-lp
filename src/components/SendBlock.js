import React from 'react';
import styled from "styled-components";

const SendBlock = () => {
    return (
        <Container>
            <h2>There are many reasons to get down</h2>
            <p>There are many reasons to get down and start to get<br/>depressed about your situation. </p>
            <form action="#">
                <Wrap>
                    <input type="text" placeholder="Your Email"/>
                    <button>SEND</button>
                </Wrap>
            </form>
            <p>No spam. Only releases, updates and discounts</p>
        </Container>
    );
};

export default SendBlock;

const Container = styled.section`
  @media (max-width: 720px) {
    width: 100%;
    padding: 10px;
  }
  width: 940px;
  margin: 0 auto;
  text-align: center;
  background-color: #3C3E7D30;
  border-radius: 10px;
  padding: 50px 0;

  h2 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 36px;
    color: #F2994A;
    margin-bottom: 20px;
  }

  p:nth-child(2) {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  input {
    width: 288px;
    height: 56px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border: none;
    background-color: rgba(246, 246, 246, 0.11);
    font-size: 18px;
    padding: 8px;
    color: #F2994A;
    outline: none;

    ::placeholder {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.18);
      letter-spacing: 0.2px;
    }

  }

  button {
    width: 128px;
    height: 56px;
    border: 1px solid #F2994A;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
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
  p:nth-child(4) {
    font-family: 'Gilroy', sans-serif;
    font-size: 14px;
    letter-spacing: 0.2px;
  }
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 23px 0 16px;
`