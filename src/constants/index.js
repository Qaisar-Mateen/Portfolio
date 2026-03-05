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
  myplate1,
  myplate2,
  myplate3,
  roamly1,
  roamly2,
  roamly3,
  roamly4,
  roamly5,
  roamly6,
  copilot1,
  copilot2,
  copilot3,
  forte1,
  forte2,
  forte3,
  forte4,
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
  name: "FORTE Intelligence",
  // video: ,
  description:
    "AI-powered risk intelligence platform that analyzes global data to detect emerging security threats and deliver verified real-time alerts.",
  descriptionDetail:
    "FORTE is an advanced risk intelligence platform designed to help organizations operating in volatile regions monitor security threats and respond to critical incidents faster. Companies working across global markets often face fragmented information sources, delayed intelligence, and unreliable signals from unstructured data streams. FORTE addresses this challenge by transforming vast quantities of global information into structured, actionable insights.\n\nAt the core of the platform is an autonomous AI intelligence agent built using advanced natural language processing and predictive analysis models. The system continuously scans and processes large volumes of global data, including local news sources, social media signals, and regional reports in multiple languages. By analyzing patterns across these datasets, the AI can detect early indicators of instability, organized crime activity, civil unrest, and environmental hazards before they escalate into major incidents.\n\nTo ensure operational reliability and eliminate the risks associated with automated AI outputs, the platform integrates a human-in-the-loop validation workflow. Intelligence flagged by the AI is routed to a distributed network of regional analysts who verify context, accuracy, and relevance before information is delivered to clients. This hybrid architecture combines the speed of automated analysis with the judgment of human experts to maintain high-confidence intelligence outputs.\n\nThe platform presents verified intelligence through a real-time monitoring dashboard where organizations can track security developments across custom geographic zones, monitor casualty reports, and receive filtered alerts tailored to their operational footprint. By automating the intake and analysis of global data while preserving expert validation, FORTE significantly reduces the time between incident detection and client notification.\n\nUsed by organizations operating across more than 60 countries, including regions in the Middle East and Sub-Saharan Africa, FORTE enables companies to maintain operational continuity and protect personnel during rapidly evolving security events.",
  tags: [
    { name: "AI Agents", color: "blue-text-gradient" },
    { name: "NLP", color: "green-text-gradient" },
    { name: "Predictive Analytics", color: "pink-text-gradient" },
    { name: "Real-Time Intelligence", color: "green-text-gradient" },
  ],
  image: [forte1, forte2, forte3, forte4],
  source_code_link: "none",
},
  {
  name: "Knowledge Copilot",
  // video: knowledgeCopilotVid,
  description:
    "AI knowledge assistant that lets teams ask questions and instantly retrieve answers from internal documents using RAG.",
  descriptionDetail:
    "Knowledge Copilot is an AI-powered internal knowledge assistant designed to solve the common problem of fragmented organizational knowledge. In many companies, SOPs, onboarding documents, internal policies, and operational guidelines are scattered across PDFs, shared drives, and internal systems, making it difficult for employees to quickly find reliable information. This platform centralizes company knowledge and enables teams to retrieve answers instantly through natural language conversations.\n\nThe system is built on a Retrieval-Augmented Generation (RAG) architecture that ingests internal documents such as SOPs, manuals, HR policies, and operational guides. These documents are automatically processed, chunked, and converted into semantic embeddings which are stored in a vector database. When a user submits a question, the system retrieves the most relevant document segments using vector similarity search and feeds them into a large language model to generate accurate responses grounded strictly in company data.\n\nThis approach significantly reduces hallucinations and ensures that every response is traceable to verified internal sources. Employees can simply ask questions such as onboarding procedures, company policies, or operational workflows and receive clear, contextual answers within seconds.\n\nThe platform is orchestrated through an automated workflow architecture that manages document ingestion, embedding generation, query retrieval, and LLM response generation. This makes the system highly scalable and adaptable across departments such as HR, operations, support, IT, and management.\n\nBy transforming static documentation into an interactive knowledge system, Knowledge Copilot reduces repetitive internal questions, accelerates employee onboarding, and ensures consistent access to critical organizational knowledge.",
  tags: [
    { name: "RAG", color: "blue-text-gradient" },
    { name: "Vector Search", color: "green-text-gradient" },
    { name: "LLM", color: "pink-text-gradient" },
    { name: "Automation", color: "green-text-gradient" },
  ],
  image: [copilot1, copilot2, copilot3],
  source_code_link: "none",
},
  {
  name: "Roamly AI",
  // video: ,
  description:
    "AI travel planning platform that generates personalized destinations, itineraries, and bookings using machine learning and multi-agent assistants.",
  descriptionDetail:
    "Roamly AI is an end-to-end AI travel ecosystem designed to eliminate research fatigue and transform trip planning into an intelligent, conversational experience. Instead of forcing users to browse through thousands of generic options, the platform analyzes traveler preferences, behavioral signals, and global travel datasets to produce highly personalized recommendations within seconds.\n\nAt the core of the system is a hybrid machine learning recommendation engine that combines collaborative filtering, content-based analysis, and popularity signals to generate accurate destination suggestions. Using Approximate Nearest Neighbor (ANN) search, the system identifies travelers with similar behavioral patterns and recommends destinations based on collective insights while simultaneously matching destination attributes such as climate, budget, and cultural preferences against user-defined criteria.\n\nBeyond recommendations, Roamly AI introduces a multi-agent AI assistant that autonomously handles complex travel tasks. A central LLM orchestrator delegates responsibilities to specialized sub-agents responsible for flight discovery, accommodation matching, destination exploration, and dynamic itinerary generation. These agents work together to cross-reference real-time APIs and assemble complete travel plans optimized for time, cost, and user preferences.\n\nThe platform integrates with global travel APIs to retrieve live data for flights, hotels, weather conditions, and local attractions while leveraging vector search infrastructure to match user profiles with destination embeddings. This architecture allows Roamly AI to deliver highly relevant travel experiences with minimal user input.\n\nBy combining machine learning recommendation systems, vector search, and agentic AI orchestration, Roamly AI transforms travel planning from a time-consuming research task into an intelligent, automated process that delivers personalized itineraries within minutes.",
  tags: [
    { name: "Multi-Agent AI", color: "blue-text-gradient" },
    { name: "Next.js", color: "pink-text-gradient" },
    { name: "FastAPI", color: "green-text-gradient" },
    { name: "Recommendation System", color: "green-text-gradient" },
  ],
  image: [roamly1, roamly2, roamly3, roamly4, roamly5, roamly6],
  source_code_link: "none",
},
  {
  name: "MyPlate Sentinel",
  // video: myplateVid,
  description:
    "MyPlate Sentinel is an AI-powered automation platform that continuously monitors Luxembourg’s license plate registry and instantly alerts users when their desired custom plates become available, eliminating the need for manual searching.",
  descriptionDetail:
    "MyPlate Sentinel is an advanced automation platform engineered to solve the scarcity problem in Luxembourg highly competitive custom license plate market, where desired numbers can disappear within seconds. The system provides users with a fully automated 'set-and-forget' solution that continuously monitors official government registries and instantly alerts them when their desired plate becomes available. Instead of manually refreshing pages or repeatedly checking the registry, users simply register their target plates and rely on the platform intelligent monitoring infrastructure to handle the rest.\n\nAt the core of the system is a proprietary AI orchestration engine designed to mimic human behavior while operating at machine speed. Unlike conventional web scraping tools, the platform deploys an adaptive automation agent that intelligently interacts with the registry while avoiding detection by anti-automation systems. The system includes a strategic decision engine that evaluates the difficulty of specific plate targets and dynamically allocates computational resources such as proxy nodes and headless browser instances. This engine also calculates adaptive polling intervals to achieve an optimal balance between monitoring speed and stealth.\n\nA sophisticated stealth and emulation layer generates unique execution environments for each monitoring cycle, randomizing browser fingerprints, user-agent strings, headers, cookies, and interaction patterns to simulate authentic user behavior. This allows the system to maintain reliable access even in environments with strict anti-bot protections.\n\nTo maintain stability in a constantly changing environment, the platform incorporates self-correction heuristics that function as an internal resilience mechanism. When the system detects anomalies such as request timeouts, soft blocks, or suspicious response patterns, the agent automatically adjusts its behavior by rotating proxies, modifying request headers, and recalibrating polling frequencies without human intervention.\n\nThe platform also performs deep-scan response analysis by parsing raw HTML and JSON responses to identify subtle indicators of blocking or partial failures, ensuring that unavailable results truly represent plate scarcity rather than detection by security systems.\n\nOnce a target plate becomes available, an event-driven notification system immediately triggers SMS and email alerts, bypassing traditional processing queues to deliver near-instant notifications. This architecture ensures users can act before competitors in an environment where seconds determine success.\n\nBy combining intelligent automation, stealth architecture, adaptive decision systems, and real-time notifications, MyPlate Sentinel transforms a tedious manual process into a seamless, automated experience, delivering high reliability, rapid detection speeds, and continuous monitoring without user intervention.",
  tags: [
    { name: "AI Agent", color: "blue-text-gradient" },
    { name: "Automation", color: "green-text-gradient" },
    { name: "Web Scraping", color: "pink-text-gradient" },
    { name: "Distributed Systems", color: "green-text-gradient" },
  ],
  image: [myplate1, myplate2, myplate3],
  source_code_link: "none",
  },
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
    source_code_link: "https://github.com/Qaisar-Mateen/ShortsMaker",
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
    ],
    image: [raggif, rag1, rag2, rag3],
    source_code_link:  "https://github.com/Qaisar-Mateen/RAGenius",
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
    source_code_link: "https://github.com/Qaisar-Mateen/AI-TravelRecommender",
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
    source_code_link: "https://github.com/Qaisar-Mateen/Price-Predictor",
  },
];
