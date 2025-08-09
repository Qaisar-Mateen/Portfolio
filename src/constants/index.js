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
  FakeGif1,
  FakeGif2,
  FakeImg1,
  FakeImg2,
  Recomender1,
  Recomender2,
  Recomender3,
  rag1,
  rag2,
  rag3,
  ragvid,
  raggif,
  threejs,
  mhft,
  shortMaker1,
  shortMaker2,
  shortMakerVid,
  mathwork,
  eduskill,
  aqussys0,
  aqussys1,
  aqussys2,
  aqussys3,
  aqussysVid,
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
    name: "AQUSys Intelligence",
    video: aqussysVid,
    descriptionDetail:
      "AQUSys Intelligence is an AI-powered recruitment platform designed to transform the hiring process by enabling companies to post job openings, have candidates interviewed by an intelligent AI agent, and receive automatically ranked resumes tailored to their specific requirements. Developed with a focus on efficiency, fairness, and accuracy, the platform replaces the conventional, time-consuming screening process with a faster, cost-effective solution that delivers higher-quality shortlists. The AI agent conducts structured interviews to assess not just the candidate’s experience but also their skills, problem-solving ability, communication, and cultural fit, ensuring that evaluations go beyond the limitations of a traditional resume. These assessments are then combined with automated resume analysis, leveraging NLP and machine learning models to generate a ranked list of candidates most aligned with the company’s needs. For employers, this means reduced hiring costs, faster decision-making, and a more insightful screening process that prioritizes quality over quantity. For candidates, AQUSys Intelligence offers a fairer chance to showcase their strengths, personality, and capabilities—especially for those who may not stand out through a resume alone—ultimately leveling the playing field and reducing bias. The system is built to be scalable for small businesses, large enterprises, and recruitment agencies, integrating seamlessly with existing HR workflows and Applicant Tracking Systems (ATS). Its core technology stack involves advanced natural language processing for interview and resume understanding, scoring algorithms for ranking candidates, and secure cloud infrastructure for handling sensitive data. By combining automation with intelligent analysis, AQUSys Intelligence delivers a win-win hiring ecosystem where companies get the right talent faster, and candidates get the opportunity to shine beyond paper credentials.",
    description:
      "AQUSys Intelligence uses AI-driven interviews and intelligent resume ranking to deliver faster, fairer, and more accurate hiring decisions—showcasing candidate skills, personality, and problem-solving abilities beyond resumes to ensure better matches, reduced hiring costs, and improved talent quality for employers.",
    tags: [
      { name: "AI Agent", color: "blue-text-gradient" },
      { name: "SaaS", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "RAG", color: "green-text-gradient" },
    ],
    image: [aqussys0, aqussys1, aqussys2, aqussys3],
    source_code_link: "none",
    // source_code_link: "https://github.com/Qaisar-Mateen/ShortsMaker",
  },
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
    source_code_link: "none",
    // source_code_link: "https://github.com/Qaisar-Mateen/ShortsMaker",
  },
  {
    name: "RAGenius",
    video: ragvid,
    description:
      "An AI-powered Lecture Notes Q&A Bot that leverages Retrieval-Augmented Generation (RAG), Qdrant vector search, and advanced LLMs to instantly retrieve contextually relevant information from lecture notes, slides, and textbooks, delivering concise, accurate answers and reducing manual search time for students.",
    descriptionDetail:
      "The Lecture Notes Q&A Bot is an intelligent, AI-powered learning assistant that revolutionizes how students interact with their study materials by using advanced Retrieval-Augmented Generation (RAG), Qdrant vector search, and cutting-edge large language models to deliver instant, accurate, and context-aware answers to any academic question; students simply upload lecture notes, slides, or textbooks in formats like PDF, DOCX, or PPTX, and the system automatically processes, cleans, and organizes the content into searchable, meaningful chunks for lightning-fast retrieval; when a question is asked, the AI retrieves the most relevant passages and generates clear, concise explanations in real-time, eliminating the need for tedious manual searching and helping learners focus on understanding rather than hunting for information; benchmark tests and student studies show up to a 40% reduction in search time, consistently high answer relevance, and a user satisfaction rating of 4.6/5, making it an invaluable tool for personalized learning, exam preparation, and quick concept revision; with its sleek Streamlit-powered interface, scalable architecture, and domain adaptability, the Lecture Notes Q&A Bot offers a smarter, faster, and more engaging way to learn, turning complex academic materials into instant, accessible knowledge.",
    tags: [
      { name: "Graph RAG", color: "blue-text-gradient" },
      { name: "Deep Learning", color: "green-text-gradient" },
      { name: "", color: "pink-text-gradient" },
    ],
    image: [raggif, rag1, rag2, rag3],
    source_code_link: "none",
    // source_code_link:  "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "Fake News Detection",
    // video: "",
    descriptionDetail:
      "It's an AI-powered Fake News Detection Model, designed to analyze and classify news articles as real or fake using NLP and deep learning. The model processes text input, extracts key linguistic features, and applies machine learning techniques to detect misinformation with high accuracy. The project is primarily developed in Python, making up the majority of the codebase, ensuring efficient text processing, model training, and evaluation. TensorFlow and PyTorch power the deep learning models, providing flexibility in experimenting with different architectures like LSTMs, CNNs, and Transformers for optimal performance. Scikit-learn is used for feature extraction techniques such as TF-IDF and word embeddings, enhancing the model's ability to differentiate between real and fake news based on textual patterns. The system follows a structured pipeline, starting with data collection from credible datasets like FakeNewsNet and LIAR. Preprocessing techniques include tokenization, stopword removal, lemmatization, and vectorization to clean and transform raw text into a format suitable for model training. The model then undergoes rigorous training and evaluation, utilizing confusion matrices, precision-recall scores, and F1-measure to ensure reliability in detecting misinformation. A key feature of the model is its real-time inference capability, allowing users to input news articles and receive instant credibility assessments. Additionally, it supports explainability techniques, such as attention mechanisms, to highlight the most influential words contributing to the classification decision. The system can be integrated into web applications, chatbots, and browser extensions, making it accessible for journalists, researchers, and general users. By leveraging AI and NLP, this Fake News Detection Model provides an automated, scalable solution to combat misinformation. It empowers users to make informed decisions, helping to create a more trustworthy digital information space.",
    description:
      "A Fake News Detection Model using NLP and deep learning to analyze articles and determine if they are real or fake. It leverages text preprocessing, TF-IDF, and neural networks to detect misinformation. Try it out and fight fake news!",
    tags: [
      { name: "DeepLearning", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "TensorFLow", color: "pink-text-gradient" },
    ],
    image: [FakeGif1, FakeGif2, FakeImg1, FakeImg2],
    source_code_link: "https://colab.research.google.com/drive/1BiVfBLUXeAKLvEAL-LAXftk0Xfzwjo4M?usp=sharing",
  },
  {
    name: "AI Travel Companion",
    descriptionDetail:
      "The AI-Travel Companion project enhances travel experiences using AI-driven personalization. It offers tailored recommendations based on user preferences, interests, and history while providing access to an AI travel agent with custom commands. The system consists of two main modules: the Countries Recommender and the AI Travel Agent Chatbot. The recommender system employs machine learning techniques, including popularity-based, collaborative filtering, and content-based recommendations, combining them into a hybrid model for personalized travel suggestions. It also integrates real-time data via APIs to display destinations, cities, and accommodations through a user-friendly GUI. The AI Travel Agent Chatbot, powered by the Llama3 model, acts as a virtual travel assistant, responding to user queries and offering travel advice. It utilizes natural language processing (NLP) for interactive, personalized responses. By combining multiple AI techniques, the AI-Travel Companion ensures accurate, diverse, and engaging travel recommendations, simplifying trip planning and enhancing user experiences.",
    description:
      "The AI-Travel Companion project transforms travel with AI-driven personalization, offering tailored recommendations based on user preferences, interests, and history. It also features an AI travel agent for seamless planning and enhanced travel experiences.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "ML", color: "green-text-gradient" },
      { name: "ANN", color: "pink-text-gradient" },
    ],
    image: [Recomender1, Recomender2, Recomender3],
    // source_code_link: "https://github.com/Qaisar-Mateen/AI-TravelRecommender",
    source_code_link: "none",
  },
  {
    name: "Crypto Coin Predictor",
    description:
      "A Crypto Currency trend predictor using time series model only support for Bitcoin and Ethereum do note that the prediction may not 100% reflect the real price",
    descriptionDetail:
      "The Crypto Coin Predictor project leverages time series analysis techniques to forecast cryptocurrency trends, specifically for Bitcoin and Ethereum. By analyzing historical price data and market trends, the model aims to provide insights into potential future price movements. However, it's important to note that the predictions made by the model may not always accurately reflect real-world prices due to the volatile nature of cryptocurrency markets.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Deep Learning", color: "green-text-gradient" },
      { name: "Time Series Analysis", color: "pink-text-gradient" },
    ],
    image: [mhft,],
    source_code_link: "none",
    // source_code_link:  "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
];
