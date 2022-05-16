import React from 'react';
import styled from "styled-components";

const YourChoiceBlock = () => {
    return (
        <Container>
            <h3>Your choice</h3>
            <p>There are many reasons to get down and start to get depressed about your situation. </p>
            <BenefitsList>
                <div>
                    <h6>Ecstatic elegance</h6>
                    <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                </div>
                <div>
                    <h6>Folly words widow</h6>
                    <p>Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.</p>
                </div>
                <div>
                    <h6>Possible procured trifling</h6>
                    <p>We me rent been part what. An concluded sportsman offending so provision mr education.</p>
                </div>
                <div>
                    <h6>Open game</h6>
                    <p>Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.</p>
                </div>
                <div>
                    <h6>Endeavor</h6>
                    <p>Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. </p>
                </div>
                <div>
                    <h6>Comfort pursuit</h6>
                    <p>Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.</p>
                </div>
            </BenefitsList>
        </Container>
    );
};

export default YourChoiceBlock;

const Container = styled.section`
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 50px;
  }
  width: 997px;
  margin: 99px auto 162px;
  text-align: center;
  h3 {
    font-size: 42px;
    font-family: 'Inter', sans-serif;
    color: #99EFD0;
    margin-bottom: 13px;
  }
  p {
    font-size: 16px;
    font-family: 'Gilroy', sans-serif;
    color: #8476AA;
  }
`

const BenefitsList = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    justify-content: center;
  }
  width: 997px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  div {
    width: 299px;
    height: 106px;
    position: relative;
    text-align: left;
    padding-left: 52px;
    margin-bottom: 35px;
    ::before {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      top: 0;
      left: 0;
    }
    h6 {
      font-size: 18px;
      font-family: 'Gilroy Bold', sans-serif;
      color: #99EFD0;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      font-family: 'Gilroy', sans-serif;
      line-height: 22px;
    }
    :nth-child(1) {
      ::before {
        background: url("/images/Flip-horizontal.svg") no-repeat center;
      }
    }
    :nth-child(2) {
      ::before {
        background: url("/images/Airpods.svg") no-repeat center;
      }
    }
    :nth-child(3) {
      ::before {
        background: url("/images/LTE.svg") no-repeat center;
      }
    }
    :nth-child(4) {
      ::before {
        background: url("/images/ThunderMove.svg") no-repeat center;
      }
    }
    :nth-child(5) {
      ::before {
        background: url("/images/Attachment.svg") no-repeat center;
      }
    }
    :nth-child(6) {
      ::before {
        background: url("/images/Bulb.svg") no-repeat center;
      }
    }
  }
`
