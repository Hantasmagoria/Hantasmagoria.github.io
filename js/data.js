const tabS = {
  tabList: [
    {
      id: "About",
      title: "About Me",
      active: true,
    },
    {
      id: "Projects",
      title: "Projects",
      active: false,
    },
    {
      id: "Contact",
      title: "Contact Info",
      active: false,
    },
  ],
};

const tabAbout = {
  active: false,
  section: [
    {
      id: "about1",
      title: "About",
      content: [
        `Hello, I'm Farhan, and I come to the software field with over a decade of experience in the IT sector. Throughout my career, I've had the privilege of working in various roles, including IT Helpdesk, Desktop Support, and Software Engineer. This diverse background has equipped me with a robust technical foundation and a passion for solving complex challenges. My journey into the software field is driven by my fascination with the endless possibilities it offers. I'm excited to leverage my IT expertise to contribute to software development. I believe that my experience in troubleshooting, project management, and attention to detail can be valuable assets in the software world.

While working in IT, I discovered a growing interest in software development, particularly in web and mobile app development. To prepare for this transition, I've dedicated myself to self-study and hands-on projects. I've embarked on coding courses, participated in coding bootcamps, and even built my own software projects. These experiences have solidified my commitment to this career shift and my eagerness to learn and grow. My vision for the future involves becoming a skilled software developer who can create innovative solutions and contribute to the ever-evolving tech landscape. I'm excited about the opportunities that lie ahead and look forward to collaborating with like-minded professionals in the software field.

I'm dedicated to pursuing a path in software development and continuing to build on the knowledge and skills I've acquired over the years. As I take this exciting journey, I'm eager to connect with mentors, colleagues, and organizations that share my passion for software development and its potential to shape our digital world.

`,
        `I play a lot of games during my free time, and I play a rather sizeable amount of genres. 
        Hit me up on discord if you're up for a hundred matches or two! :) (discord username in my github)`,
      ],
    },
    {
      id: "about2",
      title: "Skills",
      content: [
        {
          skillID: 1,
          skillName: `HTML5`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          skillID: 2,
          skillName: `CSS`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          skillID: 3,
          skillName: `Javascript`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          skillID: 4,
          skillName: `React`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          skillID: 5,
          skillName: `Node.js`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        },
        {
          skillID: 6,
          skillName: `Vuejs`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          skillID: 7,
          skillName: `Go`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
        },
        {
          skillID: 8,
          skillName: `Java`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          skillID: 9,
          skillName: `express`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        },
        {
          skillID: 10,
          skillName: `jQuery`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        },
        {
          skillID: 11,
          skillName: `mongodb`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          skillID: 12,
          skillName: `Git`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          skillID: 13,
          skillName: `Github`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          skillID: 14,
          skillName: `Linux`,
          skillIcon:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
      ],
    },
  ],
};

// const tabProjects = {
//   active: false,
//   projects: [
//     {
//       id: "projects1",
//       title: "Overdoze",
//       url: "https://github.com/Hantasmagoria/overdoze",
//       banner:
//         "https://drive.google.com/uc?export=view&id=1mFB_8x9sptp29KYKMPeNftkwxzCLNIRX",
//       description:
//         "Project 1 for Software Engineering Immersive @ General Assembly. Platform game developed using HTML5 and Javascript. Assets used are from opengameart.org",
//     },
//     {
//       id: "projects2",
//       title: "ODDB",
//       url: "https://github.com/Hantasmagoria/ODDB",
//       banner:
//         "https://drive.google.com/uc?export=view&id=1L2ugVseyhzWE5J_r7Bfqmig2vtyNUWEp",
//       description:
//         "Project 2 for Software Engineering Immersive @ General Assembly. Data warehouse for leaderboard and score tracking. Inspired by database design at osu.ppy.sh",
//     },
//     {
//       id: "projects3",
//       title: "Shana the Discord Bot",
//       url: "https://github.com/Hantasmagoria/UnrehearsedAntihistoricalValedictorian",
//       banner:
//         "https://drive.google.com/uc?export=view&id=10DX_gjsozQd914f8mpLBvDTZaezm8w2x",
//       description:
//         "Discord bot catered for the needs of the Invictus discord server. Uses the discord.js library, hosted on heroku.",
//     },
//     {
//       id: "projects4",
//       title: "MCOnline JN script",
//       url: "https://github.com/Hantasmagoria/mcojn",
//       banner:
//         "https://drive.google.com/uc?export=view&id=1vcdfdEJXJPnDhUdCFL7jvn5CMrD9d6Cd",
//       description:
//         "A Javascript Bookmarklet for restructuring the data in the DOM within the facility booking system in MCOnline.sg",
//     },
//   ],
// };

const tabContact = {
  active: false,
  data: [
    {
      id: "email address",
      linkText: "farhan.daud.hyperfusion@gmail.com",
      url: "mailto:farhan.daud.hyperfusion@gmail.com",
    },
    {
      id: "LinkedIn",
      linkText: "LinkedIn",
      url: "https://www.linkedin.com/in/hantasmagoria/",
    },
    {
      id: "Github",
      linkText: "Github",
      url: "https://github.com/Hantasmagoria/",
    },
  ],
};
