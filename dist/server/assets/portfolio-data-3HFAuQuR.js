const profile = {
  name: "Nethra Praveen Kumar",
  title: "Engineering Student · AI Enthusiast",
  tagline: "Building software at the intersection of intelligence and engineering. Currently pursuing my degree and contributing to open-source projects.",
  location: "Chennai, India"
};
const education = {
  college: {
    institution: "Chennai Institute of Technology",
    degree: "B.Tech Artificial Intelligence and Data Science",
    duration: "2024-2028",
    score: "CGPA: 8.53",
    details: "Relevant coursework: DSA, OS, DBMS, Computer Networks, ML, DL, AI."
  },
  twelfth: {
    institution: "Velammal Vidhyashram (Class 12)",
    board: "CBSE",
    duration: "2023-2024",
    score: "Percentage: 95.4%",
    details: "PCM with Computer Science."
  },
  tenth: {
    institution: "Velammal Vidhyashram (Class 10)",
    board: "CBSE",
    duration: "2021-2022",
    score: "Percentage: 97.4%",
    details: "Excelled in Mathematics and Science."
  }
};
const projects = [
  {
    name: "Multimodal RAG Chatbot",
    description: "An enterprise-grade, high-performance Retrieval-Augmented Generation (RAG) chatbot built to parse, index, and query uploaded documents in real-time.",
    tech: ["Python", "LangChain", "Streamlit", "Chromadb"],
    github: "https://github.com/NethraSheebha/Multimodal_RAG_Chatbot",
    live: ""
  },
  {
    name: "ChemGuardian Multi Agent System",
    description: "AI-Powered Chemical Leak Detection System using Multi-Agent Intelligence and Vector Similarity Search      ChemGuardian is a production-grade industrial safety system designed to detect chemical leaks in real time using multimodal data streams, vector similarity search, and a coordinated multi-agent architecture.",
    tech: ["Python", "CrewAI", "Qdrant", "PyTorch", "Docker"],
    github: "https://github.com/NethraSheebha/ChemGuardian_Multi_Agent_System",
    live: ""
  },
  {
    name: "D.I.A.L. - AI for 1092 Helpline",
    description: "An Intelligent AI-Assisted Voice-to-Voice Communication Bridge for the Karnataka 1092 Citizen Helpline that is designed to facilitate seamless communication between citizens and government officials, ensuring that dialect and language barriers do not hinder access to essential services.",
    tech: ["Node.js", "WebSocket", "Redis", "PostgreSQL", "Python"],
    github: "https://github.com/NethraSheebha/D.I.A.L--AI_for_1092_Helpline",
    live: ""
  },
  {
    name: "Aviation Logistics Analysis",
    description: "Addresses the critical operational requirement of providing non-technical personnel with rapid, accurate insights from complex flight databases.",
    tech: ["Python", "JavaScript", "RAG"],
    github: "https://github.com/NethraSheebha/aviation-logistics-analysis",
    live: ""
  }
];
const skills = [
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "Numpy", "Pandas", "LLMs", "RAG", "AI Agents"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "JavaScript", "R"]
  },
  {
    category: "Backend and Databases",
    items: ["Node.js", "Django", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "CS Fundamentals",
    items: ["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "OOPS"]
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "Tailwind CSS", "Streamlit", "Flask"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Linux", "AWS", "CI/CD", "Vercel"]
  }
];
const achievements = [
  {
    title: "Global Finalist - Convolve Pan-IIT AI/ML Hackathon",
    org: "IIT Madras",
    date: "Jan 2025",
    description: "Top 15 globally for ChemGuardian, an AI-powered chemical leak detection system using multi-agent intelligence and vector similarity search."
  },
  {
    title: "Finalist — CyborgDB Hackathon",
    org: "CyborgDB",
    date: "Dec 2024",
    description: "Built a real-time fraud detection system for financial transactions using CyborgDB's vector database."
  }
];
const competitiveProgramming = {
  leetcode: {
    handle: "nethra_2024",
    url: "https://leetcode.com/u/nethra_2024/",
    rating: "1747 (Top 9%)",
    solved: "650+ problems solved"
  },
  codechef: {
    handle: "arhten_1317",
    url: "https://www.codechef.com/users/arhten_1317",
    rating: "1353 (1★)",
    solved: "370+ problems solved"
  }
};
const experience = {
  internship: {
    role: "Data Centre Intern",
    company: "Airports Authority of India",
    duration: "Nov 2024 - Dec 2024",
    location: "On-Site, Chennai",
    points: [
      "Developed a Retrieval-Augmented Generation (RAG) pipeline for natural language      database queries in aviation analytics. Enhanced data reliability and interpretability.",
      "Increased the operational efficiency of data retrieval by 40% through optimized vector search and LLM integration."
    ]
  },
  openSource: {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    duration: "2025 - Present",
    location: "GitHub",
    points: [
      "Actively reviewing and contributing to open-source projects in the AI Agents domains."
    ]
  }
};
const contact = {
  email: "nethrapraveenkumar.aids2024@citchennai.net",
  phone: "+91 9994601746",
  linkedin: "www.linkedin.com/in/nethra-praveen-kumar-206269328",
  github: "https://github.com/NethraSheebha"
};
export {
  achievements as a,
  contact as b,
  competitiveProgramming as c,
  experience as d,
  education as e,
  projects as f,
  profile as p,
  skills as s
};
