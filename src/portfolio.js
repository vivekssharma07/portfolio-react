/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vivek's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vivek's Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/vivekssharma07/",
  },
};

//Home Page
const greeting = {
  title: "Vivek Shamra",
  logo_name: "VivekSharma",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1uQJrXK90HMJ5-ZiXYYRGFqZE-h_nGeHR/view?usp=share_link",
  portfolio_repository: "https://github.com/vivekssharma07/portfolio-react",
  githubProfile: "https://github.com/vivekssharma07",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/vivekssharma07",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vivekssharma07/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vivekssharma07@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/vivekssharma07",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vivekssharma07/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vivek_shaarma/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡Building responsive website front end using React-Redux.",
        "⚡Creating application backend in Node, Express.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡Experience working on multiple cloud platforms.",
        "⚡Hosting and maintaining websites on virtual machine instances along with integration of databases.",
        "⚡Deploying deep learning models on cloud to use on mobile devices.",
        "⚡Setting up streaming jobs from DB to Server or vice-versa on AWS.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡Designing highly attractive user interface for mobile and web applications.",
        "⚡Customizing logo designs and building logos from scratch.",
        "⚡Creating the flow of application functionalities to optimize user experience.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/vivekssharma07/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Biju Patnaik University of Technology ",
      subtitle: "B.Tech. in Electronics and Communications Engineering (ECE)",
      logo_path: "bput-logo.png",
      alt_name: "BPUT",
      duration: "2012 - 2016",
      descriptions: [
        "⚡I have studied basic software engineering subjects like DS, Algorithms, DBMS etc.",
        "⚡Apart from this, I have done courses on Full Stack Development and Cloud Computing.",
      ],
      website_link: "https://www.bput.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fullstack Development",
      subtitle: "- MERN Stack",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/",
      alt_name: "Udemy",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with many evolving startups as a Full Stack Developer. I have also worked with some well established companies mostly as Full Stack Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "Cratio Software Pvt Ltd",
          company_url: "https://cratiocrm.com/",
          logo_path: "cratio.png",
          duration: "Feb 2017 - Dec 2018",
          location: "Chennai, Tamil Nadu",
          description: `
            ⚡Responsibilities include Software Development based on customer requirements.
            ⚡Implementing License Info Tracking features in the product.
            ⚡Implementing Audit Log features in the current product (Tracks all the user activity).
            ⚡Working in Frontend(Html,Css,Javascript) as well as Backend( Node JS ).
            ⚡Responsible for all the GUI related changes and working on new requirement in the existing product.
            ⚡Working on API Integration for AWS (SES,SNS,CloudWatch etc),Elasticemail,Sendgrid.
            ⚡Preparing Script for monitoring AWS Server`,
          skills: "⚡Core Java ⚡MySQL ⚡PHP ⚡ Amazon Web Services (AWS)",
          color: "#0879bf",
        },
        {
          title: "Web Application Engineer",
          company: "Siam Computing",
          company_url: "https://siamcomputing.com/",
          logo_path: "siam-computing.png",
          duration: "Jan 2019 - Dec 2020",
          location: "Chennai, Tamil Nadu",
          description: `
            ⚡ Responsibilities includes analyzing, architecture design and creating DB schema based on the requirement.
            ⚡Managing all codes in Gitlab and deploy the code using AWS EC2.
            ⚡Implementing microservice architecture.
            ⚡Creating API's for authentication, clinics, doctor, labs and pharmacy management for the app.
            ⚡Helped in API Integration.
            ⚡Creating software application using Express.
            ⚡Assisting junior developers and performing code review.`,
          skills:
            "⚡PostgreSQL ⚡ Node.js ⚡ MongoDB ⚡ React.js ⚡ Amazon Web Services (AWS) ⚡ Laravel",
          color: "#9b1578",
        },
        {
          title: "Senior Software Engineer",
          company: "LTI - Larsen & Toubro Infotech",
          company_url: "https://www.ltimindtree.com/",
          logo_path: "lti.png",
          duration: "Dec 2020 - Aug 2022",
          location: "Chennai, Tamil Nadu",
          description: `
            ⚡Working as a Lead Engineer and managing all the code for frontend and backend.
            ⚡Implementing Microsoft Graph API for for user login.
            ⚡Implementing API's for creating dynamic database based on the tenants.
            ⚡Taking requirements from business team and implementing the same in app.
            ⚡Responsible for deployemnt of code in Develop,UAT and Production instances.
            ⚡Implemented caching mechanism using Redis for rich user experience.`,
          skills:
            "⚡Redis ⚡ Express.js ⚡ Microsoft Azure ⚡ PostgreSQL ⚡Node.js ⚡React.js ⚡TypeScript ⚡ Next.js",
          color: "#9b1578",
        },
        {
          title: "Senior Software Engineer",
          company: "IQVIA",
          company_url: "https://www.iqvia.com/",
          logo_path: "iqvia.png",
          duration: "Aug 2022 - Present",
          location: "Bengaluru, Karnataka, India",
          description: `
            ⚡Designed and implemented an API for managing clients' business administration.
            ⚡Maintained software products including programs, webpages, and databases.
            ⚡Performed manual testing to deliver quality assurance and ensure the integrity of solutions in the hands of customers.
            ⚡Designed a full-stack Web application to support new features and meet the needs of existing clients.`,
          skills:
            "⚡MERN Stack ⚡ Node.js ⚡ MongoDB ⚡ React.js ⚡ TypeScript",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create a web applications and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_vivek.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Node, React, Javascript, Typescript and Cloud Platorm like AWS,Azure.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kharagpur, Dist: Paschim Midnapore, West Bengal - 721304",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/rUhdY9FfTwZu5MNN9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
