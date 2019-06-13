import React, { Component } from 'react';
import useDarkMode from 'use-dark-mode';
import './App.css';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button onClick={darkMode.toggle} className="toggle">
        ☾
      </button>
    </div>
  );
};


class Header extends Component {
  render() {
    return (
        <div className="w-100 pb6">
          <div className="name fl w-60 w-20-ns f6">Christine Røde</div>
           <ul className="light fl w-30 w-50-ns list ma0 pa0 f6">
              <Social url="http://twitter.com/chrstnerode">Twitter</Social>
              <Social url="http://instagram.com/christinerode">Instagram</Social>
            </ul>
            <div className="name fr w-10 w-20-ns f6 tr">
              <DarkModeToggle />
            </div>
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

class Experience extends React.Component {
  constructor(props) {
    super(props)
    // set our default state
    this.state = {
      showInfo: false,
    }
    // set up our methods
    this.toggleInfo = this.toggleInfo.bind(this)
    this.closeInfo = this.closeInfo.bind(this)
  }
  toggleInfo() {
    // running setState like this gives us the previousState and props
    // it makes sure we don’t
    this.setState((prevState, props) => ({
      // doing this will turn true to false and vice versa
      showInfo: !prevState.showInfo,
    }))
  }
  closeInfo() {
    // run setState the regular way to close the overlay
    this.setState({
      showInfo: false,
    })
  }

  render() {
    // this is the same as writing const showInfo = this.state.showInfo
    const {showInfo} = this.state
    return (
      <div className="fl w-100 mb5">
        <div className="fl w-20 fw0 f7 light">
          {this.props.no}
        </div>
        <div className="fl w-80 f4 f3-ns">
          <div className="fl w-100 light lh-title">
            {this.props.range}
          </div>
          <h3 className="f3 f2-ns mv2 fl w-100 w-70-ns fw4 lh-title">
            <a href="#" onClick={this.toggleInfo}>
              {this.props.children}
            </a>
          </h3>
          <div className="fr-ns w-100 w-20-ns mv2 place tl-ns f2-ns v-btm">
            <span className="f6 sans-serif place lh-copy">
              {this.props.place}
            </span>
          </div>
      </div>
        <Info {...this.props} {...this.state} />
    </div>
    )
  }
}

const Info = ({showInfo}) => (
  <div 
    className="info pt3 pt5-ns cl fw3"
    style={{display: showInfo ? 'block' : 'block', height: showInfo ? '200px' : '0px', overflow: 'hidden'}}
  >
    <Paragraph no="&nbsp;">
      Lorem ipsum
    </Paragraph>
    <Paragraph no="&nbsp;">
      –
    </Paragraph>
  </div>
)

const Paragraph = ({children, no, css}) => (
  <div className="fl w-100 mb2 mb3-ns">
    <div className="fl serif w-20 fw0 f7">
       {no}
    </div>
    <div className="fl w-80 f4 f3-ns">
      <p className="f5 f3-ns mv0 fl w-100 fw4 lh-copy measure">
        {children}
      </p>
    </div>
  </div>
)

class Resume extends Component {
  render() {
    return (
        <div className="fl w-100 mb0">
          <Title>Experience</Title>

          <Experience range="2017–" place="London" no="01">
              Sr. Product Designer, Deliveroo
          </Experience>
          <Experience range="2016–2017" place="Amsterdam&nbsp;/ Stockholm" no="02">
              Design Lead, Freelance
          </Experience>
          <Experience range="2013–2016" place="California&nbsp;/ London" no="03">
              Product Designer, Facebook
          </Experience>
          <Experience range="&c" no="&hellip;"></Experience>

        </div>
    );
  }
}

class About extends Component {
  render() {
    return (
        <div className="fl w-100 mb2">
          <Title>Intro</Title>

          <Paragraph no="¶">I'm Christine, a digital product designer passion&shy;ate about people, cultures, and&nbsp;places. </Paragraph>
          <Paragraph no="¶">My primary focus is mobile apps. I thrive when I'm solving complex problems through elegant systems and simple interfaces.</Paragraph>


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
       <About />
     </div>
    );
  }
}

export default App;
