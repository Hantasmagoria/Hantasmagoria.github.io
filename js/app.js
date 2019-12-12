// import { Tab, Tabs } from 'react-bootstrap';

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: true,
//       section: [
//         {
//           id: 'about1',
//           title: "About",
//           content: [
//             `With the techniques, discipline, and principles learned during
//             my time in National Service, I shed light on how frameworks can
//             facilitate the agglomeration of generations of computer science
//             and computation to solve and create.`,
//             `My extensive
//             background in technology allows me to generate programmatically
//             applicable solutions, and the software development and software
//             engineering skills acquired during my Software Engineering
//             Immersive course in General Assembly bring these solutions to
//             life.`
//           ]
//         },
//         {
//           id: 'about2',
//           title: "Skills",
//           content: [
//             `Javascript, HTML5, CSS, Node.js, React, express, ejs, mongodb,
//             mongoose, jQuery, Git, Github`
//           ]
//         }
//       ]
//     };
//   }
//   render() {
//     return (
//       <div
//         className={this.state.active ? "tab-pane active" : "tab-pane"}
//         id="About"
//       >
//         {this.state.section.map((section) => {
//           return (
//             <div key={section.id}>
//               {" "}
//               <h2>{section.title}</h2> <p>{section.content}</p>{" "}
//             </div>
//           );
//         })}
//         {/* <h2>{this.state.section[0].title}</h2>
//         <p>{this.state.section[0].content}</p>
//         <h2>{this.state.section[1].title}</h2>
//         <p>{this.state.section[1].content}</p> */}
//       </div>
//     );
//   }
// }

// class Projects extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       projects: [
//         {
//           id: 'projects1',
//           title: "Overdoze",
//           url:
//             "https://github.com/Hantasmagoria/Hantasmagoria.github.io/blob/master/documentations/overdoze.md",
//           description: `Project 1 for Software Engineering Immersive @ General Assembly.
//         Platform game developed using HTML5 and Javascript.
//         Assets used are from opengameart.org`
//         },
//         {
//           id: 'projects2',
//           title: "ODDB",
//           url: "https://overdozews.herokuapp.com/",
//           description: `Project 2 for Software Engineering Immersive @ General Assembly.
//         Database-enabled website for leaderboard and score tracking.
//         Inspired by design at osu.ppy.sh`
//         },
//         {
//           id: 'projects3',
//           title: "Shana the Discord Bot",
//           url:
//             "https://github.com/Hantasmagoria/UnrehearsedAntihistoricalValedictorian",
//           description: `Discord bot catered for the needs of the Invictus discord server.
//         Uses the discord.js library, hosted on heroku.`
//         },
//         {
//           id: 'projects4',
//           title: "MCOnline JN script",
//           url: "https://github.com/Hantasmagoria/mcojn",
//           description: `A Javascript Bookmarklet for restructuring the data in the DOM within the facility booking system in MCOnline.sg`
//         }
//       ]
//     };
//   }
//   render() {
//     return (
//       <div
//         className={this.state.active ? "tab-pane active" : "tab-pane"}
//         id="Projects"
//       >
//         <h2>Projects</h2>
//         {this.state.projects.map((project) => {
//           return (
//             <div key={project.id}>
//               {" "}
//               <a href={project.url} title={project.description}>
//                 {project.title}
//               </a>{" "}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       emailAdd: "farhan.daud.hyperfusion@gmail.com"
//     }
//   }
//   render() {
//     return (
//       <div className={this.state.active ? "tab-pane active" : "tab-pane"}
//         id="Contact">
//         {" "}
//         <h2>Contact</h2>
//         <a href={"mailto:" + this.state.emailAdd}>{this.state.emailAdd}</a>{" "}
//       </div>
//     );
//   }
// }

// class Tabs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tabList: [
//         {
//           id: 'About',
//           title: 'About Me',
//           active: true
//         }, {
//           id: 'Projects',
//           title: 'Projects',
//           active: false
//         }, {
//           id: 'Contact',
//           title: 'Contact Info',
//           active: false
//         },
//       ]
//     }
//   }
//   render() {
//     <div className="tabbable">
//       <ul class="nav nav-tabs">
//         {this.state.tabList.map((tab) => {
//           return (
//             <li className={tab.active ? "nav-item active" : "nav-item"} key={tab.id}>
//               <a className="nav-link" href={'#' + tab.id} data-toggle="tab">
//                 {tab.title}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>;
//   }
// }

// class TabContent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     <div className="tab-content">
//       <About {/* activeTab Prop Here */} />
//       <Projects />
//       <Contact />
//     </div>;
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       <div class="tabbable">
//         <Tabs />
//         <TabContent />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
