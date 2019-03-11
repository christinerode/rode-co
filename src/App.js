import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
        <div className="w-100 pb6">
          <div className="name fl w-70 w-20-ns f6">Christine Røde</div>
           <ul className="light fl w-30 w-80-ns list ma0 pa0 f6">
              <Social url="http://twitter.com/chrstnerode">Twitter</Social>
              <Social url="http://instagram.com/christinerode">Instagram</Social>
            </ul>
        </div>
    );
  }
}

const Social = ({children, url}) => (
  <li className="m0 p0 tr-s">
    <a href={url}>
      {children}
    </a>
  </li>
)

const Title = ({children}) => (
  <div className="cf fl w-100 mt5 mb5">
    <div className="fl w-20">
      <h2 className="ma0 f7">
        {children}
      </h2>
    </div>
    <div className="fl w-80">
      <span className="h2 f7">&nbsp;</span>
    </div>
  </div>
)

const Experience = ({children, range, place, no}) => (
  <div className="fl w-100  mb5">
    <div className="fl w-20 fw0 f7 light">
       {no}
    </div>
    <div className="fl w-80 f4 f3-ns">
      <div className="fl w-100 light lh-title">
        {range}
      </div>
      <h3 className="f3 f2-ns mv2 fl w-100 w-70-ns fw4 lh-title">
        {children}
      </h3>
      <div className="fr-ns w-100 w-20-ns mv2 place tl-ns f2-ns v-btm">
        <span className="f6 sans-serif place lh-copy">
          {place}
        </span>
      </div>
    </div>
  </div>
)

const Paragraph = ({children, no, css}) => (
  <div className="fl w-100 mb2 mb3-ns">
    <div className="fl serif w-20 fw0 f7">
       {no}
    </div>
    <div className="fl w-80 f4 f3-ns">
      <h3 className="f5 f3-ns mv0 fl w-100 fw4 lh-copy measure">
        {children}
      </h3>
    </div>
  </div>
)

class Resume extends Component {
  render() {
    return (
        <div className="fl w-100 mb2">
          <Title>Experience</Title>

          <Experience range="2017–" place="London" no="01">
              Sr. Product Designer, Deliveroo
          </Experience>
          <Experience range="2016–2017" place="Amsterdam&nbsp;/ Stockholm" no="02">
              Freelance Designer
          </Experience>
          <Experience range="2013–2016" place="California&nbsp;/ London" no="03">
              Product Designer, Facebook
          </Experience>
          <Experience range="&c" no="-"></Experience>

          <Title>Intro</Title>

          <Paragraph no="¶">I'm Christine, a digital product designer passion&shy;ate about people, cultures, and&nbsp;places. </Paragraph>
          <Paragraph no="¶">With a focus on mobile apps, I'm happest when I'm solving complex problems through elegant interactions and user-friendly inter&shy;faces. </Paragraph>

          <div className="cf pa5"></div>

          <Title>Say hi</Title>

          <Paragraph no="→"><strong>hi@christinerode.com</strong></Paragraph>

          <div className="cf pa6"></div>

        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="mb-6">
       <Header />
       <Resume />
     </div>
    );
  }
}

export default App;
