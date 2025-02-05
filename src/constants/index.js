import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  shortMaker1,
  shortMaker2,
  shortMakerVid,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "ShortsMaker",
    video: shortMakerVid,
    descriptionDetail:
      "It's an AI Agent named ShortsMaker, it's a comprehensive tool designed to automate the creation of YouTube Shorts. The main functionality revolves around providing a video topic, after which the tool handles the entire process of content creation and publication. The project is predominantly developed in Python, which constitutes 72.2% of the codebase, ensuring robust and efficient handling of script generation, audio creation, and video processing tasks. HTML, making up 17.5% of the codebase, is used for the frontend interface, providing a user-friendly platform for users to interact with the tool. JavaScript, accounting for 10.3% of the codebase, enhances the frontend functionality, enabling dynamic and responsive features. The core features of ShortsMaker include generating video scripts using advanced GPT models, converting these scripts into speech using text-to-speech technology, and combining various video clips to form a cohesive video. Additionally, it supports the automation of video uploads to YouTube, streamlining the entire workflow from content creation to publication. The script generation feature leverages GPT models to create engaging scripts based on the provided video topic. The text-to-speech functionality then converts these scripts into audio, which is synchronized with video clips. The tool also includes capabilities for adding music and subtitles to the videos, ensuring they are engaging and informative. ShortsMaker integrates with the YouTube API to automate the video upload process. This includes generating metadata such as titles, descriptions, and keywords, which are essential for optimizing the video's reach and engagement on YouTube. The tool handles OAuth authentication to securely upload videos to the user's YouTube channel. Overall, ShortsMaker simplifies the process of creating and publishing YouTube Shorts, making it accessible to users with minimal technical expertise. By automating the most time-consuming aspects of video production, it allows users to focus on generating creative content ideas",
    description:
      "AI Agent to automate the creation of YouTube Shorts using AI, create a faceless short simply by providing a video topic to talk about and the AI will generate and even upload the video for you.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyMovie", color: "green-text-gradient" },
      { name: "AssemblyAI", color: "pink-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
    ],
    image: [shortMaker1, shortMaker2],
    source_code_link: "https://github.com/Qaisar-Mateen/ShortsMaker",
  },
  {
    name: "Fake News Detection",
    video: "",
    descriptionDetail:
    "",
    description:
      "",
    tags: [
      { name: "DeepLearning", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "TensorFLow", color: "pink-text-gradient" },
    ],
    image: [weatherpedia,],
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: [termpw,],
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: [mhft,],
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: [payloadmaster,],
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: [CompileVortex,],
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
];
