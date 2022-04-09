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
        `With the techniques, discipline, and principles learned during
        my time in National Service, I shed light on how frameworks can
        facilitate the agglomeration of generations of computer science
        and computation to solve and create.`,
        `My extensive background in technology allows me to generate programmatically
        applicable solutions, and the software development and software
        engineering skills acquired during my Software Engineering
        Immersive course in General Assembly bring these solutions to
        life.`,
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

const tabProjects = {
  active: false,
  projects: [
    {
      id: "projects1",
      title: "Overdoze",
      url: "https://github.com/Hantasmagoria/Hantasmagoria.github.io/blob/master/documentations/overdoze.md",
      banner:
        "https://drive.google.com/uc?export=view&id=1mFB_8x9sptp29KYKMPeNftkwxzCLNIRX",
      description:
        "Project 1 for Software Engineering Immersive @ General Assembly. Platform game developed using HTML5 and Javascript. Assets used are from opengameart.org",
    },
    {
      id: "projects2",
      title: "ODDB",
      url: "https://github.com/Hantasmagoria/ODDB",
      banner:
        "https://drive.google.com/uc?export=view&id=1L2ugVseyhzWE5J_r7Bfqmig2vtyNUWEp",
      description:
        "Project 2 for Software Engineering Immersive @ General Assembly. Data warehouse for leaderboard and score tracking. Inspired by database design at osu.ppy.sh",
    },
    {
      id: "projects3",
      title: "Shana the Discord Bot",
      url: "https://github.com/Hantasmagoria/UnrehearsedAntihistoricalValedictorian",
      banner:
        "https://drive.google.com/uc?export=view&id=10DX_gjsozQd914f8mpLBvDTZaezm8w2x",
      description:
        "Discord bot catered for the needs of the Invictus discord server. Uses the discord.js library, hosted on heroku.",
    },
    {
      id: "projects4",
      title: "MCOnline JN script",
      url: "https://github.com/Hantasmagoria/mcojn",
      banner:
        "https://drive.google.com/uc?export=view&id=1vcdfdEJXJPnDhUdCFL7jvn5CMrD9d6Cd",
      description:
        "A Javascript Bookmarklet for restructuring the data in the DOM within the facility booking system in MCOnline.sg",
    },
  ],
};

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
