import React, {useState} from 'react';
import styled from "styled-components";

const Header = () => {

    let [burgerBoolean, setBurgerBoolean] = useState(false);

    return (
        <Container>
            <Menu>
                <Logo/>
                <a href="#">ABOUT</a>
                <a href="#">GALLERY</a>
                <a href="#">PRICING</a>
                <a href="#">FAQ</a>
                <a href="#">BENEFITS</a>
            </Menu>
            <div>
                <SignInButton>SIGN IN</SignInButton>
                <SignUpButton>SIGN UP</SignUpButton>
            </div>
            <Burger onClick={()=>setBurgerBoolean(burgerBoolean = true)} onMouseLeave={()=>setBurgerBoolean(burgerBoolean = false)}>
                <MobileMenu style={{width: burgerBoolean ? '40vw' : '0'}}>
                    <Menu>
                        <a style={{display: 'block'}} href="#">ABOUT</a>
                        <a style={{display: 'block'}} href="#">GALLERY</a>
                        <a style={{display: 'block'}} href="#">PRICING</a>
                        <a style={{display: 'block'}} href="#">FAQ</a>
                        <a style={{display: 'block'}} href="#">BENEFITS</a>
                    </Menu>
                </MobileMenu>
            </Burger>
        </Container>
    );
};

export default Header;

const Container = styled.header`
  @media (max-width: 720px) {
    padding: 0 10px;
    width: 100%;
  }
  max-width: 1100px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: absolute;
  z-index: 10;
  top: 82px;
  left: 0;
  right: 0;
`

const Logo = styled.div`
  width: 36px;
  height: 36px;
  background: url("/images/Logo.svg") center no-repeat;
  cursor: pointer;
`

const Menu = styled.nav`
  @media (max-width: 720px) {
    width: unset;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    font-size: 18px;
  }
  width: 427px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  letter-spacing: 2px;
  a {
    @media (max-width: 720px) {
      display: none;
    }
    font-family: 'Gilroy', sans-serif;
    color: #B5B5B5;
    transition-duration: 0.1s;
    :hover {
      color: #F2994A;
      transform: scale(1.2);
    }
  }
`

const SignInButton = styled.button`
  width: 112px;
  height: 100%;
  border: 1px solid #F2994A;
  border-radius: 4px;
  color: #F2994A;
  background-color: rgba(255, 255, 255, 0);
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  transition-duration: 0.1s;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 20px rgba(242, 153, 74, 0.46);
    transform: scale(1.1);
  }
`

const SignUpButton = styled(SignInButton)`
  margin-left: 20px;
  color: white;
  background-color: #F2994A;
`

const Burger = styled.div`
  @media (max-width: 720px) {
    display: block;
  }
  width: 30px;
  height: 30px;
  background: url("/images/Burger.svg") center no-repeat;
  background-size: contain;
  display: none;
`

const MobileMenu = styled.nav`
  position: absolute;
  top: 42px;

  right: 0;
  transition-duration: 0.2s;

  width: 0;
  overflow: hidden;
  height: 40vh;
  background: rgba(182, 114, 53, 0.66);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(5px);
`
