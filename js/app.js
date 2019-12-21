// ██╗     ███████╗███████╗████████╗    ███████╗██╗██████╗ ███████╗
// ██║     ██╔════╝██╔════╝╚══██╔══╝    ██╔════╝██║██╔══██╗██╔════╝
// ██║     █████╗  █████╗     ██║       ███████╗██║██║  ██║█████╗
// ██║     ██╔══╝  ██╔══╝     ██║       ╚════██║██║██║  ██║██╔══╝
// ███████╗███████╗██║        ██║       ███████║██║██████╔╝███████╗
// ╚══════╝╚══════╝╚═╝        ╚═╝       ╚══════╝╚═╝╚═════╝ ╚══════╝
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
      <div onClick={this.props.explode}>
        {/* Placeholder link while I set up my own little MERN stack web server at home.*/}

        {this.state.mainEntry ? (
          <h1>
            <i className="fas fa-code fa-5x white"></i>
          </h1>
        ) : (
          <h6>
            <i className="fas fa-code fa-5x white"></i>
          </h6>
        )}
        {this.state.mainEntry ? (
          <h2 className="display-1">Farhan Bin Daud</h2>
        ) : (
          <h2>Farhan Bin Daud</h2>
        )}
        {this.state.mainEntry ? (
          <p className="display-3">Singapore</p>
        ) : (
          <p>Singapore</p>
        )}
        <a href="https://www.linkedin.com/in/hantasmagoria/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Hantasmagoria/">
          <i className="fab fa-github"></i>
        </a>
      </div>
    );
  }
}

// ██████╗ ██╗ ██████╗ ██╗  ██╗████████╗    ███████╗██╗██████╗ ███████╗
// ██╔══██╗██║██╔════╝ ██║  ██║╚══██╔══╝    ██╔════╝██║██╔══██╗██╔════╝
// ██████╔╝██║██║  ███╗███████║   ██║       ███████╗██║██║  ██║█████╗
// ██╔══██╗██║██║   ██║██╔══██║   ██║       ╚════██║██║██║  ██║██╔══╝
// ██║  ██║██║╚██████╔╝██║  ██║   ██║       ███████║██║██████╔╝███████╗
// ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝╚═╝╚═════╝ ╚══════╝

class Rightside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainEntry: this.props.mainEntry
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mainEntry != this.props.mainEntry) {
      this.state.mainEntry = this.props.mainEntry;
    }
  }
  render() {
    return (
      <div className="tabbable" id="tabs-899668">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active show" href="#About" data-toggle="tab">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects" data-toggle="tab">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact" data-toggle="tab">
              Contact Info
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {/* About me tab */}
          <div className="tab-pane active" id="About">
            <h2>About</h2>
            <p>
              With the techniques, discipline, and principles learned during my
              time in National Service, I shed light on how frameworks can
              facilitate the agglomeration of generations of computer science
              and computation to solve and create.
              <br />
              My extensive background in technology allows me to generate
              programmatically applicable solutions, and the software
              development and software engineering skills acquired during my
              Software Engineering Immersive course in General Assembly bring
              these solutions to life.
            </p>
            <h2>Skills</h2>
            <p>
              Javascript, HTML5, CSS, Node.js, React, express, ejs, mongodb,
              mongoose, jQuery, Git, Github
            </p>
          </div>
          {/* Projects tab */}
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
          {/* Contact tab */}
          <div className="tab-pane" id="Contact">
            <h2>Contact</h2>
            <p>
              <a href="mailto:farhan.daud.hyperfusion@gmail.com">
                farhan.daud.hyperfusion@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <i className="fas fa-h1    "></i>{" "}
      </div>
    );
  }
}
class Projects extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <i className="fas fa-h1    "></i>{" "}
      </div>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <i className="fas fa-h1    "></i>{" "}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainEntry: 1,
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
        ) : (
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            id="leftHalf"
          >
            <Leftside mainEntry={this.state.mainEntry} explode={this.explode} />
          </div>
        )}

        {this.state.mainEntry ? null : (
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            id="rightHalf"
          >
            <Rightside mainEntry={this.state.mainEntry} />
          </div>
        )}
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
