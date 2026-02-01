export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "AI/ML" | "Web" | "Backend" | "Data";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  link?: string;
  github?: string;
  image?: string;
  icon?: string;
  year?: number;
}

const myProjects: Project[] = [
  {
    id: 1,
    title: "MPEG-H Audio Browser UI",
    description:
      "Interactive web interface for browsing and testing MPEG-H 3D audio configurations",
    longDescription:
      "Built a responsive React-based UI for Fraunhofer IIS to explore and configure MPEG-H 3D audio parameters. Features real-time preview, parameter tuning, and audio playback.",
    technologies: ["React", "TypeScript", "Web Audio API", "Vite"],
    category: "Web",
    difficulty: "Advanced",
    github: "https://github.com/Fraunhofer-IIS/mpeg-h-browser-ui",
    icon: "🎵",
    year: 2024,
  },
  {
    id: 2,
    title: "Computer Vision Model",
    description:
      "Real-time object detection system using deep learning and YOLO v8",
    longDescription:
      "Developed a production-ready object detection pipeline with real-time video processing capabilities. Achieved 95%+ accuracy on custom dataset with optimized inference.",
    technologies: ["Python", "TensorFlow", "OpenCV", "YOLO", "NumPy"],
    category: "AI/ML",
    difficulty: "Advanced",
    github: "#",
    icon: "👁️",
    year: 2024,
  },
  {
    id: 3,
    title: "MADE Project - ML Pipeline",
    description:
      "End-to-end machine learning pipeline for data processing and model training",
    longDescription:
      "Comprehensive ML pipeline featuring automated data preprocessing, feature engineering, model selection, and hyperparameter optimization with extensive documentation.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker", "scikit-learn"],
    category: "Backend",
    difficulty: "Advanced",
    github: "https://github.com/imppratim/MADE_Project",
    icon: "⚙️",
    year: 2023,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with React and TypeScript",
    longDescription:
      "Professional portfolio website showcasing projects, skills, and experience with smooth animations, responsive design, and optimized performance.",
    technologies: ["React", "TypeScript", "Vite", "Bootstrap", "CSS3"],
    category: "Web",
    difficulty: "Intermediate",
    link: "https://partha-portfolio.com",
    github: "https://github.com/imppratim/portfolio",
    icon: "💼",
    year: 2025,
  },
];

export default myProjects;
