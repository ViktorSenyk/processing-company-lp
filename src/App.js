import './App.css';
import Header from "./components/Header";
import styled from "styled-components";
import HomeBlock from "./components/HomeBlock";
import YourChoiceBlock from "./components/YourChoiceBlock";
import LearnMoreBlock from "./components/LearnMoreBlock";
import SimpleWays from "./components/SimpleWays";
import CreateBlock from "./components/CreateBlock";
import InvestBlock from "./components/InvestBlock";
import HelpFindingBlock from "./components/HelpFindingBlock";
import SendBlock from "./components/SendBlock";
import Footer from "./components/Footer";
import {Fade} from "react-reveal";

function App() {
  return (
      <Container>
          <Header/>
          <main>
              <HomeBlock/>
              <Fade>
                  <YourChoiceBlock/>
                  <LearnMoreBlock/>
                  <SimpleWays/>
                  <CreateBlock/>
                  <InvestBlock/>
                  <HelpFindingBlock/>
                  <SendBlock/>
              </Fade>
          </main>
          <Footer/>
      </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto 169px;
  position: relative;
`
