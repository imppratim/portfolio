export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "AI/ML" | "Web" | "Frontend" | "Data Engineering" | "Data Analysis";
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
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Web Audio API",
      "Vitest",
      "RestApi",
      "Webpack",
      "Vite",
    ],
    category: "Frontend",
    difficulty: "Advanced",
    github: "https://github.com/Fraunhofer-IIS/mpeg-h-browser-ui",
    icon: "🎵",
    year: 2024,
  },
  {
    id: 2,
    title: "Zero-shot computer vision for Weed Detection",
    description:
      "Exploring zero-shot computer vision models for the annotation and detection in the context of weed detection",
    longDescription:
      "Objective: To eliminate the dependency on supervised learning and manual annotation in agricultural computer vision. Key Contributions: Multi-Task Evaluation: Benchmarked three state-of-the-art foundation models across Classification, Object Detection, and Segmentation. Dataset Diversity: Validated model performance against 6 major datasets (including DeepWeeds and PhenoBench) to test for environmental and morphological robustness. Model Benchmarking: CLIP: Moderate classification success; struggled with morphological similarities. Grounding DINO: High-performance object detection, specifically in cotton field environments. Grounded-SAM2: Best-in-class segmentation stability and accuracy. Optimization Analysis: Documented the computational limitations of SAM2, specifically the $O(n)$ memory scaling issues with high-resolution imagery that impact real-time deployment.",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Pillow",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "scikit-learn",
    ],
    category: "AI/ML",
    difficulty: "Advanced",
    github: "#",
    year: 2025,
  },
  {
    id: 3,
    title:
      "Analyzed the Impact of Weather on Traffic Collision Dynamics in Los Angeles- Data Engineering ",
    description:
      "End-to-end ETL pipeline for data processing and model training",
    longDescription:
      "Comprehensive ML pipeline featuring automated data preprocessing, feature engineering, model selection, and hyperparameter optimization with extensive documentation.",
    technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "scikit-learn"],
    category: "Data Engineering",
    difficulty: "Advanced",
    github: "https://github.com/imppratim/MADE_Project",
    year: 2023,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with React and TypeScript",
    longDescription:
      "Professional portfolio website showcasing projects, skills, and experience with smooth animations, responsive design, and optimized performance.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Bootstrap",
      "CSS3",
    ],
    category: "Web",
    difficulty: "Intermediate",
    github: "https://github.com/imppratim/portfolio",
    icon: "💼",
    year: 2025,
  },
];

export default myProjects;
