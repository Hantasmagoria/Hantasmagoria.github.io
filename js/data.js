const tabS = {
  tabList: [
    {
      id: "About",
      title: "About Me",
      active: true
    },
    {
      id: "Projects",
      title: "Projects",
      active: false
    },
    {
      id: "Contact",
      title: "Contact Info",
      active: false
    }
  ]
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
        `My extensive
        background in technology allows me to generate programmatically
        applicable solutions, and the software development and software
        engineering skills acquired during my Software Engineering
        Immersive course in General Assembly bring these solutions to
        life.`
      ]
    },
    {
      id: "about2",
      title: "Skills",
      content: [
        `Javascript, HTML5, CSS, Node.js, React, express, ejs, mongodb,
        mongoose, jQuery, Git, Github`
      ]
    }
  ]
};

const tabProjects = {
  active: false,
  projects: [
    {
      id: "projects1",
      title: "Overdoze",
      url:
        "https://github.com/Hantasmagoria/Hantasmagoria.github.io/blob/master/documentations/overdoze.md",
      description:
        "Project 1 for Software Engineering Immersive @ General Assembly. Platform game developed using HTML5 and Javascript. Assets used are from opengameart.org"
    },
    {
      id: "projects2",
      title: "ODDB",
      url: "https://github.com/Hantasmagoria/ODDB",
      description:
        "Project 2 for Software Engineering Immersive @ General Assembly. Database-enabled website for leaderboard and score tracking. Inspired by design at osu.ppy.sh"
    },
    {
      id: "projects3",
      title: "Shana the Discord Bot",
      url:
        "https://github.com/Hantasmagoria/UnrehearsedAntihistoricalValedictorian",
      description:
        "Discord bot catered for the needs of the Invictus discord server. Uses the discord.js library, hosted on heroku."
    },
    {
      id: "projects4",
      title: "MCOnline JN script",
      url: "https://github.com/Hantasmagoria/mcojn",
      description:
        "A Javascript Bookmarklet for restructuring the data in the DOM within the facility booking system in MCOnline.sg"
    }
  ]
};

const tabContact = {
  active: false,
  emailAdd: "farhan.daud.hyperfusion@gmail.com"
};
