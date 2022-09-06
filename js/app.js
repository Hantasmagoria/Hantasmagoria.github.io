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
      mainEntry: this.props.mainEntry,
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
            <i className="fa-solid fa-file-code fa-5x white"></i>
          </h1>
        ) : (
          <h6 onClick={this.props.explode}>
            <i className="fa-solid fa-file-lines fa-5x white"></i>
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
          <div>
            <p className="display-3 nosel1">
              farhan.daud.hyperfusion@gmail.com
            </p>
            <p className="display-3 nosel1">Singapore</p>
          </div>
        ) : (
          <div>
            <p>farhan.daud.hyperfusion@gmail.com</p>
            <p>Singapore</p>
          </div>
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
      projects: [],
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
      .then((response) => {
        return response.json();
      })
      .then((jsonedResult) => {
        this.setState({ projects: [...jsonedResult] });
        // HINT: this fetches the projects objects from the database
      });
  };

  render() {
    return (
      <div className="tabbable">
        <NavTabs projectOverhaul={this.props.projectOverhaul} />
        <TabContent projects={this.state.projects}/>
      </div>
    );
  }
}

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabdata: tabS.tabList,
    };
  }

  render() {
    return (
      <ul className="nav nav-tabs" id="tableau" role="tablist">
        <React.Fragment>
          {this.state.tabdata.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <a
                id={"navTab" + tab.id}
                className={tab.active ? "nav-link active show" : "nav-link"}
                href={"#" + tab.id}
                data-toggle="tab"
                onClick={this.props.projectOverhaul}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </React.Fragment>
      </ul>
    );
  }
}

class TabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidUpdate(prevProps) {
  //   this.state.projects = 
  // }

  render() {
    return (
      <div className="tab-content flex-grow-1">
        <About />
        <Projects {...props}/>
        <Contact />
      </div>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: tabAbout.section[0],
      skills: tabAbout.section[1],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="tab-pane active" id="About">
          <h2>{this.state.about.title}</h2>
          {this.state.about.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
              <br />
            </p>
          ))}

          <h2>{this.state.skills.title}</h2>
          <div className="row d-flex flex-wrap align-items-center">
            {this.state.skills.content.map((skill) => (
              <div className="m-auto pb-4" key={skill.skillID}>
                <img
                  id={"imgLogo" + skill.skillID}
                  className="img-responsive mx-auto d-block"
                  src={skill.skillIcon}
                  alt={skill.skillName + " Logo"}
                ></img>
                <div className="skillCaption text-center">
                  {skill.skillName}
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.state = { projects: tabProjects.projects };
  }

  render() {
    return (
      <React.Fragment>
        <div className="tab-pane" id="Projects">
          <h2>Projects</h2>
          <div className="row">
            {this.props.projects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="card">
                  <div className="card-title">
                    <h2>{project.title}</h2>
                  </div>
                  <img
                    src={project.banner}
                    alt={project.title + " banner"}
                  ></img>
                  <div className="card-body">
                    <p className="card-text">{project.description}</p>
                    Link:
                    <a href={project.url}>{project.url}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contactInfo: tabContact };
  }

  render() {
    return (
      <React.Fragment>
        <div className="tab-pane" id="Contact">
          <h2>Contact</h2>
          {this.state.contactInfo.data.map((detail) => (
            <div key={detail.id}>
              <p>
                <a href={detail.url}>{detail.linkText}</a>
              </p>
            </div>
          ))}
        </div>
      </React.Fragment>
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
      currentUserIP: "",
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
    // fetch("https://api.ipify.org?format=json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((whoami) => {
    //     this.setState({ currentUserIP: whoami.ip });
    //   });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser != this.state.currentUser) {
      fetch("https://expansiondb.herokuapp.com/users", {
        body: JSON.stringify({
          ip: this.state.currentUserIP,
        }),
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
    }
  }

  projectOverhaul = () => {
    let selfTab = event.target.id;

    switch (selfTab) {
      case "navTabAbout":
        this.setState({
          overhaulProject: 0,
        });
        break;
      case "navTabProj":
        this.setState({
          overhaulProject: 1,
        });
        break;
      case "navTabContact":
        this.setState({
          overhaulProject: 0,
        });
        break;
      default:
        this.setState({
          overhaulProject: 0,
        });
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
