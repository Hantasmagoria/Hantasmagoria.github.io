//   ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄
//  ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌
//  ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀      ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀
//  ▐░▌          ▐░▌          ▐░▌               ▐░▌          ▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌
//  ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄
//  ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌          ▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌
//  ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀      ▐░▌           ▀▀▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀
//  ▐░▌          ▐░▌          ▐░▌               ▐░▌                    ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌
//  ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌               ▐░▌           ▄▄▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄
//  ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌               ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌
//   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀                 ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀

class Leftside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainEntry: this.props.mainEntry
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mainEntry != this.props.mainEntry) {
      this.setState({ mainEntry: this.props.mainEntry });
    }
  }

  render() {
    return (
      <div onClick={this.state.mainEntry ? this.props.explode : () => {}}>
        {this.state.mainEntry ? (
          <h1 onClick={this.props.explode} className="text-center">
            <i className="fas fa-code fa-5x white"></i>
          </h1>
        ) : (
          <h6 onClick={this.props.explode}>
            <i className="fas fa-code fa-5x white"></i>
          </h6>
        )}
        {this.state.mainEntry ? (
          <h2 onClick={this.props.explode} className="display-1 nosel1">
            Farhan Bin Daud
          </h2>
        ) : (
          <h2>Farhan Bin Daud</h2>
        )}
        {this.state.mainEntry ? (
          <p className="display-3 nosel1">Singapore</p>
        ) : (
          <p>Singapore</p>
        )}
        <a href="https://www.linkedin.com/in/hantasmagoria/">
          <i
            className={
              this.state.mainEntry
                ? "fab fa-linkedin fa-4x"
                : "fab fa-linkedin fa-2x"
            }
          ></i>
        </a>
        <a href="https://github.com/Hantasmagoria/">
          <i
            className={
              this.state.mainEntry
                ? "fab fa-github fa-4x"
                : "fab fa-github fa-2x"
            }
          ></i>
        </a>
      </div>
    );
  }
}

//  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀      ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀
// ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌     ▐░▌          ▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌
// ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌ ▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌     ▐░▌     ▐░▌▐░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌          ▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀█░█▀▀      ▐░▌     ▐░▌ ▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌           ▀▀▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀
// ▐░▌     ▐░▌       ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌                    ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌
// ▐░▌      ▐░▌  ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌           ▄▄▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄
// ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌
//  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀       ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀

class Rightside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainEntry: this.props.mainEntry,
      overhaulProject: this.props.overhaulProject,
      projects: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mainEntry != this.props.mainEntry) {
      this.state.mainEntry = this.props.mainEntry;
    }
    if (prevProps.overhaulProject != this.props.overhaulProject) {
      //todo
    }
  }

  componentDidMount() {
    this.fetchProj();
  }

  fetchProj = async () => {
    return fetch("https://expansiondb.herokuapp.com/")
      .then(response => {
        return response.json();
      })
      .then(jsonedResult => {
        this.setState({ projects: [...jsonedResult] });
      });
  };

  render() {
    return (
      <div className="tabbable">
        <NavTabs projectOverhaul={this.props.projectOverhaul} />
        <TabContent />
      </div>
    );
  }
}

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="nav nav-tabs" id="tableau" role="tablist">
        <li className="nav-item">
          <a
            id="navTabAbout"
            className="nav-link active show"
            href="#About"
            data-toggle="tab"
            onClick={this.props.projectOverhaul}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            id="navTabProj"
            className="nav-link"
            href="#Projects"
            data-toggle="tab"
            onClick={this.props.projectOverhaul}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            id="navTabContact"
            className="nav-link"
            href="#Contact"
            data-toggle="tab"
            onClick={this.props.projectOverhaul}
          >
            Contact Info
          </a>
        </li>
      </ul>
    );
  }
}

class TabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tab-content h-100">
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tab-pane active" id="About">
        <h2>About</h2>
        <p>
          With the techniques, discipline, and principles learned during my time
          in National Service, I shed light on how frameworks can facilitate the
          agglomeration of generations of computer science and computation to
          solve and create.
          <br />
          My extensive background in technology allows me to generate
          programmatically applicable solutions, and the software development
          and software engineering skills acquired during my Software
          Engineering Immersive course in General Assembly bring these solutions
          to life.
        </p>
        <h2>Skills</h2>
        <p>
          Javascript, HTML5, CSS, Node.js, React, express, ejs, mongodb,
          mongoose, jQuery, Git, Github
        </p>
      </div>
    );
  }
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tab-pane" id="Projects">
        <h2>Projects</h2>
        <a
          href="https://github.com/Hantasmagoria/Hantasmagoria.github.io/blob/master/documentations/overdoze.md"
          title="Project 1 for Software Engineering Immersive @ General Assembly.
                                Platform game developed using HTML5 and Javascript.
                                Assets used are from opengameart.org"
        >
          Overdoze
        </a>
        <a
          href="https://overdozews.herokuapp.com/"
          title="Project 2 for Software Engineering Immersive @ General Assembly.
                                Database-enabled website for leaderboard and score tracking.
                                Inspired by design at osu.ppy.sh"
        >
          ODDB
        </a>
        <a
          href="https://github.com/Hantasmagoria/UnrehearsedAntihistoricalValedictorian"
          title="Discord bot catered for the needs of the Invictus discord server. 
                                Uses the discord.js library, hosted on heroku."
        >
          Shana the Discord Bot
        </a>

        {/* <a href="#">Project 4</a>
                  <a href="#">Project 5</a>
                  <a href="#">Project 6</a>
                  <a href="#">Project 7</a>
                  <a href="#">Project 8</a>
                  <a href="#">Project 9</a>
                  <a href="#">Project 10</a>
                  <a href="#">Project 11</a>  */}

        <a
          href="https://github.com/Hantasmagoria/mcojn"
          title="A Javascript Bookmarklet for restructuring the data in the DOM within the facility booking system in MCOnline.sg"
        >
          MCOnline JN script
        </a>
      </div>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tab-pane" id="Contact">
        <h2>Contact</h2>
        <p>
          <a href="mailto:farhan.daud.hyperfusion@gmail.com">
            farhan.daud.hyperfusion@gmail.com
          </a>
        </p>
      </div>
    );
  }
}

//  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
// ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
// ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀
// ▐░▌       ▐░▌▐░▌          ▐░▌
// ▐░▌       ▐░▌▐░▌          ▐░▌
// ▐░▌       ▐░▌▐░▌          ▐░▌
//  ▀         ▀  ▀            ▀

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainEntry: 1,
      overhaulProject: 0,
      currentUser: ""
    };
  }

  explode = () => {
    if (this.state.mainEntry) {
      this.setState({ mainEntry: 0 });
    } else {
      this.setState({ mainEntry: 1 });
    }
  };

  componentDidMount() {
    fetch("https://api.ipify.org?format=json")
      .then(response => {
        return response.json();
      })
      .then(whoami => {
        this.setState({ currentUser: whoami.ip });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser != this.state.currentUser) {
      fetch("https://expansiondb.herokuapp.com/users", {
        body: JSON.stringify({
          ip: this.state.currentUser
        }),
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      });
    }
  }

  projectOverhaul = () => {
    let selfTab = event.target.id;

    switch (selfTab) {
      case "navTabAbout":
        this.setState({
          overhaulProject: 0
        });
        break;
      case "navTabProj":
        this.setState({
          overhaulProject: 1
        });
        break;
      case "navTabContact":
        this.setState({
          overhaulProject: 0
        });
        break;
      default:
        this.setState({
          overhaulProject: 0
        });
    }
    // this.setState({
    //   overhaulProject: isProj
    // });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.mainEntry ? (
          <div
            className="col-md-12 d-flex align-items-center justify-content-center"
            id="leftHalf"
          >
            <Leftside mainEntry={this.state.mainEntry} explode={this.explode} />
          </div>
        ) : this.state.overhaulProject ? null : (
          <div
            className="col-md-4 d-flex align-items-center justify-content-center"
            id="leftHalf"
          >
            <Leftside mainEntry={this.state.mainEntry} explode={this.explode} />
          </div>
        )}

        {this.state.mainEntry ? null : this.state.overhaulProject ? (
          <div className="col-md-12" id="rightHalf">
            <Rightside
              mainEntry={this.state.mainEntry}
              projectOverhaul={this.projectOverhaul}
            />
          </div>
        ) : (
          <div className="col-md-8" id="rightHalf">
            <Rightside
              mainEntry={this.state.mainEntry}
              projectOverhaul={this.projectOverhaul}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
