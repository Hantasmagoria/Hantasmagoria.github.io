class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="tab-pane active" id="About">
        {/* {this.state.section.map(section => {
          return (
            <div>
              {" "}
              <h2>{section.title}</h2> <p>{section.content}</p>{" "}
            </div>
          );
        })} */}
        <h2>{this.state.section[0].title}</h2>
        <p>{this.state.section[0].content}</p>
        <h2>{this.state.section[1].title}</h2>
        <p>{this.state.section[1].content}</p>
      </div>
    );
  }
}
class Projects extends React.Component {
  render() {
    return <div className="tab-pane" id="Projects"></div>;
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
