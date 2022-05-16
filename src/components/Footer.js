import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <SocialItems>
                <h4>ARShakir</h4>
                <div>
                    <a href="#"/>
                    <a href="#"/>
                    <a href="#"/>
                </div>
            </SocialItems>
            <NavBlock>
                <nav>
                    <h6>First</h6>
                    <a href="#">First page</a>
                    <a href="#">Second page</a>
                    <a href="#">Third page</a>
                    <a href="#">Fourth page</a>
                </nav>
                <nav>
                    <h6>Second</h6>
                    <a href="#">First page</a>
                    <a href="#">Second page</a>
                    <a href="#">Third page</a>
                    <a href="#">Fourth page</a>
                </nav>
                <nav>
                    <h6>Third</h6>
                    <a href="#">First page</a>
                    <a href="#">Second page</a>
                    <a href="#">Third page</a>
                    <a href="#">Fourth page</a>
                </nav>
                <nav>
                    <h6>Fourth</h6>
                    <a href="#">First page</a>
                    <a href="#">Second page</a>
                    <a href="#">Third page</a>
                    <a href="#">Fourth page</a>
                </nav>
            </NavBlock>
            <CopyNav>
                <a href="#">© Copyrights 2021</a>
                <a href="#">Privacy policy</a>
                <a href="#">Terms of service</a>
            </CopyNav>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 10px;
    height: unset;
  }
  width: 992px;
  height: 437px;
  margin: 185px auto 0;
`

const SocialItems = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 26px;
    letter-spacing: 0.32px;
    color: #F2994A;
  }

  div {
    width: 152px;
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      border-radius: 50%;
      transition-duration: 0.5s;

      :nth-child(1) {
        background: rgba(246, 246, 246, 0.15) url("/images/google.svg") no-repeat center;
      }

      :nth-child(2) {
        background: rgba(246, 246, 246, 0.15) url("/images/Twitter.svg") no-repeat center;
      }

      :nth-child(3) {
        background: rgba(246, 246, 246, 0.15) url("/images/facebook.svg") no-repeat center;
      }

      :hover {
        background-color: #F2994A;
        transform: scale(1.1);
      }
    }
  }
`

const NavBlock = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    height: 350px;
    margin-bottom: 50px;
  }
  width: 984px;
  height: 171px;
  margin: 94px auto 120px;
  display: flex;
  justify-content: space-between;

  nav {
    @media (max-width: 720px) {
      width: 50%;
      height: 40%;
    }
    
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h6 {
      font-family: 'Iter', sans-serif;
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0.2px;
      color: #F2994A;
      margin-bottom: 25px;
    }

    a {
      font-family: 'Iter', sans-serif;
      font-weight: 400;
      font-size: 15px;
      color: rgba(255, 255, 255, 0.71);
      letter-spacing: 0.2px;
      :hover {
        color: #F2994A;
      }
    }
  }
`

const CopyNav = styled.div`
  @media (max-width: 720px) {
    width: 100%;
  }
  width: 402px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  a {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    :hover {
      color: #F2994A;
    }
  }
`