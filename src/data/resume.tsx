
import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Amit Negi",
  initials: "AN",
  
  url: "https://github.com/AmitNegiOnway",
  location: "India",
  locationLink: "https://www.google.com/maps",
  description:
    "AI / ML Engineer | Generative AI | Data Science",
  summary:
    "I am a postgraduate student in **Data Science and Artificial Intelligence** at South Asian University, with hands-on experience building machine learning pipelines, LLM-powered applications, Retrieval-Augmented Generation (RAG) systems, and AI agents. I work with Python, PyTorch, scikit-learn, LangGraph, FastAPI, and MLOps tools. My interests include applied AI, Generative AI, Agentic AI, and developing reliable, production-oriented AI solutions.",
  avatarUrl: "/images/amit-negi.jpeg",
  
  skills: [
    { name: "Python" },
    { name: "SQL" },
    { name: "NumPy" },
    { name: "Pandas" },
    { name: "Scikit-learn" },
    { name: "PyTorch" },
    { name: "TensorFlow / Keras" },
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "NLP" },
    { name: "Computer Vision" },
    { name: "Transformers / BERT" },
    { name: "LLMs" },
    { name: "LangChain" },
    { name: "LangGraph" },
    { name: "RAG" },
    { name: "Agentic AI" },
    { name: "Vector Stores" },
    { name: "RAGAS" },
    { name: "MLflow" },
    { name: "DVC" },
    { name: "DagsHub" },
    { name: "FastAPI" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Redis" },
    { name: "Ollama" },
    { name: "Prometheus" },
    { name: "Grafana" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "amitnegionway@gmail.com",
    tel: "+91 90684 94099",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmitNegiOnway",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amit-negi-2ba847242",
        icon: Icons.linkedin,
        navbar: true,
      },
      Qiita: {
        name: "Qiita",
        url: "https://qiita.com/Onway",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amitnegionway@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [] as {
  company: string;
  title: string;
  start: string;
  end: string;
  href: string;
  description: string;
  logoUrl?: string;
}[],


  education: [
  {
  school: "South Asian University",
  href: "https://sau.int",
  degree: "M.Sc. in Data Science and Artificial Intelligence",
  start: "Currently pursuing",
  end: "Expected Jan 2027",
    },
    {
      school: "Kumaun University",
      href: "https://kunainital.ac.in",
      degree: "B.Sc. in Mathematics, Statistics and Computer Science",
      start: "2021",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Konbini AI Assistant",
      href: "https://github.com/AmitNegiOnway/Konbini-Chatbot-FastAPI",
      dates: "AI Agent / Generative AI",
      active: true,
      image: undefined,
      description:
        "An agentic AI assistant for Japanese convenience stores, built using LangGraph. It orchestrates multi-step retail workflows, including product pricing, nutrition lookup, document question answering, and backend API operations. Features include Human-in-the-Loop checkout approval, PDF-based RAG, FastAPI microservices, JWT-based role access, Redis caching, and Prometheus instrumentation.",
      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "RAG",
        "Ollama",
        "FastAPI",
        "Streamlit",
        "scikit-learn",
        "TensorFlow",
        "Redis",
        "Prometheus",
      ],
      video: "/videos/konbini-demo.webm",
      links: [
        {
          type: "Source",
          href: "https://github.com/AmitNegiOnway/Konbini-Chatbot-FastAPI",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Japan House Price Prediction",
      href: "https://github.com/AmitNegiOnway/japan-property-price-prediction",
      dates: "Machine Learning / MLOps",
      active: true,
      image: undefined,
      video: undefined,
      description:
        "Developed a LightGBM regression pipeline to predict Japanese property prices, including data preprocessing, feature engineering, and model evaluation. Integrated DVC for data and pipeline versioning and MLflow with DagsHub for experiment tracking. Developed API-based inference. AWS deployment automation, monitoring, and model lifecycle improvements are part of the target architecture.",
      technologies: [
        "Python",
        "LightGBM",
        "Scikit-learn",
        "DVC",
        "MLflow",
        "DagsHub",
        "FastAPI",
        "AWS",
        "Prometheus",
        "Grafana",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmitNegiOnway/japan-property-price-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Master's Thesis Research",
      href: "#projects",
      dates: "Research in Progress",
      active: true,
      video: undefined,
      description:
        "Researching a Risk- and Uncertainty-Aware Adaptive Human-in-the-Loop Decision-Making framework for health-constrained agentic retail systems. The proposed approach evaluates product suitability against user health profiles, allergies, dietary restrictions, and nutritional constraints. It investigates adaptive purchase authorization using health-risk assessment, AI uncertainty, and human intervention policies.",
      technologies: [
        "Agentic AI",
        "LLMs",
        "RAG",
        "LangGraph",
        "Risk Assessment",
        "Uncertainty Assessment",
        "Human-in-the-Loop",
      ],
      image: "/images/Health-Aware AI Retail Decision Workflow.png",
      links: [],
    },
  ],

  hackathons: [] as {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: {
    title: string;
    icon: string;
    href: string;
  }[];
}[],
} as const;