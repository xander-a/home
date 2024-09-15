// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Xander",
  middleName: "",
  lastName: "Alfaro",
  message: " Passionate about software engineering specializing in backend development and data analytics. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/xander-a",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/xander.alfar",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/itsxandro388",
    },
    // {
    //   image: "fa-linkedin",
    //   url: "https://www.linkedin.com/in/xander-alfaro-735370317/",
    // },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/xanderalfaro.png"),
  imageSize: 375,
  message:
    "My name is Xander Alfaro. I’m aspiring software engineer and currently studying at Polytechnic University of the Philippines.",
  resume: "https://imgur.com/a/D9eAT39",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "xander-a",
  reposLength: 0,
  specificRepos: ["E-Commerce-Website", "Database-Project", "Snake-Game", "ZYCUS-OJT"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/xanderalfaro.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/xanderalfaro.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "Java", value: 80 },
    { name: "SQL", value: 60 },
    { name: "Data Structures", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 40 },
    { name: "HTML/CSS", value: 90 },
    { name: "Rust", value: 60 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 100 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 80 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm interested in software development opportunities. I am also interested in machine learning and data science. This is my email account",
  email: "xanderalfaro7@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Quality Assurance Intern',// Here Add Company Name
      companylogo: require('../assets/img/sminvestments.png'),
      date: 'July 2024 – Present',
    },
    {
      role: 'Data Analytics Member',
      companylogo: require('../assets/img/awspup.png'),
      date: 'October 2023 – Present',
    },
    {
      role: 'Tesda NCII Holder in Computer Systems Servicing',
      companylogo: require('../assets/img/tesda.png'),
      date: 'February 2024 – March 2024',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
