class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      section: [
        {
          title: "About",
          content: [
            `With the techniques, discipline, and principles learned during
            my time in National Service, I shed light on how frameworks can
            facilitate the agglomeration of generations of computer science
            and computation to solve and create.`,
            `My extensive
            background in technology allows me to generate programmatically
            applicable solutions, and the software development and software
            engineering skills acquired during my Software Engineering
            Immersive course in General Assembly bring these solutions to
            life.`
          ]
        },
        {
          title: "Skills",
          content: [
            `Javascript, HTML5, CSS, Node.js, React, express, ejs, mongodb,
            mongoose, jQuery, Git, Github`
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div
        className={this.state.active ? "tab-pane active" : "tab-pane"}
        id="About"
      >
        {this.state.section.map((section, key) => {
          return (
            <div>
              {" "}
              <h2>{section.title}</h2> <p>{section.content}</p>{" "}
            </div>
          );
        })}
        {/* <h2>{this.state.section[0].title}</h2>
        <p>{this.state.section[0].content}</p>
        <h2>{this.state.section[1].title}</h2>
        <p>{this.state.section[1].content}</p> */}
      </div>
    );
  }
}
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      projects: [
        {
          title: "Overdoze",
          url:
            "https://github.com/Hantasmagoria/Hantasmagoria.github.io/blob/master/documentations/overdoze.md",
          description: `Project 1 for Software Engineering Immersive @ General Assembly.
        Platform game developed using HTML5 and Javascript.
        Assets used are from opengameart.org`
        },
        {
          title: "ODDB",
          url: "https://overdozews.herokuapp.com/",
          description: `Project 2 for Software Engineering Immersive @ General Assembly.
        Database-enabled website for leaderboard and score tracking.
        Inspired by design at osu.ppy.sh`
        },
        {
          title: "Shana the Discord Bot",
          url:
            "https://github.com/Hantasmagoria/UnrehearsedAntihistoricalValedictorian",
          description: `Discord bot catered for the needs of the Invictus discord server. 
        Uses the discord.js library, hosted on heroku.`
        },
        {
          title: "MCOnline JN script",
          url: "https://github.com/Hantasmagoria/mcojn",
          description: `A Javascript Bookmarklet for restructuring the data in the DOM within the facility booking system in MCOnline.sg`
        }
      ]
    };
  }

  render() {
    return (
      <div
        className={this.state.active ? "tab-pane active" : "tab-pane"}
        id="Projects"
      >
        {this.state.projects.map((project, key) => {
          return (
            <div>
              {" "}
              <a href={project.url} title={project.description}>
                {project.title}
              </a>{" "}
            </div>
          );
        })}
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

class Tab extends React.Component {
  render() {
    <div>
      {" "}
      <i className="fas fa-h1    "></i>{" "}
    </div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="tabbable">
        <About />
        <Projects />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
