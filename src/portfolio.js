/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mradul Dixit",
  title: "Hi all, I'm Mradul",
  subTitle: emoji(
    "A passionate Frontend Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1jPkIcn3fsGpNILlB1Z33pbhDeCJGhsJR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mraduldixit",
  linkedin: "https://www.linkedin.com/in/mradul-dixit-profile/",
  gmail: "mraduldixit2002@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE AND WANT TO DIVE INTO TECH",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institute of Engineering and Technology (IET), Lucknow",
      logo: require("./assets/images/iet_logo.jpeg"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2019 - June 2023",
      desc: "Part of Fractal a coding club."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Gopal Inter College",
      logo: require("./assets/images/Gopal.jpg"),
      subHeader: "Schooling from 8-12",
      duration: "September 2014 - April 2018",
      desc: "Got 87% in 10th & 86% marks in 12th grade"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend(Node.js)",
      progressPercentage: "50%"
    },
    {
      Stack: "React-Native",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming(DS & algos)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Western Union",
      companylogo: require("./assets/images/WesternUnion.jpg"),
      date: "August 2023 – Present",
      desc: "Frontend (React.js/Next.js/Redux/Jest/JavaScript/SaaS",
      descBullets: [
        "Integrated Apple Pay for the UAE corridor, expanding digital payment options and improving user experience in a key market.",
        "Embedded third-party SDKs like Quantum Metric, Amplitude, Optimizely, and Blaze to support session tracking event logging, and user verification for 80k+ users, improving analytics accuracy and CX.",
        "Upgraded React and related dependencies, resolving X-Ray compatibility issues and reducing build errors by 40%.",
        "Enabled multi-DMA verification, decreasing customer onboarding time by 15–20% across global DMA corridors",
        "Refactored the codebase by cleaning feature flags and removing redundant API calls, improving load times and overall maintainability.",
        "Accelerated test coverage by 30% using GitHub Copilot, improving delivery speed and developer efficiency"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Western Union",
      companylogo: require("./assets/images/WesternUnion.jpg"),
      date: "Jan 2023 – July 2023",
      desc: "Frontend Development (React.js/JavaScript/HTML/CSS)",
      descBullets: [
        "Contributed to a live Admin Portal project, developing 20+ reusable components using React.js and custom CSS, improving UI consistency and delivery speed.",
        "Implemented role-based access control (RBAC), real-time dashboards, and dynamic filters, enhancing admin workflow efficiency by 15–20%.."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Shark-Tank.webp"),
      projectName: " SHARKTANK: DEALHUB",
      projectDesc:
        " full-stack investment pitch platform inspired by Shark Tank using MERN stack,",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shark-tank.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SIH Finalist",
      subtitle:
        " Finalist– Smart India Hackathon 2022 (MHRD AICTE), selected among top national teams from across India",
      image: require("./assets/images/SIH.webp"),
      imageAlt: "SIH Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Runner-up at Hack-X",
      subtitle:
        "Runner-up– Hack-X Hackathon 2022 (NIETNoida), selected among 100+ teams for project GreenCity.",
      image: require("./assets/images/HackX.webp"),
      imageAlt: "HackX Logo",
      footerLink: [
        {
          // name: "View Google Assistant Action",
          // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "GFG Contest",
      subtitle: "Global rank 51st in Codechef June Long Challenge 2021.",
      image: require("./assets/images/GFGContest.webp"),
      imageAlt: "GFG Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open for new opportunity related to software feild to explore and learn.",
  number: "+91 8979907283",
  email_address: "mraduldixit2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Mraduldixit111", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
